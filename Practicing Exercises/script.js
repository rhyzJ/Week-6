console.log("Connected!");

//Function returns

var number = 4;
var number2 = 3;

function sum(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

///below is commented out to stop alerts/prompts

// const add = sum(number, number2); //calling the function into use
// // const userInput = parseInt(prompt("Enter a number please :)"));
// const total = multiply(userInput, add);

// alert(`The total of ${add} x ${userInput} is equal to ${total}`);

// FUNCTIONS LECTURE

// -----Exercise 1----- //

function showMyBrekkie(food1, food2) {
  console.log(`My breakfast consisted of ${food1} and ${food2}`);
}

showMyBrekkie("eggs", "toast");

// -----Exercise 2----- //

function ifEmpty(str) {
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(ifEmpty(""));

// -----Exercise 3.1----- //

function halfNumber(num) {
  return num / 2;
}

var halvedNumber = halfNumber(5);

console.log(`Half of 5 = ${halvedNumber}`);

//-----Exercise 3.2----- //

function timeInSeconds(minutes) {
  return minutes * 60;
}

var minutes = parseInt(prompt("Please enter a number of minutes"));

var seconds = timeInSeconds(minutes);

alert(`There are ${seconds} seconds in ${minutes} minutes`);

///woohooooooo completed 🫡



