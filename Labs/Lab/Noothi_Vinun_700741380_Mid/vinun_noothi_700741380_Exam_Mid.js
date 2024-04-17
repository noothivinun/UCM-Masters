/*Vinun_Noothi JAVA SCRIPT*/



var idcount = 0;
var nodeid = 0;
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...");
    document.getElementById("addButton").addEventListener("click", addNumber, false);
}

function addNumber(){
     console.log("AddFavorite starting...");
     var currentNode = document.getElementById("date");
     var callnum = document.getElementById("call").value;

     var newNode = createNewNode(callnum);
     currentNode.parentNode.insertBefore(newNode, currentNode);
}

function createNewNode(callnum){
    console.log("createNewNode starting...");
    var newNode = document.createElement("p");
    nodeid = "new" + idcount;
    idcount++;
    newNode.setAttribute("id", nodeid);
    newNode.appendChild(document.createTextNode(callnum));
    return newNode;
}