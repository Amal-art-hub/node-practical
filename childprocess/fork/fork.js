// /////////////////////////////////////////////////////part1
// const { fork } = require("child_process");

// const child = fork("./child.js");   // ✅ note the './' before file name

// child.send({ msg: "hello child" });

// child.on("message", (data) => {
//   console.log("message from child:", data);
// });
//=================================
////////////////////////part2
////////////////////////👉 How can you create a child process that runs another Node.js file and exchange messages between them?

// const {fork}=require("child_process");

// const child=fork("./child.js");

// child.send("hello child");
// child.on("message",(data)=>{
//   console.log("message from child:",data);
// });

///===================
/////////////////////////////part3
//////🧩 Write a program where the parent process forks a child to fetch data from a file and sends the content back to the parent.

// const {fork}=require("child_process");

// const path=require("path");

// const child=fork("./child.js");

// const filepath=path.join(__dirname,"./text.txt");

// child.send(filepath);

// child.on("message",(data)=>{
//   if(data.error){
//     console.log("error from child:",data.error);
//   }else{
//     console.log("file content from child:\n",data.content);
//   }
// });

//==========================================
/////////////////////part4
//////////////////////Parent sends several numbers, and the child returns whether each number is even or odd

// const {fork}=require("child_process");

// const child=fork("./child.js");

// [2,3,4,5,6,7,8].forEach(ele=>{
//   child.send(ele);
// });

// child.on("message",(data)=>{
//     console.log(data);  
// });

///=============================

/////////////////////////////////part5
///////////////////////////////////////Child sends progress updates every 2 seconds while performing a task.
// const {fork}=require("child_process");

// const child=fork("./child.js");

// child.on("message",(data)=>{
//   console.log(data);
// })



