var cx = 100; //center x
var cy = 100; //center y
var cz = -10; //center z
var s = 20; //size
var zFactorX = 1; //direction of x after xTOxy
var zFactorY = 1; //direction of y after xTOxy
var points = [ //points of example cube
	[cx-s, cy+s, cz-s],
	[cx+s, cy+s, cz-s],
	[cx-s, cy+s, cz+s],
	[cx+s, cy+s, cz+s],
	[cx-s, cy-s, cz-s],
	[cx+s, cy-s, cz-s],
	[cx-s, cy-s, cz+s],
	[cx+s, cy-s, cz+s],
];
function zTOxy(x,y,z){ //transforms z to x and y
	x += z*zFactorX;
	y += z*zFactorY;
	//console.log("x = " + x);
	return[x, y];
}
function polyBender(){
	cx = document.getElementById("inX").value/5;
	cy = document.getElementById("inY").value/5;
	cz = document.getElementById("inZ").value/5;
	s = document.getElementById("inS").value/10;
	points = [ //reset points values
	[cx-s, cy+s, cz-s],
	[cx+s, cy+s, cz-s],
	[cx-s, cy+s, cz+s],
	[cx+s, cy+s, cz+s],
	[cx-s, cy-s, cz-s],
	[cx+s, cy-s, cz-s],
	[cx-s, cy-s, cz+s],
	[cx+s, cy-s, cz+s],
];
	zFactorX = document.getElementById("inZFX").value/20;
	zFactorY = document.getElementById("inZFY").value/20;
	let poly1 = document.getElementById("poly2"); // bottom plate of cube
	poly1.setAttribute("points", 
		zTOxy(points[4][0],points[4][1],points[4][2])[0] + "," + zTOxy(points[4][0],points[4][1],points[4][2])[1] + " " +
		zTOxy(points[5][0],points[5][1],points[5][2])[0] + "," + zTOxy(points[5][0],points[5][1],points[5][2])[1] + " " +
		zTOxy(points[7][0],points[7][1],points[7][2])[0] + "," + zTOxy(points[7][0],points[7][1],points[7][2])[1] + " " +
		zTOxy(points[6][0],points[6][1],points[6][2])[0] + "," + zTOxy(points[6][0],points[6][1],points[6][2])[1]
	);
	let poly2 = document.getElementById("poly1"); // top plate of cube
	poly2.setAttribute("points", 
		zTOxy(points[0][0],points[0][1],points[0][2])[0] + "," + zTOxy(points[0][0],points[0][1],points[0][2])[1] + " " +
		zTOxy(points[1][0],points[1][1],points[1][2])[0] + "," + zTOxy(points[1][0],points[1][1],points[1][2])[1] + " " +
		zTOxy(points[3][0],points[3][1],points[3][2])[0] + "," + zTOxy(points[3][0],points[3][1],points[3][2])[1] + " " +
		zTOxy(points[2][0],points[2][1],points[2][2])[0] + "," + zTOxy(points[2][0],points[2][1],points[2][2])[1]
	);
}