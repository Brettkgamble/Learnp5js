/* 
A LeWitt-style sketch should make you able to say:
“This drawing exists because of a rule.”

Not:
 “I added shapes until it looked interesting.”
*/

function setup() {
  createCanvas(600, 400);
  background(245);
  stroke(20);
  noFill();

  let cols = 6;
  let rows = 6;
  let cellW = width / cols;
  let cellH = height / rows

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let x = col * cellW;
      let y = row * cellH;

      // draw the cell boundary
      rect(x, y, cellW, cellH);

      // choose a line based on 4 rules
      let rule = (row + col) % 4;
      if (rule === 0) {
        // diagonal line from top left to bottom right
        line(x, y, x + cellW, y + cellH);
      } else if (rule === 1) {
        // diagonal line from top right to bottom left
        line(x + cellW, y, x, y + cellH);
      } else if (rule === 2) {
        // horizontal line through the middle of the cell 
        line(x, y + cellH / 2, x + cellW, y + cellH / 2);
      } else if (rule === 3) {  
        // vertical line through the middle of the cell
        line(x + cellW / 2, y, x + cellW / 2, y + cellH);
      }

      // ellipse in every 3rd cell
      if ((row * cols + col) % 3 === 0) {
          let x = col * cellW + cellW / 2;
          let y = row * cellH + cellH / 2;
          ellipse(x, y, cellW * 0.2, cellH * 0.2);
      }
    }
  }
}


// 1. Create Grid
// use rows and columns to create a grid of lines
// 2.  Randomly draw lines in the grid 

function draw() {
  strokeWeight(1);
}
