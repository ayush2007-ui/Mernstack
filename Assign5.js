// console.log("\n***ARRAY ***");

// let numbers = [2,4,6,8,10];
// console.log("Start:", numbers);

// numbers.push(12);
// console.log("Pushed 12:", numbers);

// numbers.pop();
// console.log("After pop:", numbers);

// let filtered = numbers.filter(item => item > 5);
// console.log("Filtered (>5):", filtered);

// let copiedArray = [...numbers];
// console.log("Copied with spread:", copiedArray);

// console.log("Each element:");
// numbers.forEach(val => console.log(`→ ${val}`));

// console.log("\n--- STRING SECTION START ---");

// let message = "Learn javascript basics";

// let upper = message.toUpperCase();
// console.log("Upper:", upper);

// let found = message.includes("script");
// console.log("Includes 'script'? →", found);

// let words = message.split(" ");
// console.log("Words in message:");
// for (let w of words) {
//   console.log(`- ${w}`);
// }

// let chars = [...message];
// console.log("Characters in message:", chars);

console.log("\n--- OBJECT SECTION START ---");

let user = {
  name: "Ayush",
  age: 17,
  email: "ayush@gmail.com"
};

console.log("User Info:");
console.log("Name:", user.name);
console.log("Age:", user.age);
console.log("Email:", user.email);

user.city = "Mumbai";

function showUser(info) {
  console.log(`\nUSER DETAILS:
  Name: ${info.name}
  Age: ${info.age}
  Email: ${info.email}
  City: ${info.city}`);
}

showUser(user);

let updatedUser = { ...user, age: 18};
console.log("\nUpdated User:");
showUser(updatedUser);
