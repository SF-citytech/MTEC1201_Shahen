let ballX = 0; 
let ballY = 300;
let speedX = 2; 
let speedY = 3; 




function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  ballX += speedX; 
  ballY += speedY;  

bouncingball(10, 10, 30, 50, 100, 2, 3);
bouncingball(0, 40, 100, 10, 75, 2, 3);
bouncingball(60, 160, 0, 160, 0, 2, 3);
}


function move(speedX, speedY, ballX, ballY) {
  ballX += speedX; 
  ballY += speedY;
}

function bounce(ballX, ballY) {
if (ballX > height || ballX < 0) {
    speedX = speedX * -1;
  }

  if (ballY > height || ballY < 0) {
    speedY = speedY * -1;
  }
}

function display(r, g, b, ballX, ballY){
  strokeWeight(5);
  fill(200, 10, 130); 
  ellipse(ballX, ballY, 50, 50); 
}

function bouncingball(ballX, ballY, r, g, b, speedX, speedY){
  move(speedX, speedY, ballX, ballY);
bounce(ballX, ballY); 
display(r, g, b, ballX, ballY);
}