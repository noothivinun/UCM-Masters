/*Vinun_Noothi JAVA SCRIPT*/



window.addEventListener( "load", start, false );
var image = new Image();
function start(){
    console.log("event starting...")
    myImage();
}
image.src = "Noothi_200.jpg";

            function myImage()
            {
               var canvas = document.getElementById("myimage");
               var context = canvas.getContext("2d")
               context.drawImage(image, 0, 0, 175, 175);
            }
