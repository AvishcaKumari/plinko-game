
const Engine =  Matter.Engine;
const World =  Matter.World;
const Bodies =  Matter.Bodies;
const Body =  Matter.Body;

var divisions = [];
var divisionsHeight = 300;
var particles = [];
var plinko = [];
function preload()
{

}

 

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world

  //create the Bodies Here.
  ground = new Ground(400, 690, 800, 20);


  for (var i = 0; i<=width; i = i+80) {
      divisions.push(new Division(i, height-divisionsHeight/2, 10, divisionsHeight));
  }

  for (var j = 75; j<=width; j = j+50) {
    plinko.push(new Plinko(j, 75));
}
for (var j = 50; j<=width-10; j = j+50) {
  plinko.push(new Plinko(j, 175));
}
for (var j = 75; j<=width; j = j+50) {
  plinko.push(new Plinko(j, 275));
}
for (var j = 50; j<=width-10; j = j+50) {
  plinko.push(new Plinko(j,375));
}


// for ()

Engine.run(engine);

}


function draw() {
  rectMode(CENTER); 
  background(255,255,255);  
  
  drawSprites();
   


 for (var n = 0; n<divitions.length; n++) {
   divitions[n].display();
 }

 if (frameCount %60 === 0) {
   particles.push(new particle(random(width/2-30, width/2+30), 10, 10));
 }

 for (var h = 0; h<plinkos.length; h++) {
   plinkos[h].display();
 }

 for (var j = 0; j<plinkos.length; j++) {
  plinkos[j].display();
}


ground.display();


}