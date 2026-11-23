let angle = 0;
let speed = 0.03;
let paused = false;

let centerX = 300;
let centerY = 250;
let orbitRadius = 160;

function setup() {
    createCanvas(600, 500);
}

function draw() {
    background(5, 10, 30);

    // Draw Earth
    noStroke();
    fill(30, 100, 220);
    circle(centerX, centerY, 100);

    // Draw the orbit path
    noFill();
    stroke(150);
    strokeWeight(1);
    circle(centerX, centerY, orbitRadius * 2);

    // Calculate satellite position
    let x = centerX + cos(angle) * orbitRadius;
    let y = centerY + sin(angle) * orbitRadius;

    // Draw satellite
    push();
    translate(x, y);
    rotate(angle + HALF_PI);

    fill(220);
    rectMode(CENTER);
    rect(0, 0, 25, 15);

    fill(50, 150, 255);
    rect(-22, 0, 18, 10);
    rect(22, 0, 18, 10);

    pop();

    // Display information
    fill(255);
    noStroke();
    textSize(18);
    text("SATELLITE ORBIT", 15, 25);

    textSize(14);
    text("Speed: " + speed.toFixed(3), 15, 50);

    text("SPACE = Pause / Resume", 15, 455);
    text("UP / DOWN = Change Speed", 15, 480);

    // Update satellite angle
    if (!paused) {
        angle = angle + speed;
    }
}

// Keyboard controls
function keyPressed() {

    if (key === ' ') {
        paused = !paused;
    }

    if (keyCode === 38) {
        speed = speed + 0.01;
    }

    if (keyCode === 40) {
        speed = max(0.005, speed - 0.01);
    }
}
