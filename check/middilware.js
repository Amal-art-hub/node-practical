/////////////////////////////////////////////////////////////////////routerlevel middleware


const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

function validate(req,res,next){
    const {age}=req.body;
    if(isNaN(age)){
        res.status(400).json({error:"age should be number"})
    }
    next();
};

app.post("/user",validate,(req,res)=>{
    const {name,age}=req.body;
res.json({message:`hi ${name}${age}`})
})

app.listen(3000,()=>{console.log("running on 3000");})
//===============
///////////////////////////////////////////////////////////////error handling middleware  using try catch


// const express=require("express");
// const app=express();


// app.get("/",(req,res,next)=>{
//     try{
//         throw new Error("Something went wrong");

//     }catch(err){
//       next(err);
//     }
// })


// app.use((err,req,res,next)=>{
//     console.error(err.stack);
//     res.status(500).json({success:false,message:err.message||"somthing happen"})
// })

// app.listen(3000,()=>{console.log("running on 3000");})
