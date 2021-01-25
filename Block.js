class Block {
  constructor(x,y) {
    var options = {
        isStatic: false,
        restitution:0.5,
        density:0.1,
        friction:0.1
    }
    this.body = Bodies.rectangle(x,y,40,40,options);
    this.width = 40;
    this.height = 40;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(random(150, 225), random(0, 50), random(100, 150));
    rect(pos.x, pos.y, this.width, this.height);
  }
};
