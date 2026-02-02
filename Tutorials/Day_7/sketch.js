let backgroundColor;
let strokeWeightValue;
let widthValue;
let heightValue;

function setup() {
  backgroundColor = color('red');
  strokeWeightValue = 10;
  widthValue = 900;
  heightValue = 600;
  textFont('Arial', 48);

  createCanvas(widthValue, heightValue);
  
}

function draw() {
  background(backgroundColor);
  stroke(60);
  strokeWeight(strokeWeightValue);
  point(widthValue -10, heightValue -10);
  point(10, 10);
  strokeWeight(1);
  // Draw center lines
  line(0, heightValue / 2, widthValue, heightValue / 2);
  line(widthValue / 2, 0, widthValue / 2, heightValue);
  // Top left quadrant
  drawCenteredTextInQuadrant(0, 0, widthValue/2, heightValue/2, 'Quadrant 1');
  // Bottom left quadrant
  drawCenteredTextInQuadrant(0, heightValue/2, widthValue/2, heightValue/2, 'Quadrant 3');  
  // Top right quadrant
  drawCenteredTextInQuadrant(widthValue/2, 0, widthValue/2, heightValue/2, 'Quadrant 2');
  // Bottom right quadrant
  drawCenteredTextInQuadrant(widthValue/2, heightValue/2, widthValue/2, heightValue/2, 'test');
}

function drawCenteredTextInQuadrant(x, y, w, h, str){
  // Determine quadrant center
  let centerX = x + w / 2;
  let centerY = y + h / 2;

  // Measure the text
  const paddingX = 16;
  const paddingY = 10;  
  const textW = textWidth(str);
  const textH = textAscent() + textDescent();

  // box size based on text + padding
  let boxW = textW + paddingX * 2;
  let boxH = textH + paddingY * 2;

  // Keep the box inside the quadrant
  boxW = min(boxW, w -20);
  boxH = min(boxH, h -20);

  // Draw the box
  rectMode(CENTER);
  fill(255);
  stroke(60);
  strokeWeight(2);
  rect(centerX, centerY, boxW, boxH, 10);

  // draw the text
  fill(20);
  noStroke();
  textAlign(CENTER, CENTER);
  text(str, centerX, centerY);
} 