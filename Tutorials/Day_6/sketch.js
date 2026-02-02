let img;

function preload() {
  img = loadImage("Head_hue.png");
}

function setup() {
  createCanvas(400, 300);
}

function draw() {
  image(img, 0, 0);
}
