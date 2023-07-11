let alpha, epsilon, theta, tau;

function setup() {
  createCanvas(800, 600);
  alpha = 10;
  epsilon = 0.5;
  theta = 4 * PI;
  tau = PI;
}

function draw() {
  background(255);

  let range = max(10, alpha);
  let rangeX = alpha + 12 * sqrt(1 - epsilon);

  // Plot the cycloid
  beginShape();
  stroke(255, 0, 0);
  strokeWeight(2);
  noFill();
  for (let phi = 0; phi <= theta; phi += 0.01) {
    let rCurveX = alpha * cos(phi) * cos(tau) + 10 * sqrt(1 - epsilon) * ellipticE(phi, -epsilon / (1 - epsilon));
    let rCurveY = 10 * sqrt(1 - epsilon - epsilon * cos(phi) ** 2) - alpha * cos(tau) * sin(phi) + alpha * cos(phi) * sin(tau);
    vertex(rCurveX, rCurveY);
  }
  endShape();

  // Plot the ellipse
  stroke(0, 255, 0);
  strokeWeight(2);
  noFill();
  ellipse(0, 0, 20 * sqrt(1 - epsilon), 20);

  // Draw the radial arm
  stroke(255, 0, 0);
  strokeWeight(5);
  point(alpha * cos(theta) * cos(tau) + 10 * sqrt(1 - epsilon) * ellipticE(theta, -epsilon / (1 - epsilon)), 10 * sqrt(1 - epsilon - epsilon * cos(theta) ** 2) - alpha * cos(tau) * sin(theta) + alpha * cos(theta) * sin(tau));

  // Draw the line from the ellipse's center to the terminus of the radial arm
  stroke(0, 255, 0);
  strokeWeight(2);
  line(10 * sqrt(1 - epsilon) * ellipticE(theta, -epsilon / (1 - epsilon)), 10 * sqrt(1 - epsilon - epsilon * cos(theta) ** 2), alpha * cos(theta) * cos(tau) + 10 * sqrt(1 - epsilon) * ellipticE(theta, -epsilon / (1 - epsilon)), 10 * sqrt(1 - epsilon - epsilon * cos(theta) ** 2) - alpha * cos(tau) * sin(theta) + alpha * cos(theta) * sin(tau));

  // Update the parameters
  theta += 0.01 * TWO_PI;
  if (theta > 6 * PI) {
    theta = 4 * PI;
  }
}

function ellipticE(phi, m) {
  // Implementation of the EllipticE function
  // Replace with the appropriate formula for ellipticE in JavaScript
  return 0;
}
