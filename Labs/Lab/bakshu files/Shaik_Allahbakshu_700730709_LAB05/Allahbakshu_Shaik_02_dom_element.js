/*Allahbakshu_Shaik JAVA SCRIPT*/
var idcount = 0;

window.addEventListener("load", start, false);

function start(){
	console.log("event starting...");
	//var myButton = document.getElementById("addButton")
	//myButton.addEventListener("click", addFavorite(), false);
	document.getElementById("addButton").addEventListener("click", addFavorite, false);
}
		

function addFavorite(){
	currentNode = document.getElementById("histfav");
	var newfav = document.getElementById("favadd").value;
	var newNode = createNewNode(newfav);
	currentNode.parentNode.insertBefore(newNode, currentNode);
}	

function createNewNode(text){
	var newNode = document.createElement("li");
	nodeId = "new" + idcount;
	++idcount;
	newNode.setAttribute("id", nodeId);
	//add text nodeId
	newNode.appendChild (document.createTextNode(text));
	return newNode;

}
function picLinks()
{
    var linksList = img.images;
    var contents = "<ul>";
    for(var i=0; i< linksList.lenght; i++)
    {
            var currentlink = linksList[i];
            contents += "<li><a href='"+currentLink.href+"'>"+currentLink.innerHTML+"</li>";
    }
    contents +="</ul>";
    document.getElementById("image").innerHTML=contents;
}
window.addEventListener( "load", processLinks, false );