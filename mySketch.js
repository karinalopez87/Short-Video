var mySound;

function preload() {
  mySound = loadSound('NeatBeats.mp3');
}

function setup() {
  createCanvas(600, 600);
  fill(255);
  stroke(102);
  rectMode(CENTER);
  mySound.loop();
  colorMode(HSB);
  amplitude = new p5.Amplitude();
}


function draw() {
  background(0);

  var offset = map(mySound.currentTime(), 5, 10, 0, -600);

  if (mySound.currentTime() > 0 && mySound.currentTime() < 30) {
    // forward circles
    for (var y = 30; y <= height - 10; y += 30) {
      for (var x = 0; x <= width * 5; x += 30) {
        var r = 0;
        for (var w = 90; w > 0; w = w - r) {
          var r = random(10, 30);
          noFill();
          stroke(255, 100, 100);
          ellipse((x + 10) + offset, y, 4, 4);
        }
      }
    }
  }
  //BigLines
  if (mySound.currentTime() > 3.2 && mySound.currentTime() < 12.4) {

    var level = amplitude.getLevel();
    var size = map(level, 0, 2, 0, 800);
		noStroke();
    var qw = random(20, 100);
    var ke = random(250, 300);
    fill(ke, 40, 100);
    rect(150, 0, size, 1200);
    if (mySound.currentTime() > 5.5 && mySound.currentTime() < 12.4) {
    rect(300, 0, size-20, 1200);

      if (mySound.currentTime() > 7.8 && mySound.currentTime() < 12.4) {
    rect(450, 0, size+20, 1200);
      }
    }
  }


    //lines
    if (mySound.currentTime() > 12.4 && mySound.currentTime() < 18.5) {
      translate(0, 300);
      for (var v = 60; v < 600; v += 200);
      var h = 0;
      for (var e = 600; e > 0; e = e - h) {
        var h = random(4, 20);
        stroke(0, 55, 250);
        line(width - 300, e - 300, e, e - 300);
      }
      noStroke();
      fill(10, 10, 100);
      rect(300, 600, -300, 600);
    }
    //rect
    if (mySound.currentTime() > 18.5 && mySound.currentTime() < 24.5) {
      noFill();
      stroke(150, 10, 100);
      rectMode(CENTER);
      noFill();
      for (var u = 200; u > 0; u = u - m) {
        var m = random(4, 50);
        var k = random(120, 180);
        stroke(k, 40, 100);
        rect(180, 420, u, u);
        rect(420, 180, u, u);
      }
    }
}