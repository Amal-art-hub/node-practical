const {exec}=require("child_process");
exec("node -v",(error,stdout,stderr)=>{
    if(error){
        console.error(`error:${error.message}`);
        return;
    }
    console.log(`node version:${stdout}`)
});

//=================

