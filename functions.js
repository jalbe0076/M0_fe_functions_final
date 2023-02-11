// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting(name) {
    return `Welcome to Canada ${name}!`
}
var tourist1 = greeting("Ruth");
var tourist2 = greeting("Naze");

console.log(tourist1);
console.log(tourist2);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(yourName) {
    return `Hello, my name is ${yourName}.`;
}
var person1 = customGreeting("Jason");
var person2 = customGreeting("Miru");

console.log(person1);
console.log(person2);


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName) {
    return `Please enter your full name in the log book: ${firstName} ${middleName} ${lastName}`;
}

var person3 = greetPerson("Trevor", "Joseph", "Tavares");
var person4 = greetPerson("Victoria", "Anne", "Tavares");

console.log(person3);
console.log(person4);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num) {
    return Math.sqrt(num);
}
var num1 = 4;
var num2 = 25;
var root1 = square(num1);
var root2 = square(num2);

console.log(`The square root of ${num1} is ${root1}`);
console.log(`The square root of ${num2} is ${root2}`);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(stockQuantity, merchandise) {
    if(stockQuantity >= 4) {
        return `${merchandise} is stocked`;
    } else if(stockQuantity >= 1 && stockQuantity <= 3) {
        return `${merchandise} - runnign LOW`;
    } else {
        return `${merchandise} - OUT of stock!`;
    }
}

var coffee = checkStock(4, "Coffee");
// => "Coffee is stocked"

var tortillas = checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

var cheese = checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

var salsa = checkStock(1, "Salsa");
// => "Salsa - running LOW"

console.log(coffee);
console.log(tortillas);
console.log(cheese);
console.log(salsa);