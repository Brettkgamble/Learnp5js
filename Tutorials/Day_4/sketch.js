function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  strokeWeight(2);
  fill(255, 0, 0, 128);
  ellipse(300, 80, 16);
  noFill();
  strokeWeight(1);
  rect(296, 88, 8, 10);
  fill('grey');
  quad(290, 99, 310, 99, 315, 110, 285, 110);
  // head
  noFill()
  rect(255, 110, 90, 50);
  fill('grey');
  //  Left Ear
  rect(250, 122, 5, 25);
  // Right Ear
  rect(345, 122, 5, 25);
  // eyes
  fill('yellow');
  ellipse(285, 125, 20);
  ellipse(315, 125, 20);
  noFill();
  rect(275, 142, 50, 12);
  fill('black')
  rect(278, 145, 44, 8);
  // Neck
  fill('blue');
  rect(270, 160, 60, 10, 7);
  rect(270, 168, 60, 10, 7);
  fill('lightgrey');
  beginShape();
  vertex(230, 178);
  vertex(370, 178);
  vertex(370, 280);
  vertex(340, 400);
  endShape();
  beginShape();
  vertex(260, 400);
  vertex(230, 280);
  vertex(230, 178);
  endShape();
  // Grill
  line(245, 300, 268, 396);   
  line(251, 300, 272, 396);
  line(258, 300, 276, 396);
  line(265, 300, 280, 396); 
  line(272, 300, 284, 396);
  line(279, 300, 288, 396);
  line(286, 300, 291, 396);
  line(293, 300, 294, 396);
  line(300, 300, 298, 396);
  line(307, 300, 302, 396);
  line(314, 300, 305, 396);
  line(321, 300, 309, 396);
  line(328, 300, 313, 396);
  line(335, 300, 317, 396);
  line(342, 300, 322, 396);
  line(349, 300, 328, 396);
  line(355, 300, 332, 396);
  // Chest
  fill('grey');
  rect(240, 188, 100, 70);
  fill('blue');
  rect(245, 193, 60, 60);
  fill('yellow');
  rect(310, 193, 25, 60);
  fill('grey');
  ellipse(355, 205, 20);
  ellipse(355, 240, 20);
  fill('red');
  ellipse(355, 205, 10);
  fill('yellow');
  ellipse(355, 240, 10);
  fill('blue');
  ellipse(245, 272, 8);
  ellipse(258, 272, 8);
  ellipse(271, 272, 8);
  ellipse(284, 272, 8);
  // Arms
   fill('blue');
  //  Left Shoulder
  rect(225, 200, 5, 35);
  fill('grey');
  rect(195, 197, 30, 41);
  rect(201, 238, 17, 41);
  fill('red');
  ellipse(209, 295, 35);
  fill('white');
  noStroke();
  ellipse(209, 295, 13);
  beginShape();
  // left hand
  noStroke();
  fill('lightgrey');
  vertex(204, 299);
  vertex(215, 299);
  vertex(219, 315);
  vertex(200, 315);
  endShape();
  stroke(2);
  line(203, 299, 201, 308);
  line(215, 299, 217, 308);
  // Right Shoulder
  fill('blue');
  rect(370, 200, 5, 35);
  fill('grey');
  rect(375, 197, 30, 41);
  rect(381, 238, 17, 41);
  // right hand
  fill('red');
  ellipse(389, 295, 35);
  fill('white')
  ellipse(389, 295, 13);
  noStroke();
  fill('lightgrey');
  beginShape();  
  vertex(384, 299);
  vertex(395, 299);
  vertex(399, 315);
  vertex(380, 315);
  endShape();
  stroke(2);
  line(384, 299, 382, 308);
  line(395, 299, 398, 308);
  
  
  

}
