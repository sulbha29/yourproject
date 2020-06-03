const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var bg;
var ghg;
var points =0;
var b,release=0;
var restart;
var ground;
var brickimg = [];
//var flag =0;
function preload(){
  bg = loadImage("sprites/bg5.jpg");
 // aim = loadImage("aim1.png");
  brickimg[0] = loadImage("images/redd_burned.png")
    brickimg[1] = loadImage("images/yellow1_burned.png");
    brickimg[2] = loadImage("images/blu1_burned.png")
    brickimg[3] = loadImage("images/black1_burned.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  arrow1 = new Arrow(200+100,510,PI/2);
  string = new Bow(arrow1.body,{x:200+100,y:436});
 restart = createSprite(500,500,20,40);
 redblock = new Brick(1000,480,35,35,brickimg[0]);
 yellowblock = new Brick(1000,480,67,67,brickimg[1]);
 blueblock = new Brick(1000,480,90,90,brickimg[2]);
 blackblock = new Brick(1000,480,150,150,brickimg[3]);
  
 
    ground=Bodies.rectangle(windowWidth/2,windowHeight-50,windowWidth,50,{ isStatic: true });
    World.add(engine.world,ground);
}

function draw() {
  background(bg);  
  Engine.update(engine);
 
 //image(aim,1050,290,100,300);

    
 
//box.display();
//b.display();
if(release>=10){
  restart.display();

}
if(mousePressedOver(restart)){
  release=0;
  points=0;
    Matter.Body.setPosition(arrow1.body,{x:1100,y:515});
}

fill("white");

string.display();
arrow1.display();
redblock.display();
yellowblock.display();
blueblock.display();
blackblock.display();

textSize(15);
textStyle(ITALIC);
fill("green");
text("50 points",1010+200,545-100);
fill("cream");
text("30 points",1010+200,515-100);
fill("cream");
text("30 points",1010+200,575-100);
fill("red");
text("20 points",1010+200,485-100);
fill("red");
text("20 points",1010+200,605-100);
fill("blue");
text("10 points",1010+200,635-100);
fill("blue");
text("10 points",1010+200,455-100);
fill("green");
textSize(50);
textStyle(ITALIC);
text("HIT THE TARGET",500,100);
textSize(20);
fill(155,10,101);

text("SCORE = "+points,900,200);

fill(0,0,0);
text("NO.OF RELEASES = "+release,600,200);
//ghg.display();
//drawSprites();

}



function mouseDragged(){
  
  Matter.Body.setPosition(arrow1.body,{x:mouseX,y:mouseY});
  
}
function mouseReleased(){
  string.fly();
}
function keyPressed(){
  if(keyCode === 32){
    flag =0;
      Matter.Body.setPosition(arrow1.body,{x:300,y:510});
       string.attach(arrow1.body);
       Matter.Body.setAngle(arrow1.body,PI/2);
  }
}