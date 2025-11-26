// const {Worker}=require("worker_threads");

// const worker=new Worker("./worker.js");

// worker.on("message",(msg)=>{
//     console.log(`sum is=${msg}`);
// });

// worker.postMessage("start");

//=============================================

//////////////////////////part2
/////////////////////////////////////////sum of 1 to 10 using worker tread;


// const {Worker}=require("worker_threads");

// const worker=new Worker("./worker.js");
// worker.postMessage(10);

// worker.on("message",(data)=>{
//     console.log(`sum is:`,data);
// })

//===============================
//////////////////////////////////////part3
////////////////////////////////////////Worker thread receives a range and counts how many prime numbers are in that range.


const {Worker}=require("worker_threads");

const worker=new Worker("./worker.js");


worker.postMessage(20);

worker.on("message",(data)=>{
    console.log(data);
})

