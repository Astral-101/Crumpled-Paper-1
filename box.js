class Box {
    constructor(x, y, width, height) {
      var options = {
        isStatic : false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
      this.width = width;
      this.height = height;
    
   

    }
    
    display(){
      var pos =this.body.position;
      var boxAngle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(boxAngle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
  
    
    }
  }