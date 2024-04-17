/*Allahbakshu_Shaik JAVA SCRIPT*/
window.addEventListener("load",start,false);

function start() {
    console.log ("event starting....");
    
}

var image1 = new Image();
image1.src="B.jpg";
var image2 = new Image();
image2.src="A.jpg";

document.addEventListener("mouseover" , moveMouseOver , false);
document.addEventListener("mouseout" , moveMouseOut,false);

function moveMouseOver(e) {
    if(e.target.getAttribute("id")== "heading" ) {
        e.target.setAttribute("src" , image2.getAttribute("src") );
    }
}

function moveMouseOut(e) {
    if(e.target.getAttribute("id")== "heading" ) {
        e.target.setAttribute("src" , image1.getAttribute("src") );
    }
}