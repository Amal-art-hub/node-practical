////////////////////////////////////////////////////Create an Express server that writes the current date or time into a file.

// const express=require("express");
// const fs=require("fs");

// const app=express();

// app.get("/",(req,res)=>{

//     let date=new Date().toLocaleDateString("en-GB");

//     //if only want date toLocaleDateString("en-GB");
//     //if i only want time toLocaleTimeString('en-IN')
//     //if i want both  tostring()

// fs.writeFile("text.txt",date,(err)=>{
//     if(err){
//          return res.status(400).send("failed");
//     }
//     res.send("current date saved in date.txt");
// })

// })

// app.listen(3000,()=>{
//     console.log("running on 3000");

// })

//================================================================================================================

///////////////////////////////////////////////////////////////////////////Append new data to a file each time the route is hit.

// const express = require("express");
// const fs = require("fs");

// const app = express();

// app.get("/", (req, res) => {
//   let data = req.query || "no message";
//   let log = `Time:${new Date().toISOString()} and message:${data}\n`;
//   fs.appendFile("text.txt", log, (err) => {
//     if (err) {
//       return res.status(500).send("Error saving log");
//     } else {
//       res.send("successfulll");
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log("running on 3000");
// });

//=====================================================================================================

/////////////////////////////////////////////////////////Read content from a text file and return it in the browser response.

//   const express=require("express");
//   const fs=require("fs");

//   const app=express();

//   app.get("/",(req,res)=>{

//     fs.readFile("text.txt","utf-8",(err,data)=>{
//         if(err){
//             return res.status(500).send("failed");
//         }else{
//             res.send(data);
//         }
//     })

//   })

//   app.listen(3000,()=>{
//      console.log("running on 3000");
//   })
//=================================================================
///////////////////////////////////////////////////////////////////Delete a file using Node’s fs module.

//     const express=require("express");
//   const fs=require("fs");

//   const app=express();

// app.get("/",(req,res)=>{
//     fs.unlink("text.txt",(err)=>{
//         if(err){
//             return res.status(500).send("failed");
//         }else{
//          res.status(201).send("successfull");
//         }
//     })
// })

//     app.listen(3000,()=>{
//      console.log("running on 3000");
//   })
//=========================================================================================================

//////////////////////////////////////////////////////////////Create a file and write JSON data (like user info) into it.

// const express = require("express");
// const fs = require("fs");

// const app = express();

// app.get("/", (req, res) => {
//   let user = { name: "amal", place: "ayikarapadi", pincode: "673737" };

//   fs.appendFile("text.txt", JSON.stringify(user)+"\n", (err) => {
//     if (err) {
//       res.status(500).send("failed");
//     } else {
//       res.send("done");
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log("running on 3000");
// });

//====================================================================================================

////////////////////////////////////////////Read JSON data from a file, parse it, and send it as a response.

     const express=require("express");
   const fs=require("fs");

  const app=express();

app.get("/",(req,res)=>{

    fs.readFile("text.txt","utf-8",(err,data)=>{
        if(err){
           return res.status(500).send("failed");
        }else{
            res.json(JSON.parse(data));

        }

    })

})
       app.listen(3000,()=>{
      console.log("running on 3000");
   })
