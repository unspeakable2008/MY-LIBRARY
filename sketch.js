var object2,object1

function setup() {
 
 
  createCanvas(800,400);
  object22 = createSprite(400, 200, 100, 50);
  object22.shapeColor = "red";
  object22.debug = true;
 object11 = createSprite(400,200,50,100);
 object11.shapeColor = "green";
  object11.debug = true;
  
}

function draw() {
  background(0,0,0);  
  object11.x =World.mouseX; 
  object11.y = World.mouseY;
  if (istouching(object11,object22)){
object11.shapeColor = "green";
object22.shapeColor = "red";

  }
  else {object11.shapeColor = "black"
  object22.shapeColor = "black"}
  drawSprites();
}




