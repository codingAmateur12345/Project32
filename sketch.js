const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand, ball;

var block1, block2, block3, block4, block5, block6;

var block7, block8, block9, block10, block11, block12;

var block13, block14, block15, block16, block17, block18;

var block19, block20, block21, block22, block23, block24;

function setup(){
 createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

 stand1 = new Ground(800,550,300,20);
 ball = new Ball(300,550,50);

 block1 = new Box(675,520,50,50);
 block2 = new Box(725,520,50,50);
 block3 = new Box(775,520,50,50);
 block4 = new Box(825,520,50,50);
 block5 = new Box(875,520,50,50);
 block6 = new Box(925,520,50,50);

 block7 = new Box(685,472,45,45);
 block8 = new Box(730,472,45,45);
 block9 = new Box(775,472,45,45);
 block10 = new Box(820,472,45,45);
 block11 = new Box(865,472,45,45);
 block12 = new Box(910,472,45,45);

 block13 = new Box(695,430,40,40);
 block14 = new Box(735,430,40,40);
 block15 = new Box(775,430,40,40);
 block16 = new Box(815,430,40,40);
 block17 = new Box(855,430,40,40);
 block18 = new Box(895,430,40,40);

 block19 = new Box(710,390,35,35);
 block20 = new Box(745,390,35,35);
 block21 = new Box(780,390,35,35);
 block22 = new Box(815,390,35,35);
 block23 = new Box(850,390,35,35);
 block24 = new Box(885,390,35,35);



 chain = new SlingShot(ball.body,{x:200, y:100});


}

function draw(){
    background("black");
    Engine.update(engine);

    stand1.display();
   
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();

    ball.display();
    chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
    }
    
    function mouseReleased(){
    chain.fly();
    }
