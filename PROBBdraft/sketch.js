var angle = 2.0;
var offset = 300;
var scalar = 3.5;
var speed = 0.1;
var col = {
  r: 255,
  g: 0,
  b: 0
};
var isMuted = false;

function setup() { 
  let canvas = createCanvas(800, 700);
  canvas.parent("p5-canvas-container");
  noStroke();
  background(0);
  
  canvas.mouseClicked(toggleMute);
} 

function draw() { 
  col.r = random(0, 200);
  col.g = random(0, 250);
  col.b = random(100, 250);
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  fill(col.r, col.g, col.b);
  noStroke();
  ellipse(x, y, 5, 5);
  angle += speed;
  scalar += speed;
  
}

function toggleMute() {
  isMuted = !isMuted;
  var audio = document.getElementById("backgroundAudio");
  var muteButton = document.getElementById("muteButton");

  if (isMuted) {
    audio.pause();
    muteButton.innerHTML = "Muted";
  } else {
    audio.play();
    muteButton.innerHTML = "Mute";
  }
}
