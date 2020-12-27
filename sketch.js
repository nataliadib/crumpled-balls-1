const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin1 = new dustbin(600, 390, 200, 20)
	paper1 = new paper(100, 300, 10);
	ground1 = new Ground(0, 400, 1800, 20)

}


function draw() {
    background("black")
  	rectMode(CENTER);
	background(0);

	dustbin1.display();
	paper1.display();
	ground1.display();

	drawSprites();
}



function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position, {x:13,y:-14});
	}
}



