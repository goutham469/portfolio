const exp = require("express")
const securityAPI = exp.Router()

securityAPI.get("/",(req,res)=>{
    res.send("security API")
})

securityAPI.get('/blocked-ips' ,async (req,res)=>{
    let ips = req.blockedIPS.find().toArray()
    res.send(ips)
})

securityAPI.post('/block-ip-Address',async(req,res)=>{
    req.blockedIPS.insertOne({ip:req.body.ip})

    res.send({"status":true , "message":"Ip address blocked !"})
})

securityAPI.post('/unblock-ip-Address',async(req,res)=>{
    req.blockedIPS.deleteOne({ip:req.body.ip})

    res.send({"status":true , "message":"Ip address blocked !"})
})


module.exports = securityAPI;