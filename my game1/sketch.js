var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14;
var thor,s1,s2,s3,s4,s5,s6,thanos,f;
var score = 0;
var life = 3;
var gameState = 0;
function preload(){
wall1=loadImage("w1.png")
wall2 = loadImage("wall4.jpg")
bg = loadImage("bg2.jpg")
t2 = loadImage("th.png")
y = loadImage("yellow.png")
r = loadImage("red.png")
b = loadImage("blue.png")
o= loadImage("orange.png")
v = loadImage("violet.png")
g = loadImage("green.png")
th = loadImage("tha.png")
f = loadImage  ("fire.png")
}

function setup() {
  createCanvas(1500,700)
  firegroup = createGroup();

  w13 = createSprite(1150,300,300,30)


 
  w14 = createSprite(600,450,30,200)
 
  
  w7 = createSprite(100,300,30,525)
  w8 = createSprite(715,65,1200,30)
  w9 = createSprite(715,550,1200,30)
  w10 = createSprite(1300,300,30,500)
  thor = createSprite(1250,500,20,20)
  thor.addImage("th",t2)
  thor.scale=0.3
  thor.debug = false,
  thor.setCollider("circle",10,0,100)
  w6 = createSprite(1000,500,20,50)
  w5 = createSprite(830,470,200,20)
  w4 = createSprite(1000,200,20,50)
  w3 = createSprite(830,270,200,20)
  w2 = createSprite(500,500,20,50)
  w1 = createSprite(330,470,200,20)
  w11 = createSprite(500,200,20,50)
  w12 = createSprite(330,270,200,20)
  thanos = createSprite(165,120,20,20)
  thanos.addImage("g",th)
  thanos.velocityX = 8
  thanos.velocityY = 8
  thanos.scale = 0.1
  s1 = createSprite(random(100,1000),random(100,500),20,20)
  s1.addImage("d",r)
  s1.scale = 0.5
  s2 = createSprite(random(100,1000),random(100,500),20,20)
  s2.addImage("q",y)
  s2.scale = 0.5
  s3 = createSprite(random(100,1000),random(100,500),20,20)
  s3.addImage("q",v)
  s3.scale = 0.5
  s4 = createSprite(random(100,1000),random(100,500),20,20)
  s4.addImage("q",g)
  s4.scale = 0.5
  s5 = createSprite(random(100,1000),random(100,500),20,20)
  s5.addImage("q",o)
  s5.scale = 0.5
  s6 = createSprite(random(100,1000),random(100,500),20,20)
  s6.addImage("q",b)
  s6.scale = 0.5
}

function draw() {
  background(bg);  
 
  fill ("red")
  textSize(20)
  text ("score:"+score,1100,20)
  text ("life;"+life,1000,20)
  if(gameState === 0){
    if(frameCount%50 ===0){
      fire = createSprite(thanos.x,thanos.y,10,10)
      firegroup.add(fire);
      fire.addImage("y",f)
      fire.scale = 0.2
      fire.velocityX = random(-5,5)
      fire.velocityY= random(-5,5)
      fire.lifetime = 150;
      }
      text (mouseX+","+mouseY,200,200)
      thor.velocityY = 0;
      thor.velocityX = 0;
      drawSprites();
      thor.collide(w1)
thor.collide(w2)
thor.collide(w3)
thor.collide(w4)
 thor.collide(w5)
 thor.collide(w6)
thor.collide(w7)
thor.collide(w8)
thor.collide(w9)
thor.collide(w10)
thor.collide(w11)
thor.collide(w12)
thor.collide(w13)
thor.collide(w14)
thanos.bounceOff(w1)
thanos.bounceOff(w2)
thanos.bounceOff(w3)
thanos.bounceOff(w4)
thanos.bounceOff(w5)
thanos.bounceOff(w6)
thanos.bounceOff(w7)
thanos.bounceOff(w8)
thanos.bounceOff(w9)
thanos.bounceOff(w10)
thanos.bounceOff(w11)
thanos.bounceOff(w12)
thanos.bounceOff(w13)
thanos.bounceOff(w14)
firegroup.bounceOff(w1)
firegroup.bounceOff(w2)
firegroup.bounceOff(w3)
firegroup.bounceOff(w4)
firegroup.bounceOff(w5)
firegroup.bounceOff(w6)
firegroup.bounceOff(w7)
firegroup.bounceOff(w8)
firegroup.bounceOff(w9)
firegroup.bounceOff(w10)
firegroup.bounceOff(w11)
firegroup.bounceOff(w12)
firegroup.bounceOff(w13)
firegroup.bounceOff(w14)
for(var i = 0;i<firegroup.length;i = i+1){
  if(firegroup.get(i).isTouching(thor)){
    life = life-1;
    firegroup.get(i).remove();
    
    
    }


}
if(score===120){
gameState = 2


}

if(keyDown("UP_ARROW")){
  thor.velocityY = -5;
  thor.velocityX = 0;

 }
 if(keyDown("DOWN_ARROW")){
   thor.velocityY = 5;
   thor.velocityX = 0;

  }
  if(keyDown("RIGHT_ARROW")){
   thor.velocityY = 0;
   thor.velocityX = 5;

  }
  if(keyDown("LEFT_ARROW")){
   thor.velocityY = 0;
   thor.velocityX = -5;

  }
 if(thor.isTouching(s1)){
   score = score+20
   s1.destroy()
 }
 if(thor.isTouching(s2)){
   score = score+20
   s2.destroy()
 }
 if(thor.isTouching(s3)){
   score = score+20
   s3.destroy()
 
 }
 if(thor.isTouching(s4)){
   score = score+20
   s4.destroy()
 }
 if(thor.isTouching(s5)){
   score = score+20
   s5.destroy()
 }
 if(thor.isTouching(s6)){
   score = score+20
   s6.destroy()
   
 }
if(life === 0){
gameState = 1;


}
}
  
  else if(gameState === 1){
    thor.velocityY = 0;
    thor.velocityX = 0;
textSize(30);
    text ("GAME OVER",width/2,height/2)
firegroup.setVelocityXEach(0)
firegroup.setVelocityYEach(0)
thanos.velocityX = 0;
thanos.velocityY =0; 

  }
  else if(gameState ===2){
textSize(30)
    text ("YOU WON",width/2,height/2)
firegroup.setVelocityXEach(0)
firegroup.setVelocityYEach(0)
thanos.velocityX = 0;
thanos.velocityY =0; 

  }
}

  




  




