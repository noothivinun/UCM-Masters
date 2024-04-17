
/* Noothi Vinun, 2022.10.29, Lab10 */

window.addEventListener("load",start,false);

function start() {
    console.log("event started")
    registerListeners();
}

var asyncRequest; 
 function registerListeners()
{
var vinimage;
    vinimage = document.getElementById( "vin1" );
    vinimage.addEventListener( "mouseover", function() { getContent( "Vinun_Noothi1.html" ); }, false ); 
    vinimage.addEventListener( "mouseout", clearContent, false ); 
    vinimage = document.getElementById( "vin2" );
    vinimage.addEventListener( "mouseover", function() { getContent( "Vinun_Noothi2.html" ); }, false ); 
    vinimage.addEventListener( "mouseout", clearContent, false ); 
    vinimage = document.getElementById( "vin3" );
    vinimage.addEventListener( "mouseover", function() { getContent( "Vinun_Noothi3.html" ); }, false ); 
    vinimage.addEventListener( "mouseout", clearContent, false ); 
 
} 

function getContent(url){
    $(
        function() {
            $("#resultArea").load(url);
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

