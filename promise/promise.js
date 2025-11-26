//////////////////Create three functions (getUser, getPosts, getComments) that return Promises resolving after 1 second each.
////////////////////////////////////////////////////////////////Use async/await to call them one after another in order.

// function getuser() {
//   return new Promise((resolve) => setTimeout(() => resolve("get data")));
// }

// function getpost() {
//   return new Promise((resolve) => setTimeout(() => resolve("post data")));
// }

// async function fetchdata() {
//   const user = await getuser();
//   console.log(user);

//   const post = await getpost();
//   console.log(post);
// }

// fetchdata();


/////////////Run two async functions simultaneously using Promise.all() —one resolves after 2 seconds, another after 3 seconds.
////////////////////////////////////////////////////////////////////////Log the total time taken (should be around 3 seconds).


// function task1(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log("task 1 done");
//             resolve("Result1");
//         },2000);
//     })
// }

// function task2(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log("task 2 done");
//             resolve("Result2");
//         },3000);
//     })
// }


// async function fetch(){
//     const result=await Promise.all([task1(),task2()]);  
//     console.log(result);

// }

// fetch();

//=====================================

/////////////////////////////////////////Create a Promise chain that:
////////////////////////////////////////Resolves with a number (say 10)
////////////////////////////////////////Doubles it
////////////////////////////////////////Adds 5
/////////////////////////////////////////Prints the final result
/////////////////////////////////////////Use .then() chaining.


// new Promise(resolve=>resolve(10))
// .then((num)=>num*2)
// .then((num)=>num+5)
// .then(result=>{
//     console.log("final result is:",result);
// })

//=====================================

///////////////Create an async function that prints numbers 1 to 5, each after 1 second delay using await.


// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function printNumbers() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     await delay(1000); // wait 1 second before next
//   }
// }

// printNumbers();

///==============================

//////////////////////////////You have three async functions: getUser(), getPosts(userId), getComments(postId).
// Each returns a Promise that resolves after 1 second.

function user(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("User data")
    },1000)
  })
}

function post(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("Posts of that user")
    },2000)
  })
}

function comm(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("Comments of the first post")
    },3000)
  })
}


async function fetch(){
  let user1=await user();
  console.log(user1);
   let post1=await post();
  console.log(post1);
   let comm1=await comm();
  console.log(comm1);
}

fetch();