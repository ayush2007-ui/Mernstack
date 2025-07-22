// var num=10;
// num=30;
// console.log("before block scope",num);
// {
//     var num=20;
//     console.log("inside block scope",num);
// }
// console.log("after block scope",num);

let number=10;
console.log("before block scope",number);
{
     let number=20;
     console.log("inside block scope",number);
}
console.log("after block scope",number);

const n=10;
console.log("before block scope",n);
{
     const n=20;
     console.log("inside block scope",n);
}
console.log("after block scope",n);