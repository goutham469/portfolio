const exp = require("express")

const countAPI = exp.Router()


countAPI.get('/',(req,res)=>{
    res.send("hi this is CountAPI , ready to communicate!")
})


module.exports = countAPI