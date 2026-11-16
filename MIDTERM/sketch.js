//  SHAHEN, A HEROS JOURNEY, BEWARE WHEN TO CLICK MOUSE AND CLICK SPACEBAR



// ship 
let shipX = 0; 
let shipY = 300; 
let speedX = 2; 
let speedY = 3; 


let img; 
let img2; 
let img3;
let img4;
let img5; 
let img6; 
let speedimg = 5; 
let piglinx = 100
let pigliny = 250

let speedimg2 = 5; 
let winx = 100
let winy = 25
// message
let myFont; 
let x;
let y;

let fontX; 
let fontY;
let ms; 
let seconds; 
let iso; 



let font1; 
let font2; 

let state = 1; 


function preload(){
  img = loadImage("Spaceship.png"); 
  iso = loadFont("Isometra-Regular.ttf");
  img2 = loadImage("tree.png");
  img3 = loadImage("piglin.png");
  img4 = loadImage("netherportal.png"); 
  img5 = loadImage("gold.png"); 
  img6 = loadImage("win.png"); 
}



function setup() {
  createCanvas(500, 500);
  // message
  x = 0;
  y = 0;
  fontX = 25; 
  fontY = 250;
}

function draw() {
 if (state === 1) {
  runScene1(); 
 }
 if (state === 2){
  runScene2()
 }
 if (state === 3) {
  runScene3()
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
  text("Click planet if you dare to enter...", fontX, fontY);
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

function keyPressed(){
if (state === 1){
  state = 2; 
  print("NEW SCENE");
}
}


function runScene2(){
  background("maroon");
image(img2, 25, 100, 200, 400)
image(img3, piglinx, pigliny, 100, 100)
image(img4, 250, 100, 200, 300)

  // piglin
if (piglinx > 500 || piglinx < 0) {
    speedimg = - 1 * random(1, 5);
    
    if (speedimg > 10 || piglinx < 0) 
      speedimg = 5;
  }

  piglinx = piglinx + speedimg 

  // message
 textSize(15);
 textFont("Times New Roman");
 fill(247, 255, 0);
text("DANGER! CLICK TREE TO ESCAPE!! OR PIGLIN WILL CHASE YOU!!!", 10, 75);
 }

function mousePressed(){
    state = state + 1;
}

function runScene3(){
  background("green");

  fill(0, 239, 255); 
  rect(0, 0, 500, 250);
  fill("yellow"); 
  ellipse(0, 0, 220, 220);

  textSize(25);
  textFont("Times New Roman");
  fill("black");
  text("Press 'r' to complete", 150, 450);

image(img5, 100, 200, 300, 200)
image(img6, winx, winy, 200, 200)

if (winx > 450 || winx < 0) {
    speedimg2 = - 1 * speedimg2;
    
    if (speedimg2 > 10 || winx < 0) 
      speedimg2 = 5;
  }

  winx = winx + speedimg2 

}

function keyPressed () { 
if (key === 'r')
  state = 1
}