const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, leftSide, rightSide;
var ball;

function setup() {
    createCanvas(1600, 400);

    engine = Engine.create();
    world = engine.world;

    var ballOptions = {
        isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
    };

    ball = Bodies.circle(200,200,20,ballOptions);
    World.add(world,ball);

    ground = new Ground(800,390,1600,20);
    rightSide = new Ground(1100,350,20,400)
    leftSide = new Ground(1300,350,20,400);

}

function draw() {
    background("lightblue");
    Engine.update(engine);

    rectMode(CENTER);
    ellipseMode(RADIUS);

    leftSide.show();
    rightSide.show(); 
    ground.show();

    ellipse(ball.position.x, ball.position.y,20);
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:90, y:-90});
	}
}





