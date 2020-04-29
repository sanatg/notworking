const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ground;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(200,200,20,10);
    ball = new Ball(10);

    chain1 = new Chain(ground.body,ball.body);
  
}
function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    ball.display();
    chain1.display();
    
 
}
