
// const express=require("express");
// const path=require("path");

// const app=express();

// app.set("view engine","hbs");
// app.set("views",path.join(__dirname,"views"));


// app.get("/",(req,res)=>{

//     res.render("test",{skills:["mern","pyton","php"]});

// })
// app.listen(3000,()=>{
//     console.log("running on 3000");
// })

//===========================


const express=require("express");
const app=express();
const path=require("path");

app.set("view engine","hbs");
app.set("views",path.join(__dirname,"views"));


app.get("/",(req,res)=>{
    res.render("test",{hobby:["trekking","writing","reading"]});
})

app.listen(3000,()=>{
    console.log("runing on 3000");
})

