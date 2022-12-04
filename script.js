
"use strict";

var mX, mY, t, w, n;


function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  colorMode(HSB, width, height, 100, 100);
  mX = windowWidth / 2;
  mY = windowHeight / 2;
  t = 1;
  w = 0.0005;
}

function draw() {
  background(0);

  scale(0.5)
  translate(-windowWidth/2,-windowHeight/2)

  noStroke();
  for (var i = 0; i < width; i += 5) {
    for (var j = 0; j < height; j += 5) {
      n = noise(i * w, j * w, t) * 2;
        fill (mX*n, mY*n, 200, 100);
      rect(i+n+map(mX,0,width,-40,40), j+n+map(mY,0,height,-40,40), 15,15);
    }
  }
  t += 0.02;

}


function mousePressed() {
  mX = map(mouseX, 0, width, width*0.5, width);
  mY = map(mouseY, 0, height, width*0.5, height);
}

function mouseMoved() {
  mX = map(mouseX, 0, width, width*0.5, width);
  mY = map(mouseY, 0, height, width*0.5, height);
}

function touchStarted() {
  mX = map(mouseX, 0, width, width*0.5, width);
  mY = map(mouseY, 0, height, width*0.5, height);
}

function touchMoved() {
  mX = map(mouseX, 0, width, width*0.5, width);
  mY = map(mouseY, 0, height, width*0.5, height);
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
