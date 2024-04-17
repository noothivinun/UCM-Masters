/*Allahbakshu_Shaik JAVA SCRIPT*/
window.addEventListener( "load", start, false );

function start() {
	console.log ("event starting...");
	drawrectangle();
}

function start() {
	console.log ("draw rectangle...");
	var canvas = document.getElementById("drawrectangle");
	var context = canvas.getcontext("2d");
	context.fillstyle = "green";
	context.fillrect(5, 10, 200, 75);
	context,strokestyle = "royalblue";
	context.linewwidth = 6;

	context.strokerect(4, 9, 201, 76);
}