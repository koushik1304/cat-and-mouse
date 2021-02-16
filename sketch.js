 var cat, catimgsleep, catimgwalk, catstandimg, catokimg;
 var  mouseimg, mouse, mousestandimg, mouseseeimg, mouseoverimg;
var garden, gardenimg;

function preload() {
    //load the images here
   catimgsleep = loadImage("cat1.png");
   catimgwalk = loadImage("cat2.png");
   catstandimg = loadImage("cat3.png");
   catokimg = loadImage("cat4.png");
   gardenimg = loadImage("garden.png");
   mousestandimg = loadImage("mouse3.png");
   mouseseeimg = loadImage("mouse4.png");
   mouseimg = loadImage("mouse1.png");
   

  

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(500,400);
    garden.addImage("garden",gardenimg);

  mouse = createSprite(200,600,50,50);
  mouse.addAnimation("mousestand",mousestandimg)
  mouse.scale = 0.13

  cat  = createSprite(850,600,10,10);
  cat.addAnimation("running", catimgsleep);
cat.scale = 0.1;
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.isTouching(mouse)) {
        cat.velocityX = 0;
        cat.addAnimation("catstand",catokimg);
        cat.changeAnimation("catstand")
        mouse.addAnimation("load",mouseseeimg,);
        mouse.changeAnimation("load")
        
      }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      
      cat.addAnimation("catRunning",catimgwalk,catstandimg);
      cat.changeAnimation("catRunning");
  }


  
 


}
