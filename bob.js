class pendulum{
  constructor(x,y){
    var options = {
      restitution : 1,
      friction : 0,
      frictionAir : 0.0,
      slop : 1,
      inertia :Infinity
    };
    this.body = Bodies.rectangle(x,y,110,110,options);
    this.x = x;
    this.y = y;
    this.color = 255;
    World.add(world,this.body);
  }
  display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(3.5);
    stroke(0);
    fill(this.color);
    ellipse(0,0,110,110);
    pop();  
  }
}