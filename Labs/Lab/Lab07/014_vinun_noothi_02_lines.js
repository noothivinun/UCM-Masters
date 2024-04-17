/*Vinun_Noothi JAVA SCRIPT*/
window.addEventListener("load",start,false);

function start() {
    console.log ("event starting......")
}


var canvas = document.getElementById("drawLines");
var context = canvas.getContext("2d");

context.beginPath();
context.moveTo(10,10);

context.lineTo(390,10);
context.lineTo(390,30);
context.lineTo(10,30);

context.lineWidth = 6;

context.lineJoin = "bevel";

context.lineCap = "butt";

context.strokeStyle = "red";

context.stroke();