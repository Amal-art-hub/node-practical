// const express=require("express");

// const app=express();
// const useroute=express.Router();

// useroute.use((req,res,next)=>{
//     if(!req.query.name){
//         return res.status(400).send("failed");
//     }
//     next();
// });

// useroute.get("/user",(req,res)=>res.send("profile"));
// useroute.get("/dash",(req,res)=>res.send("dashboard"));

// app.use("/mid",useroute);

// app.listen(3000,()=>{
//     console.log("running on 3000");

// })

//===============================================
/////////////////////part2

const express = require("express");

const route2 = express.Router();

route2.use((req, res, next) => {
  if (!req.query.name) {
    res.status(400).json({ success: failed });
  } else {
    next();
  }
});

route2.get("/", (req, res) => {
  res.send(req.query.name);
});

module.exports = route2;
