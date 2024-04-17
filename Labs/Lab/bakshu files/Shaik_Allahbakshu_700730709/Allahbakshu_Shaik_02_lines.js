/*Allahbakshu_Shaik JAVA SCRIPT*/
window.addEventListener( "load", start, false );

function start() {
	console.log ("event starting...");
	drawrectangle();
}

function start() {
	console.log ("draw rectangle...");
	var canvas = document.getElementById("drawrectangle");
	var context = canvas.getContext("2d")
	context.fillStyle = "yellow"
	context.fillRect(5, 10, 200, 75);
	context.strokeStyle= "royalblue";
	context.lineWidth = 6
	context.strokeRect(4, 9, 201, 76);
}