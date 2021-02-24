var canvas;
var music;
var box,block1,block2,block3,block4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    block1 = createSprite(20,590,200,35);
    block1.shapeColor = "green";
    
    block2 = createSprite(230,590,200,35);
    block2.shapeColor = "red";

    block3 = createSprite(430,590,200,35);
    block3.shapeColor = "yellow";

    block4 = createSprite(630,590,200,35);
    block4.shapeColor = "pink";

    block1.setCollider("circle",0,0,10);
    block2.setCollider("circle",0,0,10);
    block3.setCollider("circle",0,0,10);
    block4.setCollider("circle",0,0,10);
    


    //create box sprite and give velocity

    box = createSprite(random(20,750),70,70);
    box.velocityY = 4;
    box.shapeColor = "white";
   

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    box.bounceOff(block1);
    box.bounceOff(block2);
    box.bounceOff(block3);
    box.bounceOff(block4);
        
    

    //add condition to check if box touching surface and make it box

    if(box.x-block1.x < block1.width/2 + box.width/2
        && block1.x - box.x < block1.width/2 + box.width/2 
        && box.y - block1.y < block1.height/2 + box.height/2
        && block1.y - box.y < block1.height/2 + box.height/2){
            box.shapeColor = "blue";
            block1.shapeColor = "blue";
        }else{
            block1.shapeColor = "green";
            box.shapeColor = "white";
        }
    
        if(box.x-block2.x < block2.width/2 + box.width/2
            && block2.x - box.x < block2.width/2 + box.width/2 
            && box.y - block2.y < block2.height/2 + box.height/2
            && block2.y - box.y < block2.height/2 + box.height/2){
                box.shapeColor = "purple";
                block2.shapeColor = "purple";
            }else{
                block2.shapeColor = "red";
                box.shapeColor = "white";
            }

            if(box.x-block3.x < block3.width/2 + box.width/2
                && block3.x - box.x < block3.width/2 + box.width/2
                && box.y - block3.y < block3.height/2 + box.height/2
                && block3.y - box.y < block3.height/2 + box.height/2 ){
                    box.shapeColor = "indigo";
                    block3.shapeColor = "indigo";
                }else{
                    block3.shapeColor = "yellow";
                    box.shapeColor = "white";
                }

                if(box.x-block4.x < block4.width/2 + box.width/2
                    && block4.x - box.x < block4.width/2 + box.width/2 
                    && box.y - block4.y < block4.height/2 + box.height/2
                    && block4.y - box.y < block4.height/2 + box.height/2){
                        box.shapeColor = "violet";
                        block4.shapeColor = "violet";
                    }else{
                        block4.shapeColor = "pink";
                        box.shapeColor = "white"
                    }

 // adding sound 

 if(box.isTouching(block1)||box.isTouching(block2)||box.isTouching(block3)||box.isTouching(block4)){
     music.play();
 }
 

 // moving the box left or right 

 if(keyDown("LEFT_ARROW")){
     box.velocityX = -3;
     box.velocityY = 0;
 }

 if(keyDown("RIGHT_ARROW")){
     box.velocityX = 3;
     box.velocityY = 0;
 }

 if(keyDown("DOWN_ARROW")){
     box.velocityX = 0;
     box.velocityY = 3;
 }


    drawSprites();
}
