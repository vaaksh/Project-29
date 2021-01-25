class Polygon {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.5,
          density:100,
          friction:0.1
      }
      this.image = loadImage("polygon.png");
      this.body = Bodies.polygon(x, y, 6, 20,options);
      this.width = 40;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 40, 40);

    }
  };
  