const express=require("express");
const app=express();

const cors=require("cors");

app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST"],
    allowedHeaders:["Content-type"]
}));

app.get("/data",(req,res)=>{
    res.json({messsage:"This is CORS-enabled data"});
})

app.listen(5000,()=>console.log("Server runningon port 5000"));




// app.use(cors(...))

// cors() is a middleware function.

// It runs for every incoming request before reaching your route handlers.

// origin: "http://localhost:3000"

// Only requests coming from http://localhost:3000 are allowed.

// Requests from other origins (like http://example.com) will be blocked by the browser.

// methods: ["GET", "POST"]

// Only GET and POST HTTP methods are allowed.

// If someone tries PUT, PATCH, or DELETE from the frontend, the browser will block it.

// allowedHeaders: ["Content-Type"]

// Only requests with the Content-Type header are allowed.

// If the frontend sends custom headers not listed here, the browser will block the request.