const express=require("express");

const app=express();

app.route("/user")
.get((req,res)=>{
    res.send("HII")
})
.post((req,res)=>{
    res.send("post")
})

app.listen(3000,()=>{
    console.log("running on 3000")
})