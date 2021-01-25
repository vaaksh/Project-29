const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var released, slingshot1, polygon1, ground1, platform1, platform2, block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25 ;
function setup(){
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(1000,600);
    ground1 = new Ground(500, 600, 1000, 10);
    platform1 = new Ground(500, 300, 300, 10);
    platform2 = new Ground(850, 220, 200, 10);
    block1  = new Block(390, 270);
    block2  = new Block(430, 270);
    block3  = new Block(470, 270);
    block4  = new Block(510, 270);
    block5  = new Block(550, 270);
    block6  = new Block(590, 270);
    block7  = new Block(630, 270);
    block8  = new Block(430, 240);
    block9  = new Block(470, 240);
    block10 = new Block(510, 240);
    block11 = new Block(550, 240);
    block12 = new Block(590, 240);
    block13 = new Block(470, 210);
    block14 = new Block(510, 210);
    block15 = new Block(550 ,210);
    block16 = new Block(510, 170);
    block17 = new Block(770, 190);
    block18 = new Block(810, 190);
    block19 = new Block(850, 190);
    block20 = new Block(890, 190);
    block21 = new Block(930, 190);
    block22 = new Block(810, 150);
    block23 = new Block(850, 150);
    block24 = new Block(890, 150);
    block25 = new Block(850, 110);
    polygon1 = new Polygon(50, 350);
    slingshot = new SlingShot(polygon1.body,{x:200, y:250});
    released = false;
}
function draw(){
    background(0, 0, 0);
    Engine.update(engine);
    ground1.display();
    polygon1.display();
    platform1.display();
    platform2.display();
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
    block25.display();
    slingshot.display();
}
function mouseDragged(){
    if(released === false){
        Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    released = true;
}