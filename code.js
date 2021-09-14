var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b08696da-947d-41e6-bd0e-a635c9ee80bc","13275bea-6c44-432f-9c50-be039b81b98e","a612126d-87cc-4ff6-b8ab-0f5ea10b14c7","3896e619-450c-4155-9772-932f52d68825","da7013d1-80c6-4d9c-ab80-b79b4858acc6","4d13366e-53b2-4d27-9a63-44e19b2e2d80","18e2f1b1-f206-4a9b-999d-cb7f1fef6538","b867960f-b775-410a-966a-d0af3c2a45eb","73130f49-6ae4-4029-99ca-76091b88f367","8d7a38ec-3bcb-4000-a664-4cd9417f4863","7aff3651-d303-4f52-98b3-26ed4a552d68","d5137239-c6b3-4393-b25c-e336b5a7a9c7"],"propsByKey":{"b08696da-947d-41e6-bd0e-a635c9ee80bc":{"name":"block","sourceUrl":"assets/api/v1/animation-library/gamelab/tlmfqLFvxwFb489oXAwsvg5tN_lFfiVS/category_video_games/ground_grass_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"tlmfqLFvxwFb489oXAwsvg5tN_lFfiVS","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/tlmfqLFvxwFb489oXAwsvg5tN_lFfiVS/category_video_games/ground_grass_broken.png"},"13275bea-6c44-432f-9c50-be039b81b98e":{"name":"block2","sourceUrl":"assets/api/v1/animation-library/gamelab/wLZmKKpJq2LZk7m0O_TsuoS2Lf3c1wde/category_video_games/ground_cake_small.png","frameSize":{"x":201,"y":100},"frameCount":1,"looping":true,"frameDelay":2,"version":"wLZmKKpJq2LZk7m0O_TsuoS2Lf3c1wde","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":201,"y":100},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wLZmKKpJq2LZk7m0O_TsuoS2Lf3c1wde/category_video_games/ground_cake_small.png"},"a612126d-87cc-4ff6-b8ab-0f5ea10b14c7":{"name":"kid","sourceUrl":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png","frameSize":{"x":264,"y":362},"frameCount":1,"looping":true,"frameDelay":2,"version":"puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":362},"rootRelativePath":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png"},"3896e619-450c-4155-9772-932f52d68825":{"name":"ruby","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"},"da7013d1-80c6-4d9c-ab80-b79b4858acc6":{"name":"diamond","sourceUrl":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png","frameSize":{"x":391,"y":358},"frameCount":1,"looping":true,"frameDelay":2,"version":"RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":358},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png"},"4d13366e-53b2-4d27-9a63-44e19b2e2d80":{"name":"gem","sourceUrl":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png","frameSize":{"x":281,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"FJT6QpZscrzSwGwpDPnJZED8ABADci6Q","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":281,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FJT6QpZscrzSwGwpDPnJZED8ABADci6Q/category_video_games/gameplay_greendiamond2.png"},"18e2f1b1-f206-4a9b-999d-cb7f1fef6538":{"name":"crab","sourceUrl":"assets/api/v1/animation-library/gamelab/kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS/category_animals/crab.png","frameSize":{"x":288,"y":191},"frameCount":1,"looping":true,"frameDelay":2,"version":"kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":191},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kTmRQ1_RRECOF2u.0RFbMaEMXAWisxyS/category_animals/crab.png"},"b867960f-b775-410a-966a-d0af3c2a45eb":{"name":"croco1","sourceUrl":"assets/api/v1/animation-library/gamelab/.OgILExIWH7zPE7eYiSHTuP5MvAT96YL/category_animals/crocodile.png","frameSize":{"x":390,"y":150},"frameCount":1,"looping":true,"frameDelay":2,"version":".OgILExIWH7zPE7eYiSHTuP5MvAT96YL","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.OgILExIWH7zPE7eYiSHTuP5MvAT96YL/category_animals/crocodile.png"},"73130f49-6ae4-4029-99ca-76091b88f367":{"name":"bat","sourceUrl":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png","frameSize":{"x":400,"y":217},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":217},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png"},"8d7a38ec-3bcb-4000-a664-4cd9417f4863":{"name":"bat1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png","frameSize":{"x":400,"y":217},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":217},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png"},"7aff3651-d303-4f52-98b3-26ed4a552d68":{"name":"bat2","sourceUrl":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png","frameSize":{"x":400,"y":217},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":217},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZDqxOIsPUxo1v0QEjzxvWOiy1DevnaVu/category_animals/bat.png"},"d5137239-c6b3-4393-b25c-e336b5a7a9c7":{"name":"croco2","sourceUrl":"assets/api/v1/animation-library/gamelab/.OgILExIWH7zPE7eYiSHTuP5MvAT96YL/category_animals/crocodile.png","frameSize":{"x":390,"y":150},"frameCount":1,"looping":true,"frameDelay":2,"version":".OgILExIWH7zPE7eYiSHTuP5MvAT96YL","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":150},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.OgILExIWH7zPE7eYiSHTuP5MvAT96YL/category_animals/crocodile.png"}}};
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

