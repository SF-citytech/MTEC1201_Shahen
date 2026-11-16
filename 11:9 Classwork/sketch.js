// Shahen, hyperspace circle chase, have fun
let size = 50;
let x, y;
let lastChange = 0;
let interval = 500;



function setup() {
  createCanvas(500, 500);

  x = random(20, width, - 20);
  y = random(20, height, - 20);
}

function draw() {
  background("blue");  

 let circ = 50; 

 while(circ < width) {
    fill(100, 150, 225);
    circle(circ, height /2, 40);
    circ += 60;
  }

if (millis() - lastChange >= interval) {
  x = random(20, width, - 20);
  y = random(20, height, - 20);
  lastChange = millis();
}
fill (250, 2, 233);
circle(x, y, 40);

  fill("white");
for (let i = 0; i < width; i = i + 50)
  {
    line(i, 0, i, height);
  }

for (let i = 0; i < height; i = i + 50)
  {
    line(0, i, width, i);
  }

  noFill();

  // for loop drawing squares
  for (let x = 0; x < width; x = x + size)
  {
    for (let y = 0; y < height; y = y + size)
    {
      //rect(x, y, 20, 50)
      line(mouseX, mouseY, x, y);
      fill("red");
       circle(mouseX, mouseY, height/10, height/10)
    }
  }
}
