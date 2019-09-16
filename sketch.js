// Project Title
// Agnes Niyondezi
// September 16
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redAmount = 0;
let redChangeAmount = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);
}

function draw() {
  fill(redAmount,100,225);
  noStroke();
  ellipse(mouseX, mouseY,100,100);

  redAmount += redChangeAmount;

  if(redAmount >= 225){
    redChangeAmount *= -1;
  }
  if (redAmount <= 0) {
    redChangeAmount *= -1;
  }

  console.log(redAmount);
}
