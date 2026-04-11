let canvasCenterX = 300;
let canvasCenterY = 200;

let eyeRadius = 10;
let bodyWidth = 70;
let bodyHeight = 80;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  strokeWeight(1);
  // From Day 5.  Now using the center of the canvas as a reference point, draw a face.  Use the line() function to draw the mouth and the eyes.  Use the rect() function to draw the face.  Use the strokeWeight() function to make the lines for the mouth and eyes thicker than the lines for the face.
  ellipse(canvasCenterX, canvasCenterY - 80, 50);
  // left eye
  ellipse(canvasCenterX - 10, canvasCenterY - 85, eyeRadius);
  // right eye
  ellipse(canvasCenterX + 10, canvasCenterY - 85, eyeRadius);
  // mouth
  line(canvasCenterX, 115, canvasCenterX, 125);
  // nose
  line(canvasCenterX - 7, 132, canvasCenterX + 7, 132);
  // body
  rect(canvasCenterX - bodyWidth/2, 145, bodyWidth, bodyHeight);
  strokeWeight(10);
  // left leg
  line(280, 230, 280, 290);
  line(320, 230, 320, 290); 
  line(261, 160, 220, 180);
  line(339, 160, 380, 180);
}
