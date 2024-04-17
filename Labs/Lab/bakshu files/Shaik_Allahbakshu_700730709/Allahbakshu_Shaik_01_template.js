/*Allahbakshu_Shaik JAVA SCRIPT*/
var seconds=0;
window.addEventListener("load",start,false);

function start() {
    console.log ("event starting......");
    window.setInterval("updateTime()",1000);
}
function updateTime()
{
    console.log("updateTime...");
    ++seconds;
    document.getElementById("sofar").innerHTML=seconds;
}