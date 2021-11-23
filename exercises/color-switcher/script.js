console.log('connected');

// get the body element
let body = document.querySelector("body");

// select each circle
let yellowCircle = document.getElementById("yellowButton");
let blueCircle = document.getElementById("blueButton");

// add the event and the function that determines behavior
yellowCircle.addEventListener("click", turnPageYellow)
blueCircle.addEventListener("click", turnPageBlue)

// define the behavior
function turnPageYellow() {
  console.log('turn me yellow');
  body.style.backgroundColor = "yellow";
}

function turnPageBlue() {
  console.log('turn me blue');
  body.style.backgroundColor = "blue";
}