function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("maroon");
// Circle
fill("blue")
  strokeWeight(5);
  circle(250, 250, 100);

// Rectangle
fill("Green"); 
  strokeWeight(10);
  rect(300, 10, 100, 200);

//Triangle
fill("pink")
  strokeWeight(3);
  triangle(50, 0, 0, 50, 50, 50);
}
