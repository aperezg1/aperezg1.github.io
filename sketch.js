function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background('white');
	textSize(32);
	fill(180);
	var h = hour()
	var m = minute()
	var s = second()
	noFill();
	strokeWeight(30);
	stroke(51);
	stroke('#B5B5B5');
	arc(400, 300, 200, 200, 0, 2*PI*(s/60));
	stroke("grey");
	arc(400, 300, 320, 320, 0, 2*PI*(m/60));
	stroke("black");
	arc(400, 300, 400, 400, 0, 2*PI*(h/24));
}