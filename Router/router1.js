// const express = require('express');
// const app = express();

// // Import router
// const router = require('./route'); // make sure path is correct

// // Mount router at /api
// app.use('/api', router);

// // Start server
// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });


//=========================================

/////////////////////////////part2


const express=require("express");

const app=express();
const router=require("./router.js");

app.use("/api",router);


app.listen(3000,()=>{
  console.log("running on 3000");
})

