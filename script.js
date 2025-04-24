// script.js — p5.js animated background
let particles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(1, 22, 39); // match dark header background
}

function draw() {
  background(1, 22, 39, 25); // dark overlay

  particles.push(new Particle(mouseX, mouseY));
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1.5, 1.5);
    this.vy = random(-1.5, 1.5);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 4;
  }

  show() {
    noStroke();
    fill(42, 157, 143, this.alpha);
    ellipse(this.x, this.y, 10);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
