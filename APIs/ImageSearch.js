const exp = require("express")
const APIRequests = require("../Middlewares/APIRequests")
const ImageSearch = exp.Router()

ImageSearch.get('/',(req,res)=>{
    res.send("Image search API")
})

ImageSearch.post('/search' , APIRequests , async(req,res)=>{

    console.log("entered to image search route",req.body)

    let data = await fetch(`${process.env.IMAGE_SEARCH_URL}`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({query:req.body.query})
    })
    
    data = await data.json()

    console.log(data)
    res.send(data)
})

module.exports = ImageSearch;