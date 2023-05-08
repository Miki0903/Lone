const radius=200;


//The setup function only happens once
function setup() {
	createCanvas(500, 500,WEBGL); //create a 500px X 500px canvas
  noStroke();
  fill(200);
}
//The draw function hapens over and over again 
function draw(){
  stroke(200,20,20)
  background(0); // an RGB color for the circle's border
  strokeWeight(10);
  fill(500,500,20,90); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  const dirY=(mouseY/ height-0.5)*4;
  const dirX=(mouseX/width-0.5)*4;
  directionalLight(204,204,204,dirX,dirY,1);
  translate(-1.5*radius,0,0);
  sphere(radius);
  translate(3*radius,0,0);
  sphere(radius)
}
