/*Vinun_Noothi JAVA SCRIPT*/


 var seconds = 0;

window.addEventListener("load", start, false);

function start() {
    console.log("event starting......");
    window.setInterval("updateTime()", 1000);

}

function updateTime() {
    console.log("updateTime starting......");
    ++seconds;
    document.getElementById("soFar").innerHTML = seconds;
}