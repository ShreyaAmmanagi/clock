var hr 
var mn 
var sc ,ba;
var hrAngle,mnAngle,scAngle; 
function setup() {
  createCanvas(800,400);
   angleMode(DEGREES)

  
}

function draw() {
  background(255,255,255); 
translate(200,200) 
rotate(-90) 
  hr = hour()
  mn = minute()
  sc = second()
  scAngle = map(sc,0,60,0,360)
  strokeWeight(6)
  stroke("black")
  noFill()
  ba = arc(0,0,205,205,0,scAngle)
  
  mnAngle = map(mn,0,60,0,360)
  stroke("skyblue")
  arc(0,0,230,230,0,mnAngle);
  
  hrAngle = map(hr,0,12,0,360)
  stroke("pink")
  arc(0,0,255,255,0,hrAngle)
  push()
  rotate(scAngle)
  stroke("black")
  strokeWeight(4)  
  line(0,0,95,0)
  pop()

 push()
 rotate(mnAngle)
 stroke("skyblue")
 strokeWeight(4)
 
 line(0,0,108,0)
 pop()

 push()
 rotate(hrAngle)
 stroke("pink")
 strokeWeight(4)
 
 line(0,0,120,0)
 pop()

  drawSprites()
  
}