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

let currentColour = 0;

function changeBackColour() {
  const colourArray = ["red", "yellow", "blue", "white", "pink", "purple"];
  if (currentColour === 5) {
    currentColour = 0;
  } else {
    currentColour++;
  }

  document.body.style.background = colourArray[currentColour];
}

const headerElement = document.getElementById("header-id");

headerElement.style.fontSize = "60px";
headerElement.textContent = "New Header";
