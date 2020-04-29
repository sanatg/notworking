class Ball{
  constructor(x,y){
  
  this.body = Bodies.rectangle(x, y, 50, 50);
  this.radius = 50
  
  
  World.add(world,this.body)
  
  }
  display(){
  var pos = this.body.position;
  pos.x = mouseX
  pos.y = mouseY
 var angle = this.body.angle;
 push();
 translate(pos.x,pos.y)
 rotate(angle);
 
  push();

  ellipseMode(RADIUS);
  fill("red"); 
ellipse(0,0,this.radius);
 // rect(0, 0, this.width, this.height);
  pop();

  }
  }