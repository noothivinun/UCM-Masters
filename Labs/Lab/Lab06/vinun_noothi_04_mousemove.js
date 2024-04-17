/*Vinun_Noothi JAVA SCRIPT*/
window.addEventListener("load", start, false);

function start() {
    console.log("event starting......");
    document.getElementById("myCanvas").addEventListener("mousemove", processMouseMove, false);
}

function processMouseMove(e) {
    console.log("processMouseMove starting......");
    var x = e.clientX;
    var y = e.clientY;
    var coord = x + "," + y;
    document.getElementById("coordinates").innerHTML = coord;

    if (e.ctrlKey) {
        document.getElementById("myCanvas").style.backgroundColor = "red";
    }

    if (e.shiftKey) {
        document.getElementById("myCanvas").style.backgroundColor = "blue";
    }

}