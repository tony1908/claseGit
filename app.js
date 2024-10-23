// Comment added.
console.log("Hola Mundo");

// If statement example
let number = 15;

if (number > 10) {
    console.log("The number is greater than 10.");
} else {
    console.log("The number is 10 or less.");
}

// For loop example
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While loop example
console.log("Counting down from 5 to 1:");
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}

// Nested if statement example
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
    if (age >= 21) {
        console.log("You can legally drink alcohol in the US.");
    } else {
        console.log("You cannot legally drink alcohol in the US.");
    }
} else {
    console.log("You are a minor.");
}
