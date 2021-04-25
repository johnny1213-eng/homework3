var fixedRect, movingRect;
var o1,o2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1=createSprite(200,100,50,50);
  o1.shapeColor="green";
  o1.debug=true;
  o2=createSprite=createSprite(300,100,50,50);
  o2.shapeColor="green";
o2.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if (istouching(movingRect,o2)){
movingRect.shapeColor="red";
o2.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
    o2.shapeColor="green";
  }
  drawSprites();
}
