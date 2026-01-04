function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  strokeWeight(10);
  point(0,0);
  point(width, height);
  strokeWeight(1);
  line(300, 0, 300, 400);
  line(0, 200, 600, 200);
  text('Quadrant 1', 100, 100);
  text('Quadrant 2', 400, 100);
  text('Quadrant 3', 100, 300);
  text('Quadrant 4', 400, 300);
}