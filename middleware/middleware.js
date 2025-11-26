// // /////////////////////////////////////////////////////////////Example 1 — Application-level middleware
// ////////////////////////////////////////////////////////////Defined directly on the app object, it runs for every request.

// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//   console.log('This runs for every request');
//   next(); // move to next middleware or route
// });

// app.get('/', (req, res) => res.send('Home route'));
// app.get('/user', (req, res) => res.send('User route'));

// app.listen(3000);

// //Output in terminal:This runs for every request

// //===============================
//////////////////////////////////////////////////////////// Example 2 — Router-level middleware
////////////////////////////////////////////////////////////Middleware that runs only for a specific router file.

// const express = require('express');
// const router = express.Router();

// router.use((req, res, next) => {
//   console.log('Router-level middleware');
//   next();
// });

// router.get('/user', (req, res) => res.send('User route'));
// module.exports = router;

// //Then in app.js:

// app.use('/', router);

// //Now Router-level middleware runs only for routes inside that router.
// /================================================================================================
// // ///////////////////////////////////////////////////////////////////// Example 3 — Built-in middleware

// //Express comes with some built-in ones like:

// app.use(express.json()); // parse JSON body
// app.use(express.urlencoded({ extended: true })); // parse form data
// app.use(express.static('public')); // serve static files

// //=====================================================================
// ////////////////////////////////////////////////////////////////////////////////  Example 4 — Error-handling middleware
// //////////////////////////////////////////////////////////////////////Error middleware has four parameters instead of three.

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

// //If you call next(err) anywhere, Express jumps directly to this middleware.

// //=================
// // ///////////////////////////////////////////////////////////////////////////////////////Flow of Middleware
// ///////////////////////////////////////////////////////////Request → Middleware 1 → Middleware 2 → Route Handler → Response

// Example:

// app.use((req, res, next) => {
//   console.log('1');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('2');
//   next();
// });

// app.get('/', (req, res) => {
//   console.log('3');
//   res.send('Done');
// });

// //Output:

// //1
// ////2
// //3

// // | Type              | Description              | Example                 |
// // | ----------------- | ------------------------ | ----------------------- |
// // | Application-level | Runs for all routes      | `app.use(...)`          |
// // | Router-level      | Runs for specific router | `router.use(...)`       |
// // | Built-in          | Provided by Express      | `express.json()`        |
// // | Third-party       | Installed packages       | `morgan`, `cors`, etc.  |
// // | Error-handling    | Handles errors           | `(err, req, res, next)` |

////////==================================================================================================================
//////////////////////////////////////////////////////////////////////////////////////////error handling middleware
// const express=require("express");
// const app=express();

// app.get("/",(req,res)=>{
//   throw new Error("connection failed");

// });

// app.use((err,req,res,next)=>{
//   console.log(err.stack);
//   res.status(500).send(err.message)
// })

// app.listen(3000,()=>{console.log("http://localhost:3000")})

//===============================
////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////path params and path query
// const express=require("express");

// const app=express();

// app.get("/:id",(req,res)=>{
//   let id=req.params.id;
//   let price=req.query.price;
//   res.send(`${id} under ${price}`);
// })

// app.listen(4000,()=>{console.log("running on 3000")});

//////////////////==============================================================================
//////////////////////////////////////////////////////////////////////////////////router middleware
// const express = require("express");

// const app = express();

// function check(req, res, next) {
//   let age = req.query.age;
//   if (age < 18) {
//     res.send("not eligible");
//   }
//   next();
// }

// app.get("/elec", check, (req, res) => {
//   res.send("you are eligible for voting");
// });

// app.listen(4000, () => {
//   console.log("running on 3000");
// });

///////////////////////////////////////////////////====================================================
///////////////////////////////////////////////////////////////////////////////////////////router chainig
// const express = require("express");

// const app = express();

// const router = express.Router();

// router
//   .route("/check")
//   .get((req, res) => {
//     res.send("get method");
//   })
//   .post((req, res) => {
//     res.send("post method");
//   });

// app.use("/user", router);

// app.listen(4000, () => {
//   console.log("running on 3000");
// });


//=============================================================================================
////////////////////////////////////////////////////////////////////////////////html   to server  name by post method

const express = require("express");

const app = express();

const fs=require("fs");
const path=require("path");

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",(req,res)=>{
     res.sendFile(path.join(__dirname,"test.html"))
})


app.post("/submit",(req,res)=>{
  const text=req.body.text;

  fs.appendFile("text.txt",text+"\n",(err)=>{
    if(err) console.log(err);
    res.send(`completed`);
  })

})

app.listen(4000, () => {
  console.log("running on 3000");
});