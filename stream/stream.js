
//=============================================
///////////////////////////////////////////read the data from input.txt
// const fs=require("fs");

// const reader=fs.createReadStream("input.txt","utf-8");

// reader.on("data",(chunk)=>{
//     console.log(`the data is :${chunk}`);
// })

//===================================================
///////////////////////////////////////////write the data to input.txt

// const fs=require("fs");

// const writeble=fs.createWriteStream("input.txt",{ flags: "a" });

// writeble.write("hiii amal how are you\n");
// writeble.write("Adding another line without overwriting.\n");

// writeble.end(()=>{
//     console.log("finished writing to a file");
// });

// writeble.on("error",(err)=>{
// console.log(` error is :`,err);
// })

//=========================
//////////////////////////////////read file from one file to write on another file;;;

const fs=require("fs");
const reader=fs.createReadStream("input.txt");

const writer=fs.createWriteStream("output.txt");

reader.pipe(writer);

writer.on("finish",()=>{
    console.log("file written compltly");
})


reader.on("error",(err)=>{
    console.log("error writing file:",err);
})

writer.on("error",(err)=>{
    console.log("error is :",err);
})





