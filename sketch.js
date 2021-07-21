
function setup() {
  createCanvas(400,400);
}
function draw() {
  var box = createSprite(200,200,40,40);
  box.shapeColor = ("white");
  background("red");  
  
if(keyIsDown(LEFT_ARROW))
 {
  background("blue");  
 } 
  if(keyIsDown(RIGHT_ARROW))
 {
  background("black");  
 }     
 if(keyIsDown(UP_ARROW))
 {
  background("orange");  
 }  
 if(keyIsDown(DOWN_ARROW))
 {
  background("green");  
 } 
  
  
  drawSprites();
}




