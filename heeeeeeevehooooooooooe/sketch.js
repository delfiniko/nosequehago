var BOTA
var BOTAINVISIBLE
var mar
var oceano
function preload(){
  oceano = loadImage("sea.png")
BOTAINVISIBLE = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",)
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(400,200)
  BOTA = createSprite(130,200,30,30)
  // poner mar aca
  mar.addImage("hihi",oceano)
  BOTA.addAnimation("EL",BOTAINVISIBLE)
  BOTA.scale = 0.3
}

function draw() {
  background("blue");
 drawSprites();
}