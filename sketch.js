var ship
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimated("ship-1.png","ship-2.png","ship-3.png", "ship-4.png");
ship.addImage(sea.png);
if(sea.x < 0){
  sea.x = sea.widht/2;
}
}

function setup(){
  createCanvas(400,400);
 
}

function draw() {
  background("blue");
    drawSprites();

 
}