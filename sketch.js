//crearting variable allocations
var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

//loading all of the images/animations
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  //creating canvas
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
//creating left boundary and making it invisible
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;


//creating right boundary and making it invisible
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

//creating background
function draw() {
  background(0);
  //moving the ground
  path.velocityY = 4;
  
  //controlling the boy
  boy.x = World.mouseX;
  
  //creatingboundaries
  edges= createEdgeSprites();
  
  //have the boy stop at the boundaries
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  
  //resetting the background
  if(path.y > 400 ){
    path.y = height/2;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  //displaying sprites
  drawSprites();
}
