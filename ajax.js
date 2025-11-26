async function sendData(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"post",
            header:{"content-type":"application/json"},
            body:JSON.stringify({TITLE:"amal's post"})  
        });


     const data=await response.json();
     console.log("data sent successfully");


    }catch(error){
        console.error("error sending data:",error);
    }
}
sendData()  ;