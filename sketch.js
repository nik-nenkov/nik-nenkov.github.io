var s;
var scl = 16;
var food;

function setup() {
	frameRate(8);
	createCanvas(400, 400);
	s = new Snake();
	pickLocation();
}

function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)),floor(random(rows)));
	food.mult(scl);
}

function draw() {
	background(105,105,105);
	s.death();
	s.update();
	s.show();
	fill(255,145,90);
	rect(food.x,food.y,scl,scl);
	if(s.eat(food)){
		pickLocation();
	}
}

function keyPressed(){
	if (keyCode === UP_ARROW||keyCode === 87){
		s.dir(0,-1);
	}else if(keyCode === DOWN_ARROW||keyCode === 83){
		s.dir(0, 1);
	}else if(keyCode === RIGHT_ARROW||keyCode === 68){
		s.dir(1, 0);
	}else if(keyCode === LEFT_ARROW||keyCode === 65){
		s.dir(-1,0);
	}
	if (mouseIsPressed) {
	    if (mouseButton === LEFT) {
	      s.total++;
	  }
    }
}

// function touchMoved(){
// 	var optX=mouseX/200;
// 	var optY=mouseY/200;
// 	if (optX<1&&optY<1){
// 		s.dir(0,-1);
// 	}else if(optX>=1&&optY<1){
// 		s.dir(0, 1);
// 	}else if(optX<1&&optY>=1){
// 		s.dir(1, 0);
// 	}else if(optX>=1&&optY>=1){
// 		s.dir(-1,0);
// 	}
// 	if (mouseIsPressed) {
// 		if (mouseButton === LEFT) {
// 			s.total++;
// 		}
// 	}
// }

function Snake(){

	this.x=0;
	this.y=0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.tail 	= [];
	this.total 	= 0;

	this.dir = function(x,y){
		this.xspeed=x;
		this.yspeed=y;
	}

	this.eat = function(pos){
		var d = dist(this.x,this.y,pos.x,pos.y);
		if(d<scl){this.total++;return true;}else{return false;}
	}

	this.death = function(){
		for(var i =0; i<this.tail.length; i++){
			var pos = this.tail[i];
			var d = dist(this.x,this.y,pos.x,pos.y);
			if (d<scl){
				this.total=0;
				this.tail=[];
				console.log('starting over');
			}
		}
	}

	this.update = function(){
		if(this.total===this.tail.length){
			for(var i =0;i<this.tail.length-1;i++){
				this.tail[i]=this.tail[i+1];
			}
		}
		
		this.tail[this.total-1]=createVector(this.x,this.y);
		
		this.x=this.x+this.xspeed*scl;
		this.y=this.y+this.yspeed*scl;
		if(this.x>width-scl){
			this.x=0;
		}
		if(this.x<0){
			this.x=width;
		}
		if(this.y>height-scl){
			this.y=0;
		}
		if(this.y<0){
			this.y=height;
		}
	}

	this.show = function(){
		fill(155,255,155);
		for(var i =0;i<this.tail.length;i++){
			rect(this.tail[i].x,this.tail[i].y,scl,scl);
		}
		rect(this.x,this.y,scl,scl);
	}
}
