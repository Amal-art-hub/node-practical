////////////////////////////////// Count timer from 10 to 0

// let i=10;

// let interval=setInterval(()=>{
//     console.log(i);
//     i--;
//     if(i<0){
//         clearInterval(interval);
//     }
// },2000);

//==============================================
//////////////////////////////////////////////Task: Print numbers 1 to 5, each after 1 second apart

for(let i=0;i<=5;i++){
    setTimeout(()=>{
        console.log("tick");
    },i*1000);
}