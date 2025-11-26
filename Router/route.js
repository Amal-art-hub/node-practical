// app.post("/login",(req,res)=>{
// try{
//     const {username,password}=req.body;

//     if(username!=="amal" && password!=='1234'){
//         return res.status(401).json({error:"invalid credentials"});
//     }
//     res.json({message:"login successful"});

// }catch(error){
//     console.error("error in/login route:",error);
//     res.status(500).json({error:"server error"});
// }
// });


const express = require('express');

const router = express.Router();

// This middleware runs for all routes in this router
router.use((req, res, next) => {
  console.log('Router-level middleware activated');
  next();
});

// Example routes
router.get('/user', (req, res) => res.send('User route'));
router.get('/profile', (req, res) => res.send('Profile route'));

module.exports = router;
