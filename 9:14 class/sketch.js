// First sketch (9/14)

/* 
multi line comments
Everything in between in commented out
test
*/ 

function setup() {
  createCanvas(900, 900);
}

function draw() {
  // background - setting our background color
  background(200);

  // strokeWeight- thickness of line
  strokeWeight(10);

  // line- to sets of coordinates
  line(50, 50, 100, 200)

  line(300, 10, 40, 100);

  line(600, 600, 810, 700); 
  
  // red rectangle
  fill("red");
  rect(300, 150, 50, 200); 


// indigo circle
strokeWeight(5);
fill("indigo"); 
circle(700, 400, 200);

//navy blue quad 
strokeWeight(15);
fill("navy blue"); 
quad(700, 300, 700, 500, 900, 50, 900, 600);
}
