let img;
let s = 20;
function preload() {
  img = loadImage("ricky.png");
}
function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent('p5')
}
function draw() {
  background(0);
  img.loadPixels(); 
  
  for (let x = 0; x < width; x += s) {
    for (let y = 0; y < height; y += s) {
      let c = img.get(x,y);
      fill(c);
      noStroke();
      rect(x, y, s, s);

    }
  }
}
