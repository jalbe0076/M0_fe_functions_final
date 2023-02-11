// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

//the includes() method is called on the string "Hello World"
//the method is passed the string argument "Hello"; includes() is checking to make sure that the string it searches contains the argument value at one or more positions in the string. returns true if teh argument is located in the string, if not returns false
//The return value is true
"Hello World".includes("Hello");

//the endsWith() method is called on the string "Hello World"
//the method is passed the argument "Hello"; endsWith is checking if the very end of the string it searches contains the argument. If this is true the return value will be true, if not it will be false.
//The return value is false
"Hello World".endsWith("Hello");

//the endsWith() method is called on the string "Hello World"
//the method is passed the argument "Hello"; endsWith is checking if the very end of the string it searches contains the argument. If this is true the return value will be true, if not it will be false.
//The return value is true
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

//the variable plantSpecies assigned the string  "            Monstera Deliciosa"
//the trimStart() method is called the variable 
//the trimStart() method will trim all the white space in the string
//the return value is "Monstera Deliciosa"
var plantSpecies = "            Monstera Deliciosa";
console.log(plantSpecies.trimStart());

//two variables firstName and lastName are assigned the strings "Mona" and "Lisa" respectivelly
//the concat() method is called upon one of the variables and two arguments are added to the method. This method will concatonate the strings together. 
//The first argument is an string with a space so that a space can be added between the concatonated variables
//The second argument is the variable lastName so that the last name could be added after the first name. 
//The return valuse woudl be "Mona Lisa"
var firstName = "Mona";
var lastName = "Lisa";
console.log(firstName.concat(" ", lastName));
//if we wanted the last name before the first name with a comma in between the following changes woudl need to take place
//the return value is Lisa, Mona
console.log(lastName.concat(", ", firstName));





// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

//The variable farmAnimals contains a string array with 5 elements
//a second variable is called soldAnimals and assigning it teh value of farmAnimals with the shift() method is called upon it; soldAnimals will be assigned the string "pig"
//This will remove the first element from the array and morph it to an array with 4 elements. 
//the return value for farmAnimal is "[chicken, cow, sheep, duck]"
//the return value for soldAnimals is "pig"
var farmAnimals = ["pig", "chicken", "cow", "sheep", "duck"];
var soldAnimals = farmAnimals.shift();

console.log(farmAnimals);
console.log(soldAnimals);

//the push() mothod is called on the variable farmAnimal and given the argument soldAnimals. 
//The purpose of this method is to add the value of soldAnimal to the end of farmAnimals increasing the elements in that array from 4 to 5. 
//the return value for farmAnimals is "[chicken, cow, sheep, duck, pig]"
farmAnimals.push(soldAnimals);
console.log(farmAnimals);