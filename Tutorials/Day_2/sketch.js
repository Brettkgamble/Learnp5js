function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  strokeWeight(1);
  rectMode(CENTER)
  rect( 50, 50, 200, 100 );
  rect( 300, 50, 200, 100 );
  rect( 175, 200, 250, 150 );
  rect( 100, 275, 150, 75 );
  noFill() ;
  ellipse( 150, 100, 50, 50 );
  ellipse( 150, 100, 75, 75 );
  ellipse( 150, 100, 100, 100 );  
  ellipse( 150, 100, 125, 125 );
  ellipse( 150, 100, 150, 150 );
}
