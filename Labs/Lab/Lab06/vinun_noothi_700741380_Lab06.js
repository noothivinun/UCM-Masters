/*Vinun_Noothi JAVA SCRIPT*/


image1 = new Image();
image1.src = "vinun3.jpg";

image2 = new Image();
image2.src = "vinun4.jpg";

window.addEventListener("load", start, false);

function start() {
    console.log("event starting..")
}



function mouseOver(e) {

    if (e.target.getAttribute("id") == "heading") {
        e.target.setAttribute("src", image2.getAttribute("src"));
    }

}

function mouseOut(e) {

    if (e.target.getAttribute("id") == "heading") {
        e.target.setAttribute("src", image1.getAttribute("src"));
    }

}

document.addEventListener("mouseover", mouseOver, false);
document.addEventListener("mouseout", mouseOut, false);