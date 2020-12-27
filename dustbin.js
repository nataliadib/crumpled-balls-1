class dustbin {
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            'restitution':0.8,
            'friction':0.3,
            'density':1.2
        }
        this.width = width;
        this.height = height;
        this.x = x
        this.y = y

        this.body1 = Bodies.rectangle(x-width/2, y-width/4, height, width/2, options);
        World.add(world, this.body1);

        this.body2 = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body2);

        this.body3 = Bodies.rectangle(x+width/2, y-width/4, height, width/2, options);
        World.add(world, this.body3);
        }
        display(){
            var pos =this.body1.position;
            var angle = this.body1.angle;

            //push()

            rectMode(CENTER);
            strokeWeight(4);
            stroke("purple");
            fill(255);
            rect(this.x-this.width/2, this.y-this.width/4, this.height, this.width/2);
            //translate(pos.x, pos.y)
            //translate(0, 0)
            //rect(0, 0, this.width, this,height)
            rect(this.x, this.y, this.width, this.height);
            rect(this.x+this.width/2, this.y-this.width/4, this.height, this.width/2);
            //pop()
        }
    };