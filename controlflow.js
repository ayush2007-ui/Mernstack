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

function addNum(num1,num2)
{
    let n1 = Number(num1);
    let n2 = Number(num2);
    if(isNaN(n1)||isNaN(n2)){
        return("Enter proper number");
    } 
    return n1 + n2;
}

console.log(addNum(10,"20abc"));