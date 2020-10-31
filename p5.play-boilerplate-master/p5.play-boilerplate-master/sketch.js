var fixedRect, movingRect;
var r1,r2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  r1 = createSprite(200,200,80,30);
  r1.shapeColor = "green";
  r1.debug = true;
  r1.velocityX = 5;

  r2 = createSprite(100,200,80,30);
  r2.shapeColor = "green";
  r2.debug = true;
  r2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouched(r1,r2)){
    r1.shapeColor = "blue";
    r2.shapeColor = "blue";
  } else {
    r1.shapeColor = "green";
    r2.shapeColor = "green";
  }

  bounced(r1,r2);

  
  drawSprites();
}


