let rocks = [];
let n = 10;

function setup() {
  let canvas = createCanvas(800, 500);
canvas.parent("p5")
  colorMode(HSB, 100);
}

function draw() {
  background(0);
  drawStars()

  textSize(20)
  fill(255)
  text("press to see souls", 20, 30)

  for (let i = 0; i < rocks.length; i++) {
    rocks[i].show();
    rocks[i].move();
    rocks[i].moveBack();
    for (let j = 0; j < rocks.length; j++) {
      if (i != j) {
        rocks[i].checkCollision(rocks[j]);
      }
    }
  }
}

function mousePressed() {
  rocks.push(new Rock(random(width), random(height), random(50, 100)));
}

class Rock {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.speedX = random(1, 3);
    this.h = random(100);
  }

  show() {
    push();
    translate(this.x, this.y);
    fill(this.h, 20, 100);
    rectMode(CENTER);
    ellipse(0, 0, this.s, this.s * 0.5);
    pop();
  }

  move() {
    this.x += this.speedX;
  }

  moveBack() {
    if (this.x > width + this.s) {
      this.x = random(-2 * this.s, -5 * this.s);
    }
  }

  checkCollision(other) {
    let d = dist(other.x, other.y, this.x, this.y);
    if (d < 1.5 * (this.s + other.s) / 2) {
      this.speedX = -this.speedX;
      other.speedX = -other.speedX;
    }
  }
}

function drawStars() {
  fill(random(255), random(255), random(255));
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 6, 6);
  }
}
