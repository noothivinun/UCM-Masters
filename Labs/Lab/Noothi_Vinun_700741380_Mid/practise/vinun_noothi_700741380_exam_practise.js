/*Vinun_Noothi JAVA SCRIPT*/




var iconImg;
var pictures = ["vinun1", "vinun2", "vinun3", "vinun4", "vinun5", "vinun6"];



window.addEventListener("load", start, false);

function start() {
    console.log("event starting...")
    iconImg = document.getElementById("photo");
    iconImg.addEventListener("click", pickImage, false);
}

function pickImage() {
    var index = Math.floor(Math.random() * 6);
    iconImg.setAttribute("src", pictures[index] + ".jpg");
    iconImg.setAttribute("alt", descriptions[index]);

}