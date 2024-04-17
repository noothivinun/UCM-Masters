/*Allahbakshu_Shaik JAVA SCRIPT*/

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
			
			context.fillText ("Rowmank Nouman", 0, 0);
			context.font = "bold 30px sans-serif";
			context.textAlign = "center";
			
			context.lineWidth = 2;
			context.strokeStyle = "navy";
			context.strokeText("Shaik Allah", 115, 50);
}