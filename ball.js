class Ball{
constructor(x,y,radius){
this.image = loadImage("polygon.png");
var options = {
isStatic:true,
'restitution':0.5,
'friction':1.0,
'density':1.5
}
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("Yellow");
    image(this.image,0,0,this.radius);

}
}