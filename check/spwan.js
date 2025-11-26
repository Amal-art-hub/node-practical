// const {spawn}=require("child_process");
// const child=spawn("node",["child.js"]);

// child.stdout.on("data",(data)=>{
//     console.log(`output:${data}`);
// })
//==============

const {spawn}=require("child_process");

const child=spawn("node",["child.js"]);

child.stdout.on("data",(data)=>{
    console.log(`output is:${data}`);

})

child.stderr.on("data",(data)=>{
console.log(`error from child:${data}`);
})

child.on("close",(code)=>{
    console.log(`Child process exited with code ${code}`);
})

//=======================

// const {spawn}=require("child_process");

// spawn("calc");



