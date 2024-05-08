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
