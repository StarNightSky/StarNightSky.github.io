var d = 8;
var n = 5;
var sliderD;
var sliderN;

function setup() {
  createCanvas(1300, 700);
  sliderD = createSlider(1, 20, 10, 1);
  sliderN = createSlider(1, 20, 10, 1);
  sliderD.input(draw);
  sliderN.input(draw);
}
function draw() {
  d = sliderD.value();
  n = sliderN.value();
  var k = n / d;
  background(51);
  push();
  translate(width / 2, height / 2);

  beginShape();
  stroke(random(255), random(255), random(255));
  strokeWeight(4);
  for (var a = 0; a < TWO_PI * reduceDenominator(n, d); a += 0.02) {
    var r = 200 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
  noLoop();
}

function reduceDenominator(numerator, denominator) {
    function rec(a, b) {
        return b ? rec(b, a % b) : a;
    }
    return denominator / rec(numerator, denominator);
}
