
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var canvas;

function preload(){
	
}

function setup() {
canvas = createCanvas(windowWidth/1.5, windowHeight/0.9);
	engine = Engine.create();
  world = engine.world;

  //creating bob
	bob1 = new pendulum(150,600,50);
	bob2 = new pendulum(270,600,50);
	bob3 = new pendulum(390,600,50);
	bob4 = new pendulum(510,600,50);
  bob5 = new pendulum(630,600,50);
  
  //rope for all bobs
  rope1 = new rope(bob1.body,{x : 150,y : 150});
  rope2 = new rope(bob2.body,{x : 270, y : 150});
  rope3 = new rope(bob3.body,{x : 390, y : 150});
  rope4 = new rope(bob4.body,{x : 510, y : 150});
  rope5 = new rope(bob5.body,{x : 630, y : 150});
  
  //handle
    handle1 = new handle(380,150,560,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  handle1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x : mouseX, y : mouseY});
}

