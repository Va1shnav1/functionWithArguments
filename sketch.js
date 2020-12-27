var box1;
var box2;
var box3;
var box4;
function setup() {
  createCanvas(800,800);
  box1=createSprite(200, 0, 50, 50);
  box1.shapeColor="green";
  box1.debug="true";
  box2=createSprite(200, 400, 50, 50);
  box2.shapeColor="green";
  box2.debug="true";
  box3=createSprite(400, 0, 50, 50);
  box3.shapeColor="green";
  box3.debug="true";
  box4=createSprite(600, 400, 50, 50);
  box4.shapeColor="green";
  box4.debug="true";
}

function draw() {
  background(0);  
  box1.x=mouseX;
  box1.y=mouseY;
  if(isTouching(box1, box3)===true){
    box1.shapeColor="red";
    box3.shapeColor="red";
  }else{
    box1.shapeColor="green";
    box3.shapeColor="green";
  }
  drawSprites();
}
function isTouching(object1, object2){
  if(object1.x-object2.x<=(object1.width+object2.width)/2
  && object2.x-object1.x<=(object1.width+object2.width)/2
  && object2.y-object1.y<=(object1.height+object2.height)/2
  && object1.y-object2.y<=(object1.height+object2.height)/2){
   return true;
  }
  else{
    return false;
  }
}