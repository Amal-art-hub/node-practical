//API validations and exception handling, 

const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/user",(req,res)=>{
    const{name,age}=req.body;
   
    if(!name||!age){
     return res.status(400).json({error:"Name and age required"});
   }

   res.json({message:"Data received ",name,age});

});

app.listen(3000,()=>{console.log("running on 3000");})