class Tree{

    constructor(x,y,w,h){
        var options = {
            
            isStatic : true
           
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body)
        this.image = loadImage("images/tree.png");
        
        this.width = w;
        this.height = h;
 
    }

    display(){

      //  var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }

}