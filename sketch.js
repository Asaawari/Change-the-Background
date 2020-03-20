var r,g,b;

r = 85,1,400;
g = 175,1,400;
b = 255,1,400;



function setup() {
 createCanvas(400, 400);

}

function draw() { 
  background("blue");
  ellipse(mouseX,mouseY,39,39);
  if (ellipse.x < 85) {
    background("red");    
  }
  if (ellipse.x < 175 & ellipse.x > 85) {
    background("green");
  }
  if (ellipse.x < 255 & ellipse.x > 175) {
    background("green")
  }
}


 