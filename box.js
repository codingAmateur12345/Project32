class Box {
    constructor(x, y, width, height){
        var options = {
            isStatic:false,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
       rectMode(CENTER);
       if(pos.y>515){
           fill("cyan");
       }
       if(pos.y>465 && pos.y<500){
           fill("deepPink");
       }

       if(pos.y>420 && pos.y<450){
           fill("MediumSpringGreen");
       }

       if(pos.y>370 && pos.y<400){
           fill("Teal");
       }

       rect(0, 0, this.width, this.height);
       pop();
    }
    
    }