console.log("🔌");

// document.body.innerHTML = "<h1>Hello World</h1>"; // changes the h1 tag in our html with java, "" needed around the change
// document.body.style.background = "pink" // changes the background colour to pink (using the style property we can access and change any valid css)

// function changeColour() {
//   if (document.body.style.background === "pink") {
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "pink";
//   }
// }

// colour array

let currentColour = 0;

function changeColour() {
  const colourArray = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  if (currentColour === 6) {
    currentColour = 0;
  } else {
    currentColour++;
  }

  document.body.style.background = colourArray[currentColour];
}

//Accessing other HTML elements

// --- 1 = modern selector methods (flexible, though technically less efficient)
//document.querySelector(); //returns the first element that matches the specified css selector
//document.querySelectorAll(); // returns ALL elements that match the specified css selector

// --- 2 = classic selector methods (non-flexible, though technically more efficient)
//document.getElementById(); //returns the first element that matches the specified id
//document.getElementsByClassName(); //returns all elements that match the specified class
//document.getElementsByTagName(); //returns all elements that match the specified HTML tag name

//Useful prperties

// text.content; //changes the text inside of an element
// innerHTML; //changes HTML inside of an element
// style; //changes the style of the element

const headerEl = document.getElementById("headerId");
headerEl.style.fontSize = "50px";

//Exercise 1
const counterNum = document.getElementById("counter");

let counter = 0;
function counterAddOne() {
  counter++;
  counterNum.textContent = counter;
}


