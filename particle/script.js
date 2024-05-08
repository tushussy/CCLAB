// CCLab Mini Project - 9.R Lantern Particle System

// let NUM_OF_LANTERNS = 5;

let lanterns = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container")
}

function draw() {
  background(0, 50);
  drawStars();
  for (let i = 0; i < lanterns.length; i++) {
    let lantern = lanterns[i];
    lantern.update();
    lantern.display();
  }
}

function mousePressed() {
  lanterns.push(new Lantern(mouseX, mouseY));
}

class Lantern {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(50, 90);
    this.speed = random(1, 2);
  }
  update() {
    this.y -= this.speed;
    // Reset
    if (this.y < -this.size) {
      this.y = height + this.size;
      this.x = random(width);
    }
  }
  display() {
    // Lantern body
    fill(255, 255, 200);
    noStroke();
    ellipse(this.x, this.y, this.size);

    // Lantern flame
    push();
    fill("yellow"); 
    stroke("black");
    strokeWeight(5);
    ellipse(this.x, this.y + this.size / 3, this.size / 6, this.size / 3);
    pop();

    // Lantern glow
    noFill();
    stroke(255, 150, 0, 50); 
    strokeWeight(10);
    ellipse(this.x, this.y + this.size / 3, this.size / 3, this.size / 2);
  }
}

function drawStars() {
  fill('white');
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 4, 4);
  }
}
