

let img; 
let img2; 
let img3; 

let interval = 1000; 
let lastChange = 0;


let x1 = 200; 
let x2 = 300; 
let x3 = 400; 

let xPositions = [50, 100, 150, 200, 250, 300, 350, 400];
let yPositions = [0, 100, 100, 100, 100, 100, 100, 100];
let colors = ["blue", "purple", "green", "teal", "indigo", "orange", "grey"]
let size = [30, 20, 10];

function preload(){
  img = loadImage("snowflake.png");
  img2 = loadImage("soup.png");
  img3 = loadImage("frosty.png");
}


function display() {
  image(img, 10, 10, 30, 30);
  image(img2, 100, 100, 50, 50);
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  fill(110, 61, 4);
  rect(350, 475, 100, 25);
  fill("yellow");
  circle(360, 460, 50);
  fill("red");
  circle(400, 460, 50);
  fill("orange");
  circle(430, 460, 50);
  fill("white"); 


if (millis() - lastChange >= interval) {
    xPositions.push(25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400);
    yPositions.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    size.push(random(5,10));
lastChange = millis()

  }

for (let i = 0; i < xPositions.length; i++) {
  print(size[i]);
 image(img, xPositions[i], yPositions[i], size[i % size.length], size[i % size.length]);
  image(img2, 325, 333, 150, 150);
   image(img3, 10, 200, 300, 300);

 //fill(colors[i]);
//circle(xPositions[i], yPositions[i], 50);


yPositions[i] += 1;




  //circle(xPositions[0], 400, 50);
//circle(xPositions[1], 400, 50);
//circle(xPositions[2], 400, 50); 


}
}
