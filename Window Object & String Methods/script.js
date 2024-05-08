// Common String methods

console.log("CAN YOU HEAR ME".toLowerCase()); //will change to lower case
console.log("is this thing on".toUpperCase()); //will change to upper case
console.log("    to trim or not to trim, but leave the middle spaces".trim()); //trims excess spaces on ends

// EXERCISE 1
const userMessage = prompt("Please enter your message");
const message = userMessage.trim();
const length = message.length;

if (length <= 10) {
  alert(message.toUpperCase());
} else {
  alert(message.toLowerCase());
}

// string splits

const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.split(" ")); //splits into array by spaces
console.log(str.split("")); //splits everything into array
