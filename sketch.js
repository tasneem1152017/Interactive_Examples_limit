let thetaSlider;

function setup() {
  createCanvas(400, 300);
  
  thetaSlider = createSlider(0, HALF_PI, PI / 4, 0.001);
  thetaSlider.position(10, height + 10);
  thetaSlider.style('width', '380px');
  
  thetaSlider.input(redraw);
}

function draw() {
  background(220);
  
  let theta = thetaSlider.value();
  let phi = theta / 2;
  
  fill(0, 0, 255);
  stroke(0);
  strokeWeight(1);
  circle(width / 2, height / 2, 200);
  
  fill(255);
  stroke(0);
  beginShape();
  vertex(width / 2, height / 2);
  vertex(width / 2 + cos(theta) * 100, height / 2 + sin(theta) * 100);
  vertex(width / 2 + cos(theta) * 100, height / 2);
  endShape(CLOSE);
  
  noFill();
  drawDashedLine(width / 2 + cos(theta) * 100, height / 2 + sin(theta) * 100, width / 2, height / 2, 5, 2);
  
  fill(255, 127);
  beginShape();
  vertex(width / 2 + 100, height / 2);
  vertex(width / 2 + cos(theta) * 100, height / 2 + sin(theta) * 100);
  vertex(width / 2 + cos(theta) * 100, height / 2);
  endShape(CLOSE);
  
  fill(0);
  textSize(15);
  text(phi.toFixed(2), width / 2 + cos(phi) * 100 * 0.1, height / 2 + sin(phi) * 100 * 0.1);
  
  textSize(18);
  let t_over_s = ((-1 + cos(theta)) * sin(theta)) / (-theta + cos(theta) * sin(theta));
  let plotLabel = 't(φ) / s(φ) = ' + nf(t_over_s, 0, 6);
  text(plotLabel, 10, 30);
}

function drawDashedLine(x1, y1, x2, y2, dashLength, gapLength) {
  let totalLength = dist(x1, y1, x2, y2);
  let dashCount = Math.floor(totalLength / (dashLength + gapLength));
  let dashFraction = (dashLength / totalLength) * (dashLength + gapLength);
  let gapFraction = (gapLength / totalLength) * (dashLength + gapLength);
  
  for (let i = 0; i < dashCount; i++) {
    let segmentStart = lerpPoint(x1, y1, x2, y2, i / dashCount);
    let segmentEnd = lerpPoint(x1, y1, x2, y2, (i + dashFraction) / dashCount);
    
    line(segmentStart.x, segmentStart.y, segmentEnd.x, segmentEnd.y);
  }
}

function lerpPoint(x1, y1, x2, y2, t) {
  let x = lerp(x1, x2, t);
  let y = lerp(y1, y2, t);
  return createVector(x, y);
}