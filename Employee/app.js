const express=require("express")
const app=express()
const bodyParser = require("body-parser")
const router=require("./routers/router")
const cors=require("cors")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use("/",router)
app.listen(3005,function(){
    console.log("Connection established")
})

module.exports=app;