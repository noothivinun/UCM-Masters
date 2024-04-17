function start() {
    console.log("event starting..");
    drawRectangle();
}

function drawRectangle() {
    console.log("drawRectangle starting..");
	
    var canvas = document.getElementById("shadow");
    var context = canvas.getContext("2d")
            
			context.fillStyle = "red";
			context.font = "italic 24px serif";
			context.textBaseline = "top";
			
			context.fillText ("Rohan Sagar", 0, 0);
			context.font = "bold 30px sans-serif";
			context.textAlign = "center";
			
			context.lineWidth = 2;
			context.strokeStyle = "navy";
			context.strokeText("Vidya sagar", 115, 50);
}