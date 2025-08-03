// console.log("start");
// setTimeout(()=>{
//     console.log("Timers");
// },5000)
// console.log("End");

// console.log("1st");
// setTimeout(() => {
//     console.log("Patil");
// },4000)
// setTimeout(() => {
//     console.log("ganesh");
// },2000)
// console.log("4th");

// console.log("1");
// setInterval(() => {
//     console.log("Patil");
// },2000)
// console.log("4th");

// let count=0;
// const timer=setInterval(() => {
//     console.log(`count: ${count}`);
//     count++;
//     if(count>10){
//         clearInterval(timer);
//     }
// },2000)

// function greet(callback){
//     console.log("Hello");
     
//     callback();
// }

// function sayBye(){
//    console.log("GoodBye");
   
// }

// greet(sayBye);

// function myname(name,callback){
//     console.log(`${name}`);
//     setTimeout(add,2000)
// }
// function add(){
//     console.log("After 2s");
// }
// myname("Ayush",add);

// function sayHello(callback) {
//   setTimeout(() => {
//     console.log("Hello");
//     callback();
//   }, 1000);
// }

// function askHowAreYou(callback) {
//   setTimeout(() => {
//     console.log("How are you?");
//     callback();
//   }, 3000);
// }

// function sayGoodbye(callback) {
//   setTimeout(() => {
//     console.log("Goodbye");
//     callback();
//   }, 1000);
// }
// sayHello(() => {
//   askHowAreYou(() => {
//     sayGoodbye(() => {
//       console.log("Conversation ended.");
//     });
//   });
// });

// let greet=new Promise((resolve,reject)=>{
//     console.log("Hello");
//     resolve();
//     reject();
// });
// greet.then(()=>{
//     console.log("Bye");
// });

// console.log("\nUsing Reject:-");
// const loggedInStatus = new Promise ((resolve, reject) =>{
//     setTimeout(() =>{
//         let isLoggedIn = false;

//         if(isLoggedIn === true){
//             console.log("User Is Logged In!");
//             resolve();
//         }
//         else{
//             console.log("User is not logged in!");
//             reject();
//         }
//     },3000);
// });

// loggedInStatus.then(() =>{
//     console.log("After logged in");
    
// }).catch(()=>{
//     console.log("error");
// })

// const loggedInStatus = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let isLoggedin = true;

//         if(isLoggedin){
//             console.log("User is Logged");
//             resolve({'name':'Ayush'});
//         }
//         else{
//             console.log("user is not logged");
//             reject("error");
//         }
//     },3000)
// })

// loggedInStatus.then((user) => {
//     console.log(user)
// }).catch(() => {
//     console.log("Error");
// })

// promis.all

// const promise1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Task 1 completed");
//     }, 1000);
// });

// const promise2 = new Promise((reject, resolve) =>{
//     setTimeout(() =>{
//         resolve("Task 2 completed");
//     }, 1000);
// });

// const promise3 = new Promise((reject, resolve) =>{
//     setTimeout(() =>{
//         reject("Task 3 completed");
//     }, 1000);
// });

// Promise.all([promise1, promise2, promise3])
// .then((results)=>{
//      console.log("All Promises resolved!");
//      console.log(results);
// }).catch((error) => {
//     console.log("One Promise Rejected");
//     console.log(error);
// }).finally(() =>{
//     console.log("Code Executed");  
// })

//ASYNC AWAIT
// function greet(){
//     return new Promise((resolve,reject)=>{
//         console.log("Hello World");
//         resolve();
//     })
// }
// greet();.

// function sayHello() {
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Hello");
//             resolve();
//         }, 1000);
//     })
// }

// function askHowAreYou() {
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("How are you?");
//             resolve();
//         }, 3000);
//     })
// }

// function sayGoodbye() {
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Goodbye");
//             resolve();
//         }, 1000);
//     })
// }
// sayHello(() => {
//   askHowAreYou(() => {
//     sayGoodbye(() => {
//       console.log("Conversation ended.");
//     });
//   });
// });

// async function greet() {
//     return "hello World";
// }
// console.log(greet());

// const userLoggedInStatus = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isUserLoggedIn = false; 

//     if (isUserLoggedIn) {

//       console.log("user is logged in !!!!!!");
//       resolve({userName: "Ayush", age: 18});
      

//     } else {

//       console.log("user logged in error");
//       reject("something went wrong");

//     }
//   }, 3000);
// });

// async function test() {
//     try {
//         const res=await userLoggedInStatus;
//         return res;
//     } catch (error) {
//         console.log("Error is",error);
        
//     }
// }
// console.log(test());

async function fetchAPI() {
    try{
        restult= await fetch('https://jsonplaceholder.typicode.cm/todos')
    }
    catch(error){
        console.log("Ayush",error);        
    }
    const res=await restult.json();
    console.log(res);
    
}
console.log(fetchAPI());
