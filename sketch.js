
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
blok1 = bodies. circle(200,10,10,blok1_options);
world.add(world,blok1);
	
blok2 = bodies. circle(110,50,10,10,blok2_options);
world.add(world,blok2);
blok3 = bodies. circle(350,50,10,10,blok3_options);
world.add(world,blok3);
	
	


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}