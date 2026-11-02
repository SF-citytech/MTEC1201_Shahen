// SHAHEN F, PAC MAN IS HUNGRY, PAC MAN EATING//

  
let x = 0;
let y = 300;
let x1 = 50;
let y1 = 100;
let x2 = 100; 
let y2 = 500;
let x3 = 0;
let y3 = 0;

let speed = 3;
let speed1 = 5; 
let speed2 = 2;
let speedimg = 5; 
let r;
let g; 
let b;

let img; 
let ms; 

let randomx = 0;
let randomy = 0; 

let lastTime = 0; 
let interval = 1000; 
function preload() {
  img = loadImage('pacman.jpg'); 
  // myFont = loadFont(myfont.otf); replace filename 
}

function setup() {
  createCanvas(600, 600);
  r = 10;
  g = 50;
  b = 150;
}

function draw() {
  background("black");
  fill (100, 50, 100);
  ellipse (x, y, 100);
  fill (50, 100, 200);
  ellipse (x1, y1, 50); 
  fill (157, 23, 188);
  ellipse (x2, y2, 200);

  // if x is hitting either edge, swap its direction
  // || = OR operator; && AND operator
  
  // BLUE BALL
  if (x > 600 || x < 0) {
    speed = - 1 * random(0.5, 5.5);
    
    if (speed > 10 || x < 0) 
      speed = 1;

  }
// PACMAN
if (x3 > 500 || x3 < 0) {
    speedimg = - 1 * random(1, 5);
    
    if (speedimg > 10 || x3 < 0) 
      speedimg = 5;

  }

 ms = int(millis()); // number of milliseconds since starting sketch
  image(img, x3, y3, 100, 100);
  // text with extra commands for changing attributes
  textSize(50);
  textFont("Comic Sans"); 
  fill("white"); 
  print(ms % 1000); 
  if (ms - lastTime >= interval) {
    randomx = random(0, 500);
    randomy = random(0, 500); 
    lastTime = ms; 
    //print("second");
  }

  text("wakka", randomx, randomy);

    // for debugging (right click sketch, click "Inspect", and click "Console Tab")
    // print("X: " + x);
    // print("speed: " + speed);
    //print(randomx); 
   // print(randomy); 
  
  if (x1 > 400 || x1 < 0) {
    speed1 = - 1 * random(1, 3);

    if (speed1 > 15 || x1 < 0) {
      speed1 = 1;
    }
  }

  if (x2 > 600 || x2 < 0) {
    speed2 = - 1 * random(1, 10);

    if (speed2 > 15 || x2 < 0) {
      speed2 = 1;
    }
  }


  /* mouseIsPressed variable allows the behavior to continously run while mouse is held down
  if (mouseIsPressed) { 
    r = random(255);
    g = random(255);
    b = random(255);
  }*/
  
  x = x + speed;
  x1 = x1 + speed1;
  x2 = x2 + speed2;

  // runs bewfore set up, to load our images and assets


  x3 = x3 + speedimg;
  y3 = y3 + speedimg;
}


// note: different from mouseIsPressed (boolean variable)
function mousePressed() {
  x = 0; 
  x1 = 0; 
}


// note: different from keyIsPressed (boolean variable)
function keyPressed() {
  if (key === 'r') {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

