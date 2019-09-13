let mickey;
let scalar = 1;

function preload() {
  mickey = loadImage("assets/mickey.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      scalar *= 1.02;
    }
    else if (keyCode === DOWN_ARROW) {
      scalar /= 1.02;
    }
  }

  imageMode(CENTER);
  image(mickey, mouseX, mouseY, mickey.width * scalar, mickey.height * scalar)
}