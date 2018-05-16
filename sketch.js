function setup() {
  createCanvas(600, 600, WEBGL);

}

function draw() {
  background(200);
  rotateX(frameCount * 0.06);
  rotateY(frameCount * 0.06);
  torus(mouseX, mouseY);
  rotateX(frameCount * 0.06);
  rotateY(frameCount * 0.03);
  torus(mouseX, mouseY);
}