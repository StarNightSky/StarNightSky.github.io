function Star() {
//Makes the dimensions and makes things look in depth
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;
//Makes a function called update
  this.update = function() {
//Everytime the stars reach edge, the function will restart and randomize the star's locations
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }
//Makes a fuction called show
  this.show = function() {
    //choose 3 random values for red, green, blue
    fill(random(255), random(255), random(255))
    noStroke();
//Makes the speed in which stars move
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 24, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;
//This colors a part of the stars
    stroke(random(255));
    line(px, py, sx, sy);

  }
}
//makes a variable named stars with an empty set
var stars = [];
//makes a variable called speed
var speed;

function setup() {
//Makes the canvas's size
  createCanvas(1350, 800);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50);
//Sets the background's color
  background(0,0,100);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show()
  }
}
