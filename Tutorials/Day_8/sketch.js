let faceX;
let faceY;
let faceWidth = 150;
let eyeXOffset = 28;
let eyeYOffset = 20;
let widthValue;
let heightValue;
backgroundColor = 'gray';

function setup() {
  strokeWeightValue = 10;
  widthValue = 900;
  heightValue = 600;
  textFont('Arial', 48);
  createCanvas(widthValue, heightValue);

}

function draw() {
  faceX = mouseX;
  faceY = mouseY;

  background(backgroundColor);
  strokeWeight(2);
  ellipse(faceX, faceY, faceWidth)
  ellipse(faceX - eyeXOffset, faceY - eyeYOffset, 15)
  ellipse(faceX + eyeXOffset, faceY - eyeYOffset, 15)
}

