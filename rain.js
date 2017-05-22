//drop the rain
function Drop() {
//rain at random width
  this.x = random(width);
//how much rain fall
  this.y = random(-500, -50);
//how small or big the rain should be
  this.z = random(0, 20);
//thw length of the rain
  this.len = map(this.z, 0, 20, 10, 20);
//the speed of how fast or slow the rain should fall
  this.yspeed = map(this.z, 0, 20, 1, 20);

//make rain fall
  this.fall = function() {
//speed of rain
    this.y = this.y + this.yspeed;
//the amount of rainfall
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;
//if set up random and map for the height of the rain
    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }
//this.show function help set out thickness,strokeweight, random for the rain to display
  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(random(255),random(255),random(255));
    line(this.x, this.y, this.x, this.y+this.len);
    
  }
}
//var drop display the rainbow rain.
var drops = [];
//function setup help setup rain drop 
function setup() {
  createCanvas(1500, 900);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}
//function draw setup the colors of the background, drop the rain
function draw() {
  background(25, 25, 25);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
//that the end of rainbow rainfall, thank you 
