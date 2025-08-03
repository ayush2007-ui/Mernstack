// a=33
// b=20
// if (b>a)
// {   console.log("b is greater");
// }
// else if (a==b) 
// {
//     console.log("a is equal to b")
// }
// else{
//     console.log("a is greater")
// }

// function func(name){
//     return console.log(`Hello how are you ${name}`);
// }

// func("Ayush")
// func("Sahil")
// func("Parth")
// func("Siddhesh")

// function addNum(num1,num2)
// {
//     let n1 = Number(num1);
//     let n2 = Number(num2);
//     if(isNaN(n1)||isNaN(n2)){
//         return("Enter proper number");
//     } 
//     return n1 + n2;
// }

// console.log(addNum(10,"20abc"));
// let user_name="Ayush";
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

const ar=[10,20,30,40,50];
console.log("Original array",ar);

const newar=ar.splice(1,3,60);
console.log("New array",newar);

console.log("After Slice",ar);



