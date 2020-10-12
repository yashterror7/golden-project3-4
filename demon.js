class Demon{
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.9,
            'friction' :0.3,
            'density' :1.0
        }
        this.body = Bodies.rectangle(x,y,width.height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/demon.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        fill(255);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}