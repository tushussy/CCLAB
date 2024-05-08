var capture;
var tracker
var w = 800,
    h = 400;

function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    var canvas = createCanvas(w, h);
    canvas.parent('p5'); // Specify the parent div for the canvas
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);
    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
    
}

function draw() {
    background(0);
    var positions = tracker.getCurrentPosition();
    strokeWeight(2)
    noFill();
    stroke(255);
    beginShape();
    for (var i = 0; i < positions.length; i++) {
        vertex(positions[i][0], positions[i][1]);
    }
    endShape();

    for (var i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        ellipse(positions[i][0], positions[i][1], 4, 4);
      
        line(positions[5][0], positions[5][1], positions[5][0], positions[5][1]+50);
        line(positions[9][0], positions[9][1], positions[9][0], positions[9][1]+50);
    }

    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);
    }
}

