/*Vinun_Noothi JAVA SCRIPT*/
window.addEventListener("load",start,false);

function start() {
    console.log ("event starting......")
    drawRectangle();
}

function drawRectangle(){
    console.log ("drawRectangle starting......");

    var canvas = document.getElementById("drawRectangle");
    var context = canvas.getContext("2d");

    context.fillStyle = "yellow";

    context.fillRect(5,10,200,75);
    context.strokeStyle = "royalblue";
    context.lineWidth = 4;
    context.strokeRect (4,9,201,76);
}