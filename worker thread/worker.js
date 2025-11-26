// const{parentPort}=require("worker_threads");

// parentPort.on("message",(msg)=>{
//     let sum=0;
//     for(let i=1;i<=10;i++){
//         sum+=i;
//     }

//     parentPort.postMessage(`message from worker-${sum}`);
// })

// //=======================

///////////////////////////part2


// const{parentPort}=require("worker_threads");

// parentPort.on("message",(limit)=>{
//     let sum=0;
//     for(let i=1;i<limit;i++){
//           sum +=i;
//     };
//     parentPort.postMessage(sum);

// })

///========================
/////////////////////////////////////part3
////////////////////////////////////////////Worker thread receives a range and counts how many prime numbers are in that range.

const {parentPort}=require("worker_threads");

parentPort.on("message",(limit)=>{

 function prime(n){

    if(n<2) return false;

    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0)return false;
    }
    return true;

 }

 let count=0;

 for(let i=0;i<=limit;i++){
    if(prime(i)){
        count++;
    }
 };


parentPort.postMessage(count);

});

   // let count=0;
    // for(let i=0;i<=limit;i++){
    //     let prime=true;
    //     if( i<2) prime=false;
    //     if(let j=2;j<=Math.sqrt(i);j++){
    //         if(i%j===0) prime=false;
    //     }
    //     if(prime){
    //        count++;
    //     }

    