let x;
let y;
let dx = 5;
let radius = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
}

function draw() {
  background(255);

  // move horizontally
  x += dx;

  if (x > width - radius/2 || x < 0 + radius/2) {
    dx *= -1;

  }

  fill(0);
  circle(x, y, radius);
}

function windowResize(){
  setup();
}
