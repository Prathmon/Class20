function setup() {
  createCanvas(800, 400);
  rect1 = createSprite(400, 200, 100, 50);
  rect2 = createSprite(100, 100, 50 ,20);
}

function draw() {
  background("red");

  rect2.y = World.mouseY;
  rect2.x = World.mouseX;  
  console.log(rect1.x-rect2.x);

  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && rect2.x - rect1.x < rect1.width/2 + rect2.width/2 
    && rect1.y - rect2.y < rect1.height/2 + rect2.height/2 && rect2.y - rect1.y < rect1.height/2 + rect2.height/2){
    rect2.shapeColor = "blue";
  }else {
    rect2.shapeColor = "yellow";
  }

  drawSprites();
}