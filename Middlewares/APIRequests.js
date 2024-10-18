const APIRequests = async (req,res,next) =>{

    if(!req.usersCollection)
    {
        res.send({"message": "Some error Occured at server .",status: false})
    }

    let response = await req.usersCollection.find({email:req.body.email}).toArray()
    response = response[0];

    if(response.credits <= 0)
    {
        let time = new Date()
        time = time.getTime();

        if(response.lastCreditUse + 60*60*1000 < time)
        {
            await req.usersCollection.updateOne({email:req.body.email} , {$set:{lastCreditUse:time,credits:100}})
            // res.send({"message":"New 100 credits Created. enjoy using the services.",status:true , remainingCredits:99})
            next();
        }
        else
        {
            let remainingTime = response.lastCreditUse + 60 * 60 * 1000 - time;
            remainingTime = remainingTime / 1000; // Convert to seconds
            res.send({
                        "message": "your credits are exhausted.",
                        status: false,
                        waitTime: { minutes: Math.floor(remainingTime / 60), seconds: remainingTime % 60 }
                    });

        }
    } 
    else
    {
        await req.usersCollection.updateOne({email:req.body.email} , {$inc:{credits:-1}})
        // res.send({"message":"enjoy using the services.",status:true , remainingCredits:response.credits-1})
        next();
    }
}

module.exports = APIRequests;