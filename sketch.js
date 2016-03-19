// ------ agents ------
var agents = [];
var agentsCount = 4000;
var noiseScale = 300;
var noiseStrength = 10; 
var overlayAlpha = 10;
var agentsAlpha = 90;
var strokeWidth = 0.3;
var drawMode = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  smooth();
  
  drawMode = ceil(random(0,3));
  
  for(var i=0; i<agentsCount; i++) {
    agents[i] = new Agent.Core();
  }
  
}

function draw() {
  fill(255, overlayAlpha);
  noStroke();
  rect(0,0,width,height);
  stroke(0, agentsAlpha);
  
  var i;
  
  //draw agents
  if (drawMode == 1) {
    for(i=0; i<agentsCount; i++){
      agents[i].update1();  
    } 
  } else if(drawMode == 2) {
    for(i=0; i<agentsCount; i++){
      agents[i].update2();
    } 
  } else{
    for(i=0; i<agentsCount; i++){
      agents[i].update3();
    } 
  }
  
  if (frameCount % 250 === 0){
    var newNoiseSeed = ceil(random(100000));
    noiseSeed(newNoiseSeed);
  }
  
  if (frameCount % 1500 === 0){
    drawMode = ceil(random(0,3));
  } else if (frameCount % 1000 === 0){
    drawMode = ceil(random(0,3));
  } else if (frameCount % 500 === 0){
    drawMode = ceil(random(0,3));
  }
  
}

function keyReleased() {
  if (keyCode === 49) {
    drawMode = 1;
  }
  
  if (keyCode === 50) {
    drawMode = 2;
  }
  
  if (keyCode === 51) {
    drawMode = 3;
  }
  
  if (keyCode === 32) {
    var newNoiseSeed = ceil(random(100000));
    noiseSeed(newNoiseSeed);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

