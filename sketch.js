
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper; 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper= new Paper(400,350,50,50)
	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(255);
  paper.display();
  drawSprites();
 
}



