function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  strokeWeight(1);
  triangle(300, 50, 150, 150, 450, 150);
  quad(150, 150, 450, 150, 450, 300, 150, 300);
}
