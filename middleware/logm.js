// const express=require("express");

// const app=express();
// app.use((req,res,next)=>{
//     console.log(`details is ${req.method} and ${req.url}`);
//     next();
// })

// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

// app.listen(3000,()=>{console.log("running on 3000")})

//================================

//////////////Create a custom middleware in Express that logs the request method, URL, and timestamp for every request.
/////////////////////////////////////////////////////////////////////////////////Apply it globally for all routes.

const express=require("express");
const app=express();

function check(req,res,next){
   let time=new Date().toLocaleTimeString();
    console.log(`url:${req.url},method:${req.method},time:${time}`)
    next();
}


app.get("/",check,(req,res)=>{
    res.send("Hello world  wwwwwww")
    
})



app.listen(3000,()=>{console.log("running on 3000")})
