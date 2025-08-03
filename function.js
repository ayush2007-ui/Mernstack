// function addnum(num1,num2)
// {
//     console.log(num1+num2);
    
// }
// console.log(addnum(10,20));

// const person={
//     uer:"Ayush",
//     age:18,
//     greet:()=>{
//         return `hello ,${this.uer}`;
//     }
// };
// console.log(person.greet());

// const greet=()=>("Hello World");
// console.log(greet);
// const addnum=num1=>num1+5;
// console.log(addnum(10));

// function addnum(num1,num2){
//     let result=num1+num2;
//     return result;
// }
// console.log(addnum(10,20));

// const addnum=(num1,num2)=>{
//     let result=num1+num2;
//     return result;
// }
// console.log(addnum(10,20));


// function showarg(){
//     console.log(arguments);
    
// }
// console.log(10,20,30);

//Arrow function dont have their own arguments object.
// const showarg=()=>(arguments)
// console.log(showarg(10,20,30));

// const arr=[1,2,3,4,10,20,5,50];
// const newar=[];
// for(let i=0;i<=arr.length;i++)
// {
//     if(arr[i]>4)
//     {
//         newar.push(arr[i]);
        
//     }
    
// }
// console.log(newar);

// const newarr=arr.filter((val)=>(val>4));
// console.log(newarr);

// const strarr=["Ayush","Sahil","Sidd","Ram"];
// const newstr=strarr.filter((str)=>(str.length>3));
// console.log(newstr);

// const arr=[1,2,3,4,5,6];
// const newar=[];
// for(const num of arr)
// {
//     newar.push(num*10);
    
// }
// console.log(newar);

// const array=[1,2,3,4,5];
// const newarray=array.map((val)=>(val*10));
// console.log(newarray);

// const strarr=["Ayush","Sahil","Sidd","Ram"];
// const newstr=strarr.map((str)=>(str.toUpperCase()));
// console.log(newstr);

// const studentInfo = {
//     userName : "Ayush",
//     age : 18,
//     isLoggedIn : true
// }

// console.log(typeof studentInfo);
// console.log(typeof {});
// console.log(Object.values(studentInfo));
// console.log(studentInfo.userName="Ayush Bhosale");
// console.log(studentInfo.age=19);
// console.log(studentInfo.email="ayush@gmail.com");
// console.log(Object.freeze(studentInfo));
// console.log(studentInfo.age=25);
// console.log(studentInfo.hasOwnProperty("phone"));
// console.log(Object.entries(studentInfo));
// console.log(Object.values(studentInfo));

// const obj1={
//     a:'1',
//     b:'2'
// }

// const obj2={
//     c:'3',
//     d:'4'
// }

// const obj3={
//     e:'5',
//     f:'6'
// }
// const combinedObj=Object.assign(obj1,obj2,obj3);
// console.log(combinedObj);

// const formData = {
//     name : "ram",
//     email : "ram@gmail.com",
//     age : 25
// };
// const googleData = {
//     email : "saidepp@gmail.com",
//     profilePic : "https://example.com/profile.jpg",
//     googleId : "123456789"
// };

// const googleData1 = {
//     name : "ganesh",
//     age : 30
// }

// const completeProfile = {...formData,...googleData,...googleData1};
// console.log(completeProfile);

// const {name,age,email}=formData;
// console.log(age);

//const varname=arrayname.reduce(function(accumulator,currentvalue){
    //logic
//},default+value);

// const fruits=['apple"','bannana','apple','orange','bannana'];
// const count=fruits.reduce((acc,fruits)=>{
//     acc[fruits]=(acc[fruits]||0)+1;
//     return acc;
// },{});
// console.log(count);

const arr=[10,20,30,40,50];
const add=arr.reduce((acc,num)=>(acc+num),0);
console.log(add);
