  var hr,mn,sc;
  var hrAngle,mnAngle,scAngle;
  
  
  function setup() {


  createCanvas(400,400);
  
  angleMode(DEGREES)

scAngle = map(sc,0,60,0,360);


}




function draw() {
  
  background(0);  

 hr = hour();
 mn = minute();
 sc = seconds();

}


function line(){

push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

}