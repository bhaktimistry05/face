function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(250,50,50);

  //face & ears
  strokeWeight(5);
  fill(200,180,0);
  rect(100, 100, 600, 600, 0, 0, 25);
  arc(100, 100, 150, 150);
  arc(700, 100, 150, 150);

// eye
  fill(255);
  circle(250, 250, 100);
  circle(550, 250, 100);
  arc(400, 450, 290, 280, 0)


//pupil
fill(0);
circle(260,240, 20);
circle(560, 240, 20);

  //mouth
  fill(255);
  rect(300,450, 200, 80);
  
  
}