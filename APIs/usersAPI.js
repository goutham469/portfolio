const exp = require('express')
const usersAPI = exp.Router()

usersAPI.get('/',(req,res)=>{
    res.send("users API")
})

usersAPI.get('/all-users', async(req,res)=>{
    let users = req.usersCollection.find().toArray()

    res.send(users)
})

function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        // Pick a random character from the characters string
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

usersAPI.post('/login', async (req, res) => {
    let response = await req.usersCollection.find({ email: req.body.email }).toArray();
    const ip = req.ip;

    if (response.length > 0) {
        // User exists, update IP address count
        await req.usersCollection.updateOne(
            { email: req.body.email, "ipAddress.ip": ip }, // Check if the user with the same IP exists
            {
                $inc: { "ipAddress.$.count": 1 }, // Increment the count for the existing IP
            }
        );
        
        // If the IP does not exist, push it into the array with count set to 1
        const ipExists = await req.usersCollection.findOne({ email: req.body.email, "ipAddress.ip": ip });
        if (!ipExists) {
            await req.usersCollection.updateOne(
                { email: req.body.email },
                {
                    $push: { ipAddress: { ip: ip, count: 1 } } // Add a new IP with count 1
                }
            );
        }

        res.send({ "message": "login success" });
    } else {
        // New user, insert into the collection and add IP address
        let time = new Date();
        response = await req.usersCollection.insertOne({
            "email": req.body.email,
            "img": req.body.img,
            "lastCreditUse": time.getTime(),
            "credits": 100,
            "APIKey":generateRandomString(30),
            "ipAddress": [{ ip: ip, count: 1 }] // Add the IP address with count 1 for new user
        });
        res.send(response);
    }
});

usersAPI.post('/credentials' , async(req,res)=>{
    let response = await req.usersCollection.find({email:req.body.email}).toArray()
    if(response[0])
    {
        res.send(response[0])
    }
    else
    {
        res.send({"status":false, "message":"user not found"})
    }
})


usersAPI.post('/api-request' , async(req,res)=>{
    let response = await req.usersCollection.find({email:req.body.email}).toArray()
    response = response[0];

    if(response.credits <= 0)
    {
        let time = new Date()
        time = time.getTime();

        if(response.lastCreditUse + 60*60*1000 < time)
        {
            await req.usersCollection.updateOne({email:req.body.email} , {$set:{lastCreditUse:time,credits:100}})
            res.send({"message":"New 100 credits Created. enjoy using the services.",status:true , remainingCredits:99})
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
        res.send({"message":"enjoy using the services.",status:true , remainingCredits:response.credits-1})
    }
})

usersAPI.post('/revoke-credits-manually',async(req,res)=>{
    let time = new Date()
    time = time.getTime();
    await req.usersCollection.updateOne({email:req.body.email} , {$set:{lastCreditUse:time,credits:100}})
    res.send({"message":"New 100 credits Created. enjoy using the services.",status:true , remainingCredits:99})
    
})


module.exports = usersAPI;