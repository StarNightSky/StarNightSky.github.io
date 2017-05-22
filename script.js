function draw() {
//Sets the color mode to RGB (red, green, blue)
  colorMode(RGB);
//Sets the bachground to the color black
  background(0, 0, 0, 25);
//This code helps with the percentages a firework show up; the probability
    if (random(1) < 0.03) {
fireworks.push(new Firework());
  }
//Makes a for loop that determines the firework's lenghth  
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
//Makes a function named firework
function Firework() {
//Chooses a random color
  this.hu = random(255);
//Creates a particle
  this.firework = new Particle(random(width), height, this.hu, true);
  this.exploded = false;
  this.particles = [];
//Makes a function called done  
  this.done = function() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }
//A function called update
  this.update = function() {
    if (!this.exploded) {
//Carries fireworks up and makes them explode; this code makes the fireworks stop at a certain place
      this.firework.applyForce(gravity);
      this.firework.update();
      
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }
    
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }
//Makes a function called explode, which makes the fireworks burst out in the 'sky'
  this.explode = function() {
//This creates a for loop which determines the amount of sparks (currently 100) that will burst from a firework
    for (var i = 0; i < 100; i++) {
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }
//Makes function called show
  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }
    
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}

function Particle(x, y, hu, firework) {
  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = 255;
  this.hu = hu;
  this.acc = createVector(0, 0);
  
  if (this.firework) {
//This code gives the firework range of heights it can reach and the direction it moves
    this.vel = createVector(random(-4, 4), random(-8, -20));
  } else {
    this.vel = p5.Vector.random2D();
//This line of code gives a range to fow far the small firework particles would spread out
    this.vel.mult(random(16, 20));
  }
 
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.9);
//This line of code determines how long a firework will remain visible until it disappears (it deletes the frames of fireworks)
      this.lifespan -= 4;
    }
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    colorMode(HSB);
    
    if (!this.firework) {
//The strokeweight sets the thickness of the exploded particles of the firework
      strokeWeight(5);
//This line below sets the exploding particle's colors
      stroke(hu, random(255), random(255), this.lifespan);
    } else {
//The stroke weight here refers to the shooting up part of the firework; it sets its thickness
      strokeWeight(6);
//This sets the firework's color (the part shooting up)
      stroke(hu, random(255), random(255));
    }
//This determines the direction in which an exploded firework would fall: up, down, left, right... 
    point(this.pos.x, this.pos.y);
  }
}
//makes a variable called fireworks which have an empty set
var fireworks = [];
//Makes a variable called gravity
var gravity;

function setup() {
//Makes the canvas's size(the frame)
  createCanvas(1350, 700);
//Sets color mode to HSB(hue, saturation, and brightness)
  colorMode(HSB);
//Since this code includes the word gravity, you can tell it is related to such;  
//It is like a force of gravity acting on the fireworks: the more gravity, the less high the fireworks shoot
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
  
}
