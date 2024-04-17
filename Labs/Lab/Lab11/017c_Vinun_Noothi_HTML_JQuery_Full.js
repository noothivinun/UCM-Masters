
/* Noothi Vinun , 2022.10.29, Lab10 */

window.addEventListener("load",start,false);

function start() {
    console.log("event started")
    loadingregisters();
}

var asyncRequest; 
 function loadingregisters()
{
var myimage;
    myimage = document.getElementById( "Vin1" );
    myimage.addEventListener( "mouseover", function() { getContent( "Vinun1.html" ); }, false ); 
    myimage.addEventListener( "mouseout", clearContent, false ); 
    myimage = document.getElementById( "Vin2" );
    myimage.addEventListener( "mouseover", function() { getContent( "Vinun2.html" ); }, false ); 
    myimage.addEventListener( "mouseout", clearContent, false ); 
    myimage = document.getElementById( "Vin3" );
    myimage.addEventListener( "mouseover", function() { getContent( "Vinun3.html" ); }, false ); 
    myimage.addEventListener( "mouseout", clearContent, false ); 
 
} 

function getContent(url){
    $(
        function() {
            $("#myresult").load(url);
                }
    );
}

function clearContent(){
  $(
    function(){
        
                $("#content").text("");
            }
    );
}

