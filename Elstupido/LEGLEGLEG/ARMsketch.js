let bodyImg;
let tattoos = [];
let currentColor = 'black'; // Default color

function preload() {
  bodyImg = loadImage('assets/bodytattoo.png'); // Load your body image
}

function setup() {
  let cnv = createCanvas(1280, 549);
  cnv.parent("canvasContainer")
}

function draw() {
  background(255);
  image(bodyImg, 0, 0);

  // Draw tattoos
  noFill();
  stroke(currentColor);
  strokeWeight(5);
  for (let i = 0; i < tattoos.length; i++) {
    beginShape();
    for (let j = 0; j < tattoos[i].length; j++) {
      vertex(tattoos[i][j].x, tattoos[i][j].y);
    }
    endShape();
  }
}

function mousePressed() {
  tattoos.push([]); // Start a new tattoo
}

function mouseDragged() {
  tattoos[tattoos.length - 1].push(createVector(mouseX, mouseY)); // Add points to the current tattoo
}

function keyTyped() {
  if (key === 'r') {
    currentColor = 'red';
  } else if (key === 'g') {
    currentColor = 'green';
  } else if (key === 'b') {
    currentColor = 'blue';
  } else if (key === 'y') {
    currentColor = 'yellow';
  } else if (key === 'p') {
    currentColor = 'purple';
  }
}

function saveImage() {
  saveCanvas('mySketch', 'png');
}


function keyPressed() {
  if (key === ' ') {
    tattoos = []; // Reset tattoos array
  }
}