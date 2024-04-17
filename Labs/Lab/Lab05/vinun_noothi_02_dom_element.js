/*Vinun_Noothi JAVA SCRIPT*/

var idcount = 0;
var nodeid = 0;
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...");
    document.getElementById("addButton").addEventListener("click", addFavorite, false);
}

function addFavorite(){
     console.log("AddFavorite starting...");
     var currentNode = document.getElementById("histfav");
     var newFav = document.getElementById("fav").value;

     //create a new node
     var newNode = createNewNode(newFav);
     currentNode.parentNode.insertBefore(newNode, currentNode);
}

function createNewNode(newFav){
    console.log("createNewNode starting...");
    var newNode = document.createElement("li");
    nodeid = "new" + idcount;
    idcount++;
    newNode.setAttribute("id", nodeid);
    newNode.appendChild(document.createTextNode(newFav));
    return newNode;
}