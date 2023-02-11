// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:Old code 

// function askForName() { console.log("Hello, what is your name?") }

// askForName()

//Modified code
//added a parameter in the function to provide an answer to the question, modified format for readability
function askForName(yourName) { 
  //the function will return the parameter yourName at the end of the question instead of loging the question to the value. This will allow you to call upon it as needed
  return `Hello, what is your name? ${yourName}`; 
}
//This will console log the function defined as askForName with the argument Jason
console.log(askForName("Jason"));


// EX 2: Unmodified code
// function addThreeNums(first, second, third) {
//   var sum = first + second + third
//   return sum;
//         }
  
//   addThreeNums(1, 2, 3);
//   addThreeNums(4, 2, 7);

//modified code format for readability
function addThreeNums(first, second, third) {
  //removed the varible and returned the calculation directly to remove code lines
  return first + second + third;
      }
//Stored the return values in varibles called sum1 and sum2 which call upon the addThreeNums function
var sum1 = addThreeNums(1, 2, 3);
var sum2 = addThreeNums(4, 2, 7);

//log the values to the console
console.log(sum1);
console.log(sum2);



// EX 3:Unmodified code
// func makeFreshPesto(){
//   console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
//   console.log("Pulse basil and pine nuts");
//   console.log("Add garlic and cheeses");
//   console.log("Slowly pour in oil");
//   console.log("Season");    }

// makeFreshPesto();

//Modified code
//fixed syntax error
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");   
}
//log the recipe to the console
console.log(makeFreshPesto());



  //  EX 4: Unmodified code
//   function average(num1, num2) 
//   {
// var sum = num1 + num2;
//     var avg = sum / 2;

// return avg
//   }

//modified code fromat fro readability

function average(num1, num2) {
  //removed the ave variables and returning the calculation directly to simplify the code
  return (num1 + num2) / 2;
}
//storign the retun values in different variable and logging those value to visually see the output
var ave1 = average(4, 2);
var ave2 = average( 10, 2);

console.log("Average 1: " + ave1);
console.log("Average 2: " + ave2); 