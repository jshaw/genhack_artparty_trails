var global = this;
var Agent = (global.Agent || (global.Agent = { }));

var Core = Agent.Core = function (options) {
  
  this.stepSize = random(1,5);
  this.angle = 0;
  this.side = false;
  
  this.p = new p5.Vector(random(width),random(height));
  this.pOld = new p5.Vector(this.p.x, this.p.y);
  
};

Core.prototype.update1 = function(){
  
  this.stepSize = random(1,5);
  
  this.pOld = new p5.Vector(this.p.x, this.p.y);
  this.angle = noise(this.p.x / noiseScale, this.p.y / noiseScale) * noiseStrength;

  this.p.x += cos(this.angle) * this.stepSize;
  this.p.y += sin(this.angle) * this.stepSize;

  if(this.p.x < -10){
    this.isOutside = true;  
  } else if(this.p.x > width+10) {
    this.isOutside = true; 
  } else if(this.p.y < -10){
    this.isOutside = true;
  } else if(this.p.y > height+10) {
    this.isOutside = true; 
  }

  if (this.isOutside) {
    this.p.x = random(width);
    this.p.y = random(height);
    this.pOld.set(this.p);
  }

  strokeWeight(strokeWidth * this.stepSize);
  line(this.pOld.x, this.pOld.y, this.p.x, this.p.y);

  this.pOld.set(this.p);

  this.isOutside = false;
}

Core.prototype.update2 = function(){
  
  this.stepSize = random(1,5);
  this.pOld = new p5.Vector(this.p.x, this.p.y);
  
  this.angle = noise(this.p.x / noiseScale, this.p.y / noiseScale) * 24;
  this.angle = (this.angle - ceil(this.angle)) * noiseStrength;

  this.p.x += cos(this.angle) * this.stepSize;
  this.p.y += sin(this.angle) * this.stepSize;

  if(this.p.x < -10){
    this.isOutside = true;  
  } else if(this.p.x > width+10) {
    this.isOutside = true; 
  } else if(this.p.y < -10){
    this.isOutside = true;
  } else if(this.p.y > height+10) {
    this.isOutside = true; 
  }

  if (this.isOutside) {
    this.p.x = random(width);
    this.p.y = random(height);
    this.pOld.set(this.p);
  }

  strokeWeight(strokeWidth * this.stepSize);
  line(this.pOld.x, this.pOld.y, this.p.x, this.p.y);

  this.pOld.set(this.p);

  this.isOutside = false;
}

Core.prototype.update3 = function(){
  
  this.stepSize = random(1,5);
  this.pOld = new p5.Vector(this.p.x, this.p.y);
  
  this.angle = noise(this.p.x / noiseScale, this.p.y / noiseScale) * random(20, 60);
  this.angle = (this.angle - ceil(this.angle)) * noiseStrength + random(0, 20);

  this.p.x += (cos(this.angle) - tan(this.angle) *2) * this.stepSize;
  this.p.y += (sin(this.angle) + cos(this.angle)) * this.stepSize;

  if(this.p.x < -10){
    this.isOutside = true;  
  } else if(this.p.x > width+10) {
    this.isOutside = true; 
  } else if(this.p.y < -10){
    this.isOutside = true;
  } else if(this.p.y > height+10) {
    this.isOutside = true; 
  }

  if (this.isOutside) {
    this.p.x = random(width);
    this.p.y = random(height);
    this.pOld.set(this.p);
  }

  strokeWeight(strokeWidth * this.stepSize);
  line(this.pOld.x, this.pOld.y, this.p.x, this.p.y);

  this.pOld.set(this.p);

  this.isOutside = false;
}
