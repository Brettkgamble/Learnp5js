let x = 0;

function setup() {
  createCanvas(400, 400);
  }




function draw() {
  background(220);
  circle(x, 200, 50);
  x += 1;  
  if (x > width) {
    x = 0;
  }
   if (x < 0) {
    x = width;
  } 
  
}
