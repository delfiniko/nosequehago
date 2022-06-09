var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["43842363-a889-48c8-b5c5-1099ba25edce","2a01cad1-a405-489e-b371-fae1a2dda8be","903bf9a7-4be4-4bdb-ad03-fab5c25190a2","c76fb444-32c8-447f-93bb-e7e1f55fe589","478da320-615f-4970-a806-a32db6306871"],"propsByKey":{"43842363-a889-48c8-b5c5-1099ba25edce":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"lHo5xr.xrBDzcxHU_Kw9h4t9zZSfT04Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/43842363-a889-48c8-b5c5-1099ba25edce.png"},"2a01cad1-a405-489e-b371-fae1a2dda8be":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"NLxmMipaVH8lwJ4WhSlfKznkezp.e_7a","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/2a01cad1-a405-489e-b371-fae1a2dda8be.png"},"903bf9a7-4be4-4bdb-ad03-fab5c25190a2":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":12,"version":"V0beUzVfKZIJEvu0Em6K1PIWQtCdT4Pf","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/903bf9a7-4be4-4bdb-ad03-fab5c25190a2.png"},"c76fb444-32c8-447f-93bb-e7e1f55fe589":{"name":"animation_4","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"478da320-615f-4970-a806-a32db6306871":{"name":"animation_5","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"8UF_.Znu3Pw7Y3B8wbiFJIWfnyg6eeo7","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/478da320-615f-4970-a806-a32db6306871.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState = "inicio";
var GAMEOVER = createSprite(200, 200, 400, 200);
var puntos = 0;
var c1 = createSprite(25, 75, 50, 50);
var c2 = createSprite(75, 75, 50, 50);
var c3 = createSprite(125, 75, 50, 50);
var c4 = createSprite(175, 75, 50, 50);
var c5 = createSprite(225, 75, 50, 50);
var c6 = createSprite(275, 75, 50, 50);
var c7 = createSprite(325, 75, 50, 50);
var c8 = createSprite(375, 75, 50, 50);
var c1a = createSprite(25, 125, 50, 50);
var c2a = createSprite(75, 125, 50, 50);
var c3a = createSprite(125, 125, 50, 50);
var c4a = createSprite(175, 125, 50, 50);
var c5a = createSprite(225, 125, 50, 50);
var c6a = createSprite(275, 125, 50, 50);
var c7a = createSprite(325, 125, 50, 50);
var c8a = createSprite(375, 125, 50, 50);
var bola = createSprite(200, 240, 10, 10);
var bate = createSprite(200, 360, 100, 25);
c1.shapeColor = "red";
c2.shapeColor = "blue";
c3.shapeColor = "red";
c4.shapeColor = "blue";
c5.shapeColor = "red";
c6.shapeColor = "blue";
c7.shapeColor = "red";
c8.shapeColor = "blue";
c1a.shapeColor = "green";
c2a.shapeColor = "yellow";
c3a.shapeColor = "green";
c4a.shapeColor = "yellow";
c5a.shapeColor = "green";
c6a.shapeColor = "yellow";
c7a.shapeColor = "green";
c8a.shapeColor = "yellow";
bate.shapeColor = "black";
bola.shapeColor = "black";
GAMEOVER.setAnimation("animation_2");
bola.setAnimation("animation_1");
bola.scale = 0.2;
function draw() {
  background("lightBlue");
  createEdgeSprites();
  bola.bounceOff(bate);
  bola.bounceOff(leftEdge);
  bola.bounceOff(rightEdge);
  bola.bounceOff(topEdge);
  if (gameState === "inicio") {
    if (keyDown("w")) {
      bola.velocityY = 9;
      bola.velocityX = 9;
      GAMEOVER.setAnimation("animation_4");
      gameState = "gameplay";
    }
  }
  if (gameState === "gameplay") {
 if (bola.isTouching(c1)) {
   c1.destroy();
    puntos = puntos + 1;
  }
  if (bola.isTouching(c2)) {
   c2.destroy();
    puntos = puntos + 1;
  }
  if (bola.isTouching(c3)) {
   c3.destroy();
    puntos = puntos + 1;
  }
  if (bola.isTouching(c4)) {
   c4.destroy();
   puntos = puntos + 1;
  }
  if (bola.isTouching(c5)) {
   c5.destroy();
   puntos = puntos + 1;
  }
  if (bola.isTouching(c6)) {
   c6.destroy();
   puntos = puntos + 1;
  }
  if (bola.isTouching(c7)) {
   c7.destroy();
   puntos = puntos + 1;
  }
  if (bola.isTouching(c8)) {
   c8.destroy();
   puntos = puntos + 1;
  }
  if (bola.isTouching(c1a)) {
   c1a.destroy();
   puntos = puntos + 1;
  }
  if (bola.isTouching(c2a)) {
   c2a.destroy();
   puntos = puntos + 1;
  }
  if (bola.isTouching(c3a)) {
   c3a.destroy();
   puntos = puntos + 1;
  }
  if (bola.isTouching(c4a)) {
  c4a.destroy();
  puntos = puntos + 1;
  }
  if (bola.isTouching(c5a)) {
  c5a.destroy();
  puntos = puntos + 1;
  }
  if (bola.isTouching(c6a)) {
  c6a.destroy();
  puntos = puntos + 1;
  }
  if (bola.isTouching(c7a)) {
  c7a.destroy();
  puntos = puntos + 1;
  }
  if (bola.isTouching(c8a)) {
  c8a.destroy();
  puntos = puntos + 1;
  }
  if (puntos === 16) {
     gameState = "final";
  }
  }
  if (gameState === "final") {
    if (puntos === 16) {
      GAMEOVER.setAnimation("animation_5");
    }
  }
  if (bola.isTouching(bottomEdge)) {
    GAMEOVER.setAnimation("animation_3");
    gameState === "final";
  }
  bate.x= World.mouseX;
  textSize(20);
  text("puntos"+puntos, 10, 16);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
