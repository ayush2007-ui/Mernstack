let user_name="Ayush";
// let user_name1=new String("Ayush");
// console.log(typeof user_name);
// console.log(typeof user_name1);
// let user="  aayush  ";
// console.log(user.length)
// console.log(user.toUpperCase());
// console.log(user.toLowerCase());
// console.log(user.charAt(2));
// console.log(user.indexOf('y'));
// let user1="  Ayu sh   ";
// console.log(user.trim().length);
// console.log(user.replace('a','b'));
// console.log(user.includes('aa'));
// let us="Ayush%Santosh%Bhosale";
// console.log(us.split('%'));
// let us1="Ayush$Santosh$Bhosale";
// console.log(us1.substring(-4,5));
// let us2="AYUSH";
// console.log(us2.slice(0,3));

// console.log(user_name.substring(4,2));
// console.log(user_name.slice(4,2));

// let userr="ganesh";
// for(let i=0;i<userr.length;i++)
// {
//     console.log(userr[i]);
// }

// for(const char of userr)
// {
//      console.log(char);
// }

// // Scope = It determines the accesssbility (visibility) of variables.
// // Types of Scopes :- Global Scope, Local Scope
// // Types of Local Scope :- function scope, block scope
// // Variables declared outside of any function or block are in the global scope

// console.log(user_name.concat(userr));
// console.log(...user_name,...userr);
// const arr=[10,20,30,40];
// console.log(Array.isArray(user_name));
// console.log(Array.isArray(arr));
// console.log(Array.from(user_name));

// let num=10;
// let num1=20;
// let num2=30;
// console.log(Array.of(num,num1,num2));
// console.log(arr.slice(0,3));

// //SLICE=Used to extact a portion of array without modifying the original array
 const u=[10,20,30,40,50,60];
// console.log("Before",u);
// const newarr=u.slice(0,3);
// console.log("After",newarr);
// console.log("After",u);

// //SPLICE= It modifies original array
// const u1=[10,20,30,40,50,60];
// console.log("Before",u1);
// const newarr1=u1.splice(0,3);
// console.log("After",newarr1);
// console.log("After",u1);

//for..of Array
// for(const arr of u)
// {
//     console.log(arr);
    
// }

//for..in=It gives key(indexval). It is appicable for object and array. Not applicable for map(Bulid-in object)
// for(i=0;i<u.length;i++)
// {
//     console.log(u[i]+5);
    
// }

// console.log(u.forEach(function add5(val)
// {
//     console.log(val+5);
// }));

// console.log(u.forEach((val)=>{
//     console.log(val+5);
// }));

// console.log("Converting function to arrow function outputs:  ");
// const addNumArrow = (num1, num2) => {
//     console.log("Number 1:",num1);
//     console.log("Addition of that numbers",num1 + num2);
// }
// addNumArrow(10, 20);
// console.log((this));

const person = {
    userName : "Ayush",
    age : 20,
    greet : ()=>{
        console.log(this)
        return (`hello ${this.userName}`)
    }
}
console.log(person.greet());
