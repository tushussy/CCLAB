//3-Minute Creative Coding
//Scrolling Text
//Carrie Wang

let content = 'great great great great great great great great'; 
let yStart = 0; //starting position of the text wall


function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent("p5")
  textAlign(CENTER, CENTER); //adjust the anchor point of text alignment to the horizontal and vertical centers
  textSize(50); //make the text 20 pixels in size
}

function draw() {
  background(0);
  for (let y = yStart; y < height; y += 40) { //use a for loop to draw the line of text multiple times down the vertical axis
    fill(255, y / 2, random(0, 100)); //create a gradient by associating the fill color with the y location of the text
    text(content, width / 2, y); //display text
  }
  yStart--; //move the starting point of the loop up to create the scrolling animation, yStart-- is the same as yStart = yStart -1 or yStart-=1
}
