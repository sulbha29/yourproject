class Arrow{
    constructor(x,y,angle){
       
        var options = {
            friction:0.001,
            stiffness:0.05
           
        }
        this.body = Bodies.rectangle(x,y,20,5,options);
        this.width = 20;
        this.height = 5;
        World.add(world,this.body);
        this.image = loadImage("arrow.png");
    }
    display(){
        console.log(this.body.position.x);
        if(this.body.position.x>1000 && this.body.position.x<1344&&this.body.position.y>480 && this.body.position.y <763)
        {
            if(this.body.position.x>=1000&&this.body.position.x<=1035 && this.body.position.y>=480&&this.body.position.y<=515 ){
               if(flag==0){
                points+=10;
                flag = 1;
                }
              }
              if(this.body.position.x>1000&&this.body.position.x<1103&&this.body.position.y>516&&arrow1.body.position.y<583){
               points+=8;
             }
             if(this.body.position.x>1100 &&this.body.position.x<1194 && this.body.position.y> 584 && this.body.position.y<673){
               points+=6;
             }
             if(this.body.position.x>1100&&this.body.position.x<1344 && this.body.position.y>674&& this.body.position.y<763){
               points+=4;
             }
             
             
        console.log(this.body.position.x);
            this.body.isStatic=true;
        }
        else
            {
                this.body.isStatic=false;
            }
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        image(this.image,0,0,100,10);
        pop();
    }
}