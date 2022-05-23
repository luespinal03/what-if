const prompt = require('prompt-sync')({sigint: true});

// let input = prompt("Enter your age: "); 

// console.log(input); 

let age = Number(prompt("Enter your age: ")); // Number here allows for a range

if (age <= 15) {
    console.log("You can't drive"); 
}
else if (age <= 17) {
    console.log("You can drive but not vote");
}
else if (age <= 24) {
    console.log("You can vote but not rent a car"); 
}
else if (age >= 25) {
    console.log("You can do pretty much anything")
}

