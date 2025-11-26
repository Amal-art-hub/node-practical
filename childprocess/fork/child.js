
///////////////////////////////////////////////////////////////////part1
process.on("message", (data) => {
  console.log("Message from parent:", data);
  process.send({ reply: "hello parent" });
});

let i = 1;
const interval = setInterval(() => {
  process.send(`NUMBER IS: ${i}`);
  i++;
  if (i > 10) {
    clearInterval(interval);
    process.exit();
  }
}, 1000);


//======================
/////////////////////////////////part2

// process.on("message",(msg)=>{
//   console.log("message from  paarent:",msg);
//   process.send("hi parent!");
// })

//=========================
///////////////////////////////////////////////part3


// const fs=require("fs");

// process.on("message",(path)=>{

// fs.readFile(path,"utf-8",(err,data)=>{
//   if(err){
//     process.send({error:err.message});
//   }else{
//     process.send({content:data});
//   }
// })

// })

//===============================================
/////////////////////////////////////////part4

// process.on("message",(num)=>{
//   let result=num%2===0?"even":"odd";


//   process.send(`the ${num} is ${result}`);
// })

///===================================
//////////////////////////////part5

// let i=0;
// let timer=setInterval(()=>{
  
//   process.send(`send after ${i} sec`);
//   i +=2;
//   if(i>10){
//     clearInterval(timer);
//     process.send("completed");
//   }
// },2000);