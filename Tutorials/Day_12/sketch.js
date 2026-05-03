let x = 0;
let y = 150;
let vx = 3 //velocity along x direction
let vy = 2; //velocity along y direction

function setup() {
  createCanvas(400, 300);
  }




function draw() {
  background(220);

  // update position using velocity
  x += vx; 
  y += vy;
  
  if (x > width) x = -30;
  if (y > height) y = 0;

  circle(x, y, 30);
  
}