var block1 = createSprite(30,100,10,10);
block1.setAnimation("block");
block1.scale = 0.15;

var block2 = createSprite(88,100,10,10);
block2.setAnimation("block");
block2.scale = 0.15;

var block3 = createSprite(146,100,10,10);
block3.setAnimation("block");
block3.scale = 0.15;

var block4 = createSprite(204,100,10,10);
block4.setAnimation("block");
block4.scale = 0.15;

var block5 = createSprite(262,100,10,10);
block5.setAnimation("block");
block5.scale = 0.15;

var block6 = createSprite(315,100,10,10);
block6.setAnimation("block");
block6.scale = 0.15;

var block7 = createSprite(90,200,10,10);
block7.setAnimation("block");
block7.scale = 0.15;

var block8 = createSprite(148,200,10,10);
block8.setAnimation("block");
block8.scale = 0.15;

var block9 = createSprite(206,200,10,10);
block9.setAnimation("block");
block9.scale = 0.15;

var block10 = createSprite(264,200,10,10);
block10.setAnimation("block");
block10.scale = 0.15;

var block11 = createSprite(322,200,10,10);
block11.setAnimation("block");
block11.scale = 0.15;

var block12 = createSprite(380,200,10,10);
block12.setAnimation("block");
block12.scale = 0.15;

var block13 = createSprite(30,300,10,10);
block13.setAnimation("block");
block13.scale = 0.15;

var block14 = createSprite(88,300,10,10);
block14.setAnimation("block");
block14.scale = 0.15;

var block15 = createSprite(146,300,10,10);
block15.setAnimation("block");
block15.scale = 0.15;

var block16 = createSprite(204,300,10,10);
block16.setAnimation("block");
block16.scale = 0.15;

var block17 = createSprite(262,300,10,10);
block17.setAnimation("block");
block17.scale = 0.15;

var block18 = createSprite(320,300,10,10);
block18.setAnimation("block");
block18.scale = 0.15;

var block19 = createSprite(201,170,0,0);
block19.setAnimation("block2");
block19.scale = 0.15;

var kid = createSprite(20,75,0,0);
kid.setAnimation("kid");
kid.scale = 0.10;

var ruby = createSprite(20,330,0,0);
ruby.setAnimation("ruby");
ruby.scale = 0.1;

var diamond = createSprite(40,370,0,0);
diamond.setAnimation("diamond");
diamond.scale = 0.2;

var gem = createSprite(60,330,0,0);
gem.setAnimation("gem");
gem.scale = 0.1;

var crab = createSprite(120,45,0,0);
crab.setAnimation("crab");
crab.scale = 0.14;
crab.velocityY = 1;

var crab2 = createSprite(220,45,0,0);
crab2.setAnimation("crab");
crab2.scale = 0.14;
crab2.velocityY = -1;

var crab3 = createSprite(320,45,0,0);
crab3.setAnimation("crab");
crab3.scale = 0.14;
crab3.velocityY = 1;

var croco = createSprite(50,170,0,0);
croco.setAnimation("croco1");
croco.scale = 0.25;
croco.velocityX = 2;

var croco2 = createSprite(350,170,0,0);
croco2.setAnimation("croco2");
croco2.scale = 0.25;
croco2.velocityX = 2;

var bat = createSprite(95,249,0,0);
bat.setAnimation("bat1");
bat.scale = 0.15;
bat.velocityY = 1;

var bat2 = createSprite(203,249,0,0);
bat2.setAnimation("bat2");
bat2.scale = 0.15;
bat2.velocityY = -1;

var bat3 = createSprite(203+107,249,0,0);
bat3.setAnimation("bat1");
bat3.scale = 0.15;
bat3.velocityY = 1;

var lives = 5;


