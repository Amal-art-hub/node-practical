const express=require("express");
const app=express();

app.get("/user/:id",(req,res,next)=>{
    const id=req.params.id;
    if(!Number(id)){
        const err=new Error("invalis user id");
        err.status=400;
        return next(err);

    }
    res.send(`User ID is ${id}`)
})

app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(err.status||500).send({message:err.message||"Something went wrong"})
})

app.listen(3000,()=>{console.log("Server running")})