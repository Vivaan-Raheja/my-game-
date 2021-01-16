const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var driver , car ,fuel , acselator , brake,world,engine
var ground , bg1,bg2,bg3

function preload(){
bg1=loadImage ("images/1.png")
bg2=loadImage("images/2.png")
bg3=loadImae("images/3.png")

}

function setup (){
  createCanvas(windowWidth,windowHeight)
  engine=Engine.create()
  world=engine.world
  ground=new Ground (width/2,height,width,20)
}
function draw (){
  background (bg1)
  Engine.update(engine)
  ground.display()
}