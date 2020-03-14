
var inc = 0.02; //velocity
var density = 8; //pixel size
var znoise = 0.00009; // 


function setup() {
    createCanvas(500, 500);
    //noStroke();   
}
  
function draw() {
    
    var xnoise = 0.0;
    var ynoise = 0.0;

      for(var y = 0; y < height; y += density ){
        for(var x = 0; x < height; x += density ){
            var n = noise( xnoise, ynoise, znoise) * 255;
            fill(n, 0, 255);
            rect(x, y, density, density);
            xnoise += inc;
        }
        xnoise = 0;
        ynoise += inc;
    }
    znoise += inc;
}

  	
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}