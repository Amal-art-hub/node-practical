const express=require("express");
const app=express();

function logger(req,res,next){
    console.log(`${req.method} and ${req.url}`)
    next();
}

app.use(logger);

app.get("/",(req,res)=>{
    res.send("Hello middleware")
});

app.listen(3000,()=>{
    console.log("running on 3000");
})

//==========================
//////////////////////////////////////////////////////Router level middle ware

