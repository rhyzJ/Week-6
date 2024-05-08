console.log("Functions!");

//----- BASIC FUNCTION CALLS-----//
// to call a function we simply specify its name and open/close brackets()

function myFirstFunction() {
  console.log("I just called my first function");
}

myFirstFunction();
myFirstFunction();

//-----FUNCTION PARAMETERS-----//
// optional
// go inside the smooth brackets

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(3, 4);

// EXERCISE 1 //

function showMyBrekkie(brekkie1, brekkie2, brekkie3) {
  console.log(
    `I had ${brekkie1}, ${brekkie2} and ${brekkie3} for breakfast today!`
  );
}

showMyBrekkie("weetbix", "milk", "honey");

//-----RETURN STATEMENTS-----//

function sum2(num1, num2) {
  return num1 + num2; //no visual output as we never logged anything to consolelog
}

const result = sum2(10, 5); //storing value inside the result variable when we call the function because of the return//
console.log(result);

//can use variable in other code when stored

if (result === 15) {
  console.log("This is 15!");
} else {
  console.log("This does equal to 15 :(");
}

// function expression

const sum3 = function (num3, num4) {
  return num3 + num4;
};

console.log(sum3);

// EXERCISE 2//

function input(str) {
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(input(""));

//functions in objects can be a value in an object, they are then called a method

const person = {
  firstName: "Rob",
  lastName: "Petrie",
  greeting: function (name) {
    console.log(`Hi ${name}, weather is WET`);
  },
};

person.greeting("Rob");

// you can access an object method with the following syntax:
//      objectName.methodName(argument);
//      person.greeting("Rob")

//EXERCISE 3//

//3.1//

function halfNumber(int) {
  return int / 2;
}

let halvedNumber = halfNumber(5);
console.log(`Half of 5 is ${halvedNumber}.`);

//3.2//

function timeInSeconds(minutes) {
  return minutes * 60;
}

const userInput = prompt("Please enter your minutes");
const minutes = parseInt(userInput);
const seconds = timeInSeconds(userInput);

alert(`${userInput} minutes is equal to ${seconds} seconds.`);
