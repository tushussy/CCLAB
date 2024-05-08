let vid;
let t = 0;

function preload(){
  vid = createVideo('LEGLEGLEG/assets/grancat.MOV');
}
function setup() {
  let canvas = createCanvas(600, 350);
  canvas.parent("p5");
  background(255);
 // vid.play();
  vid.hide();
}

function draw() {
  //this is the frame of the video according to the mouseX position
  t = (mouseX/width) * vid.duration();
  //this function changes the frame you see
  vid.time(t);
  //shows the video
  image(vid, 0, 0);
}