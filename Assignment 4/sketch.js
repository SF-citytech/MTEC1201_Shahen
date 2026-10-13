let x = 0; // x-position of circle
let y = 50;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0, 0, 700);
  fill(255, 204, 0);
  strokeWeight(5);
  circle(x, y, 200);
  x = x + 1;
  fill(0, 200, 0);
  circle(mouseX, mouseY, 50);
  fill(200, 0, 0); 
  rect(200, 400, 200, 100);
  fill(300, 200, 100);
  triangle(200, 400, 300, 300, 400, 400);
}















function mousePressed() {
  x = 0;
  y = 50;
 // x = x +/- 25 moves the circle 25 pixels left/right when clicked while moving 
}

function keyPressed() {
  x = 0;
  y = 50; 
}