function draw() {
  
  background("TEAL");
  
  createEdgeSprites();
 kid.bounceOff(edges);
 kid.bounceOff(block1);
  kid.bounceOff(block2);
 kid.bounceOff(block3);
 kid.bounceOff(block4);
  kid.bounceOff(block5);
   kid.bounceOff(block6);
    kid.bounceOff(block7);
  kid.bounceOff(block8);
   kid.bounceOff(block9);
    kid.bounceOff(block10);
     kid.bounceOff(block11);
      kid.bounceOff(block12);
  kid.bounceOff(block13);
  kid.bounceOff(block14);
  kid.bounceOff(block15);
  kid.bounceOff(block16);
   kid.bounceOff(block17);
   kid.bounceOff(block18);
   kid.bounceOff(block19);
   crab.bounceOff(edges);
 crab.bounceOff(block1);
  crab.bounceOff(block2);
 crab.bounceOff(block3);
 crab.bounceOff(block4);
  crab.bounceOff(block5);
   crab.bounceOff(block6);
   crab2.bounceOff(block1);
  crab2.bounceOff(block2);
 crab2.bounceOff(block3);
 crab2.bounceOff(block4);
  crab2.bounceOff(block5);
   crab2.bounceOff(block6);
   crab3.bounceOff(block1);
  crab3.bounceOff(block2);
 crab3.bounceOff(block3);
 crab3.bounceOff(block4);
  crab3.bounceOff(block5);
   crab3.bounceOff(block6);
   crab2.bounceOff(edges);
   crab3.bounceOff(edges);
   croco.bounceOff(edges);
   croco2.bounceOff(edges);
   croco.bounceOff(block19);
   croco2.bounceOff(block19);
   bat.bounceOff(block7);
  bat.bounceOff(block8);
   bat.bounceOff(block9);
    bat.bounceOff(block10);
    bat.bounceOff(block11);
    bat.bounceOff(block12);
  bat.bounceOff(block13);
  bat.bounceOff(block14);
  bat.bounceOff(block15);
  bat.bounceOff(block16);
  bat.bounceOff(block17);
  bat.bounceOff(block18);
    bat2.bounceOff(block7);
  bat2.bounceOff(block8);
   bat2.bounceOff(block9);
    bat2.bounceOff(block10);
    bat2.bounceOff(block11);
    bat2.bounceOff(block12);
  bat2.bounceOff(block13);
  bat2.bounceOff(block14);
  bat2.bounceOff(block15);
  bat2.bounceOff(block16);
  bat2.bounceOff(block17);
  bat2.bounceOff(block18);
  bat3.bounceOff(block7);
  bat3.bounceOff(block8);
   bat3.bounceOff(block9);
    bat3.bounceOff(block10);
    bat3.bounceOff(block11);
    bat3.bounceOff(block12);
  bat3.bounceOff(block13);
  bat3.bounceOff(block14);
  bat3.bounceOff(block15);
  bat3.bounceOff(block16);
  bat3.bounceOff(block17);
  bat3.bounceOff(block18);
  
   
   
   kid.velocityX = "0";
   kid.velocityY = "0";
   
  
      if (keyDown("LEFT_ARROW")) {
      kid.velocityX = -5;
      kid.velocityY = 0;
      kid.setAnimation("kid");
    }
    
     if (keyDown("RIGHT_ARROW")) {
      kid.velocityX = 5;
      kid.velocityY = 0;
      kid.setAnimation("kid");
    }
    
    if (keyDown("DOWN_ARROW")) {
      kid.velocityX = 0;
      kid.velocityY = 5;
      
      kid.setAnimation("kid");
    }
  
    if (keyDown("UP_ARROW")) {
      kid.velocityX = 0;
      kid.velocityY = -5;
      
      kid.setAnimation("kid");
    }
    
    if (kid.isTouching(gem)|| kid.isTouching(diamond)|| kid.isTouching(ruby)) {
      
     kid.setVelocity(0,0);
     fill("yellow");
     textSize(14);
     text("U WON!! PRESS SPACE BAR IF U WANT TO WIN AGAIN",10,130);
      
    }
    
 if (kid.isTouching(crab)|| kid.isTouching(crab2)||kid.isTouching(crab3)||kid.isTouching(croco)|| kid.isTouching(croco2)|| kid.isTouching(bat)||kid.isTouching(bat2)||kid.isTouching(bat3)) {
   playSpeech("OOPS!!", "female", "English");
   serve();
  lives = lives-1;
 }
    
fill("white");
textSize(20);
text(lives,80,22.5);

fill("orange");
textSize(20);
text("Lives : ",10,22);
       
   
if(lives === 0){
text("GAME OVER PRESS SPACE TO RESTART",5,136);
     serve();
}


if (keyDown("space")) {
  serve();
  reset();
}


  
  
  drawSprites();
  
}

function serve (){
  kid.x = 20;
  kid.y = 75;
}

function reset (){
  lives = 5;
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
