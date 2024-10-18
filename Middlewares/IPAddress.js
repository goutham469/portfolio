const IPAddress = async (req,res,next) =>{
    if(req.blockedIPS)
    {
        let response = await req.blockedIPS.find({ip:req.ip},{_id:false}).toArray()
        console.log(" IP Address middleware ",response)
    }
    if(req.ipCollection)
    {
        let response = await req.ipCollection.find({ip:req.ip}).toArray()

        // console.log(response[0])

        if(response[0])
        {
            if(response[0].cnt > 3000)
            {
                res.send("Malicious Activity detected. Your ip Address is Blocked by our servers .As you exceed 3000 requests .")
            }
            else
            {
                await req.ipCollection.updateOne({ip:req.ip} , {$inc:{cnt:1}})
                next()
            }
        }
        else
        {
            await req.ipCollection.insertOne({ip:req.ip , cnt:1})
            next()
        }
    }
    else
    {
        next()
    }
}

module.exports = IPAddress