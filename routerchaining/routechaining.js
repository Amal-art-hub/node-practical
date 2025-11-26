const express=require("express");
const app=express();
app.route("/user")
.get((req,res)=>{res.send("get method")})
.post((req,res)=>{res.send("post method")})
app.listen("4000",()=>{console.log("running on 4000")})