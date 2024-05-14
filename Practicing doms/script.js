console.log("🔌");

// document.body.innerHTML = "<h1>Hello</h1>";
// document.body.style.background = "blue";

// function changeColour() {
//   if (document.body.style.background === "white") {
//     document.body.style.background = "lightblue";
//   } else {
//     document.body.style.background = colour = "white";
//   }
// }

// let currentColour = 0;

// function changeBackColour() {
//   const colourArray = ["red", "yellow", "blue", "white", "pink", "purple"];
//   if (currentColour === 5) {
//     currentColour = 0;
//   } else {
//     currentColour++;
//   }

//   document.body.style.background = colourArray[currentColour];
// }

// const headerElement = document.getElementById("header-id");

// document.querySelector("#header-id"); // using query selector for the ID
// document.querySelector(".header.class"); // using query selector

// headerElement.style.fontSize = "60px";
// headerElement.textContent = "New Header";
///////////////////////////////////////////////////////////
////////////////////// EXERCISE 1 /////////////////////////
///////////////////////////////////////////////////////////
let counter = 0;

const counterEl = document.querySelector("#counter-id");

function addOne() {
  counter++;
  counterEl.textContent = counter;
}

