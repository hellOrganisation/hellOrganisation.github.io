
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate();

}

var legLength = 100;
var increment = legLength + 50;

function draw() {

	background(0, 0, 0, 5);

	for(var y = 100; y < height - 100; y += increment )
		walkingLine(y);

	//cosDrawing()

}

var counterLeftWalking = 0;
var counterRightWalking = 0;

var walkLength = 40;
var walkDirection = 1;
var tempLeft = walkLength;
var tempRight = tempLeft + walkLength;

var leftWalk = true;
var rightWalk = false;

var goForth = true;
var limitMax = 500;
var limitMin = 50;

function noiseModifier(){

	var xoff = 0.0;
	var n = noise(xoff) * 2;
	return n;
}

function defineWalkingDirection(){


	if(counterLeftWalking >= limitMax && counterRightWalking >= limitMax && goForth ){ 
		walkDirection *= -1;
		goForth = false;
	}
	else if(counterLeftWalking < limitMin && counterRightWalking < limitMin && !goForth) {
		walkDirection *= -1;
		goForth = true;
	}
	console.log(walkDirection);
}



function walkingLine(y){


	push();

	  defineWalkingDirection();
	  strokeWeight(4);
	  stroke(255);
			
	  console.log(leftWalk);
	  console.log(rightWalk);

	  if(leftWalk == true){
			if(walkDirection > 0){
				if(counterLeftWalking > tempLeft ){
			
					leftWalk = false;  
					rightWalk = true;
					tempLeft = counterLeftWalking + walkLength;
					tempRight = tempLeft + walkLength;
				}
			}
			else if(walkDirection < 0)
				if(counterLeftWalking < tempLeft){
			
					leftWalk = false;  
					rightWalk = true;
					tempLeft = counterLeftWalking - walkLength;
					tempRight = tempLeft - walkLength;
				}

		counterLeftWalking += walkDirection * noiseModifier();  
	  }
	  else if(rightWalk){
		
			if(walkDirection > 0){
				if(counterRightWalking > tempRight ){
			
					leftWalk = true;  
					rightWalk = false;
			
					tempRight = counterRightWalking + walkLength;
					tempLeft = tempRight + walkLength;
				}
			}
			else if(walkDirection < 0)
				if(counterRightWalking < tempRight){
			
					leftWalk = true;  
					rightWalk = false;
			
					tempRight = counterRightWalking - walkLength;
					tempLeft = tempRight - walkLength;
				}

			counterRightWalking += walkDirection * noiseModifier();
		}
	
	 // console.log(counterLeftWalking);
	 // console.log(counterRightWalking);

	  var body = ( counterLeftWalking + counterRightWalking )/2;
	
	  line(body, y, counterLeftWalking, y + legLength);
	  line(body, y, counterRightWalking,y + legLength);
	
	  push();
	  // noFill();
	  fill(255);
	  ellipseMode(CENTER);
	  rectMode(CENTER);
	 // line(0, y, body, y);
	  ellipse(counterLeftWalking, y + legLength, 50);
	  ellipse(counterRightWalking, y+ legLength, 50);
	  pop();

	  pop();
	
}
	
var angle = 0.0;

function cosDrawing(){

	fill(255);
	for(var x = 0; x <= width; x += 20){
		var y = 400 + (sin(angle) *  600);
		ellipse(x, y, 30);
		angle += 0.004; 
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}