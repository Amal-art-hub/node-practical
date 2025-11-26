///////////////////////////////////////////////////////////1. Create routes using both **path params** and **query params**.    
// ////////////////////////////////////////////Example: `/user/:id?city=Delhi` — return both `id` and `city`.
    
// const express=require("express");


// const app=express();


// function check(req,res,next){
//        let id=req.params.id;
//     let city=req.query.city;

//     if(isNaN(id)){
//         return res.status(500).send("type numbers");
//     }else{
//         next();
//     }
// }

// app.get("/user/:id",check,(req,res)=>{
//       let id=req.params.id;
//       let city=req.query.city;
    

//     res.send(`id is ${id}and city is ${city}`)
// })

// app.listen(3000,()=>{
//     console.log("running on 3000");
// })
//======================
///////////////////////////////////////////////////////////////Handle missing route parameters and send proper error responses.

    
// const express=require("express");


// const app=express();


// app.get("/user",(req,res)=>{
//     res.status(400).send("no given id here ,please give it");
// })

// app.get("/user/:id",(req,res)=>{
//     let id=req.params.id;

// res.send(`id is ${id}`);

    
// })

// app.listen(3000,()=>{
//     console.log("running on 3000");
// })
//====================================================
/////////////////////////////////////////////////////////////Create a route that returns different messages for different users.
// const express = require("express");
// const app = express();

// app.get("/user/:name", (req, res) => {
//   const name = req.params.name.toLowerCase();

//   if (name === "amal") {
//     res.send("👋 Hello Amal! Welcome back!");
//   } else if (name === "krishna") {
//     res.send("🙏 Namaste Krishna! Great to see you!");
//   } else if (name === "star") {
//     res.send("🌟 Hey Star! Keep shining!");
//   } else {
//     res.send(`👤 Hello ${name}, nice to meet you!`);
//   }
// });

// app.listen(3000, () => {
//   console.log("🚀 Server running on port 3000");
// });


//=======================================
////////////////////////////////////////////////////////////////////Demonstrate dynamic routing in Express.
//Dynamic routing means creating routes that can change based on values provided in the URL 
// (like user IDs, usernames, or product names).

//=========================================

/////////////////////////////////////////////////Create a route /multiply/:a/:b that returns the product of two numbers.

// const express = require("express");
// const app = express();


// app.get("/multiply/:a/:b",(req,res)=>{
//     let {a,b}=req.params;
    

//     let a1=Number(a);
//     let b1=Number(b);
//     let product =a1*b1;

//     if(isNaN(a1) ||isNaN(b1)){
//         res.status(400).send("tpe numbers")
//     }else{
//         res.send(`product is ${product}`);
//     }
// })

// app.listen(4000, () => {
//   console.log("🚀 Server running on port 3000");
// });

//=================================================
/////////////////////////////////////////////////////////////////Read two files asynchronously and merge their contents.

// const express = require("express");
// const app = express();


// const fs=require("fs");


// app.get("/",(req,res)=>{


//     fs.readFile("text1.txt","utf-8",(err,data1)=>{
//         if(err){
//            return res.status(400).send("failed")
//         }

//         fs.readFile("text.txt","utf-8",(err,data2)=>{
//              if(err){
//            return res.status(400).send("failed:",err)
//         }

//            let merg=data1+"\n"+data2;

      

//        fs.writeFile("merg.txt",merg,(err)=>{
//         if(err){
//           return console.error(err);
//         }else{
//             res.send("data saved on a file")
//         }


//        })
//         })

//     })
// })


// app.listen(4000, () => {
//   console.log("🚀 Server running on port 3000");
// });

//==================================
//////////////////////////////////////////////////////////////////////Use async/await to read and write data in order.


// const express = require("express");
//  const app = express();


//  const fs=require("fs").promises;

// app.get("/",async(req,res)=>{
//     try{
//         const d1=await fs.readFile("text.txt","utf-8");
//         const d2=await fs.readFile("text1.txt","utf-8");
//         const merged=d1+"\n"+d2;
//         await fs.appendFile("merg.txt",merged);
//         res.send("file transfer successful");
//     }catch(err){
//         res.status(500).send("failed:"+ err.message);
//     }
// })




//  app.listen(5000, () => {
//    console.log("🚀 Server running on port 5000");
//  });

 //===================================================

 ////////////////////////////////////////////////////////////////Create a promise that resolves after 2 seconds and log “Done!”.


//  let mypromise=new Promise((resolve,reject)=>{

//     setTimeout(()=>{

  
//      resolve("Done!");

//        },2000)
//  })
//  mypromise.then((message)=>{
//     console.log(message)
//  });

//====================

/////////////////////////////////////////////////////////////////////checking numbers using path params and req.query
// const express=require("express");

// const app=express();

// function check(req,res,next){
//    let num1=Number(req.params.num);
//    let num2=Number(req.query.num2);


//    if(typeof(num1)!=="number" || typeof(num2)!=="number"){
//       return res.status(400).send("failed");
//    }else{
//       next()
//    }

// }

// app.get("/user/:num",check,(req,res)=>{
//   let num1=Number(req.params.num);
//    let num2=Number(req.query.num2);

//    let result=num2/num1;
//    res.send(`result is:${result}`);
// })

// app.listen(3000,()=>{
//    console.log("running 3000");
// })


//===================================================

//////////////////////////////////////Create an Express.js server with a route /users that returns a list of users in JSON.
/////////////////////////////////////Add functionality to accept a query parameter age to filter users older than the given age.

// const express=require("express");

// const app=express();

// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 20 },
//   { id: 4, name: "David", age: 35 }
// ];

// app.get("/user",(req,res)=>{

// let age=Number(req.query.age);

// if(age){
//    let filt=users.filter(obj=>obj.age>age);
//    res.json(filt);
// }else{
//    res.json(users);
// }

// })

// app.listen(3000,()=>{
//    console.log("running 3000");
// })

//=======================================================

///////////////////////////////////////Write a Node.js script to read a JSON file data.json containing an array of objects. 
//////////////////////////////////////Add a new object to the array and save it back to the file.


const express=require("express");
const app=express();
const fs=require("fs");
const path=require("path");



let file=path.join(__dirname,"data.json");




app.get("/use",(req,res)=>{

   fs.readFile(file,"utf-8",(err,data)=>{
if(err){
   res.status(400).send("failed");
   return;
}

let array;

try{
array=JSON.parse(data);
}catch(err){
   console.log("Error parsing JSON:",err.message);
   return;
}


let obj={ id: 3, name: "Charlie" };
array.push(obj);

fs.writeFile(file,JSON.stringify(array),(err)=>{
  if(err){
    console.log("write error");
  }else{
   res.send("successfull");
  }
})

   })

})



app.listen(3000,()=>{
   console.log("running on 3000");
})
