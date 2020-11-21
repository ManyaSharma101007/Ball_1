var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	

//	packageSprite=createSprite(width/2, 200, 10,10);
//	packageSprite.addImage(packageIMG)
//	packageSprite.scale=0.2





	engine = Engine.create();
	world = engine.world;

	paperBody = new Paper(50 , 600 , 15);
	
	//Create a Ground
	ground =new Ground(width/2, 650, width, 10);

	baseBody = new Basket(712,640,130,20);
	rightBody = new Basket(775,600,10,80);
	leftBody = new Basket(650,600,10,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 Engine.update(engine)
  rightBody.display();
  leftBody.display();
  baseBody.display();
  ground.display();
  paperBody.display();

 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x : 10, y : -8});
    
  }
}



