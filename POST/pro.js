/////////////////////////////////////////////html   to server  name by post method



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
  console.log("running on 3000 port");
});