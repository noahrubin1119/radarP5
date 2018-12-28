function setup() {
  // put setup code here
  createCanvas(600, 600);
  background(255, 204, 0);

}

const rows = 50;
let counter = 0;
let w = 300;
let a = 1;
let theta = Math.PI;
let prevTheta = 0;
let x2 = 0;
let y2 = 0;


function draw() {
  fill(0);
  strokeWeight(2);
  rect(0, 0, width, height);
  for(let y = 0; y < height; y += height/rows){
    counter += 1;
    for(let x = 0; x < width; x += width/rows){
      counter += 1;
      if(counter%2 > 0){
        fill(255);
        rect(x, y, width/rows, height/rows);
      }
    }
  }
  stroke(0);
  strokeWeight(2);

  fill(75,83,32,191);
  ellipse(width/2, height/2, w, w);
  w+=a;
  if(w == 400){a = -1;}
  else if (w== 300) {a = 1;}

  if(a > 0){
    theta = Math.abs(map(w, 300, 400, -Math.PI*2, 0, false));
  }
  else{
    theta = map(-w, -300, -400, 0, Math.PI*2, false);
  }

  x2 = w/2*Math.cos(theta);
  y2 = w/2*Math.sin(theta);
  stroke('black');
  strokeWeight(4);
  line(width/2, height/2, x2+width/2, y2+height/2);
  stroke(0);
  strokeWeight(2);


  let planeAlpha = distance(mouseX, mouseY, 0, 0)*Math.sin(theta); //distance of mouse to the line circling...
  let planeColor = color(75,83,32);
  console.log(distance(mouseX, mouseY, 0, 0));
  if(distance(mouseX, mouseY, 300, 300) <= w/2){
    push()
    stroke(255);
    // strokeWeight(20);
    // point(mouseX, mouseY);
    drawPlane(mouseX, mouseY, planeAlpha, planeColor);
    pop();
  }
  // else{
  //   push();
  //   strokeWeight(0);
  //   pop();
  // }
}

function distance(x1, y1, x2, y2){
  let sqrt = Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)
  let distance = Math.sqrt(sqrt);
  return distance;
}

function drawPlane(x, y, a, c){
  c.setAlpha(a);
  fill(c);
  stroke(c);
  rectMode(CENTER);
  rect(x, y, 50, 10);
  rect(x, y, 20, 70, 2, 10, 10, 2);
  triangle(x+25, y+3, x+25, y-3, x+30, y);
}
