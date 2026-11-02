// ship 
let shipX = 0; 
let shipY = 300; 
let speedX = 2; 
let speedY = 3; 
let img; 

// message
let myFont; 
let x;
let y;

let fontX; 
let fontY;
let ms; 
let seconds; 
let iso; 

let state = 1; 

function preload(){
  img = loadImage("spaceship.png"); 
  iso = loadFont("Isometra-Regular.ttf");
}



function setup() {
  createCanvas(500, 500);
  // message
  x = 0;
  y = 0;
  fontX = 50; 
  fontY = 250;
}

function draw() {
 if (state === 1) {
  runScene1(); 
 }
 if (state === 2){
  runScene2()
 }
}

function move() {
  shipX += speedX; 
  shipY += speedY; 
}

function bounce() {
  if (shipX > width || shipX < 0) {
    speedX = speedX * -1; 
  }
  if (shipY > height || shipY < 0) {
    speedY = speedY * -1; 
  }
}

function display() {
    fill(100, 150, 130);
     // spaceship 
  image(img, shipX, shipY, 75, 75);
}

function runScene1() {
   // background slide 1
background(24, 13, 59);

 // message
 ms = millis(); // the amount of ms since our sketch has started 
 textSize(20);
 textFont(iso);
 fill(235, 195, 52);

 if (ms/ 1000 > 3) {
  text("Click if you dare to enter...", fontX, fontY);
 }

// planet 
fill("maroon");
ellipse(150, 150, 100, 100); 
// planet rings
fill(107, 29, 29);
ellipse(150, 150, 200, 25);

// stars slide 1
fill("white");
ellipse(100, 300, 5, 5);
ellipse(100, 30, 5, 5);
ellipse(400, 200, 5, 5);
ellipse(450, 100, 5, 5);
ellipse(250, 450, 5, 5);
ellipse(50, 100, 5, 5);
ellipse(450, 450, 5, 5);
ellipse(300, 300, 5, 5);
ellipse(250, 225, 5, 5);
ellipse(300, 50, 5, 5);
ellipse(50, 450, 5, 5);

//FUNCTIONS SPACESHIP
move(); 
bounce();
display(); 
}

function mousePressed(){
if (state === 1){
  state = 2; 
  print("NEW SCENE");
}
}

function runScene2(){
  background("green");
}