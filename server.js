const exp = require("express")
const app = exp()
require('dotenv').config()
const cors = require('cors')

const countAPI = require('./APIs/countAPI')
const usersAPI = require('./APIs/usersAPI')
const DBAccess = require("./Middlewares/DBAccess")
const IPAddress = require("./Middlewares/IPAddress")
const securityAPI = require("./APIs/securityAPI")
const ImageSearch = require("./APIs/ImageSearch")
const mclient = require('mongodb').MongoClient

mclient.connect(process.env.MONGODB_URL).then(client=>{
    const db = client.db('portfolio')

    const usersCollection = db.collection('users')
    const ipCollection = db.collection('ip')
    const blockedIPS = db.collection('blockedips')

    app.set("usersCollection" , usersCollection)
    app.set("ipCollection" , ipCollection)
    app.set("blockedIPS" , blockedIPS)

    console.log("mongoDB connection success !")
}).catch(err=>console.log("mongoDB connection failed !" ,err))

app.use(DBAccess)
app.use(cors())
app.use(exp.json())

app.use(IPAddress)

app.get('/',(req,res)=>{
    res.send(`<h1>Hi goutham , I am portfoio server speaking !</h1>`)
})

app.use('/count',countAPI)
app.use('/users' , usersAPI)
app.use('/security' , securityAPI)

app.use('/Image-search',ImageSearch)


const listOfServers = [
    "https://doughtflow.onrender.com",
    "https://nss-tl7i.onrender.com",
    "https://fieldprojectserver.onrender.com",
    "https://certificationprojectserver.onrender.com",
    "https://portfolio-goutham.onrender.com",
    "https://url-shortener-o1gb.onrender.com"
]
async function fetchURLs()
{
    listOfServers.forEach(url=>{
        fetch(url).then(res=>console.log(res))
    })
}

setInterval(fetchURLs , 5*60*1000)


app.listen(4000,()=>{console.log("server running on port 4000...")})