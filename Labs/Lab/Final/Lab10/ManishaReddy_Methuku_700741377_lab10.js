
/* Manisha Reddy Methuku, 2022.10.29, Lab10 */

window.addEventListener("load",start,false);

function start() {
    console.log("event started")
    registerListeners();
}

var asyncRequest; 
 function registerListeners()
{
var myimage;
    myimage = document.getElementById( "Mani1" );
    myimage.addEventListener( "mouseover", function() { getContent( "Manisha1.html" ); }, false ); 
    myimage.addEventListener( "mouseout", clearContent, false ); 
    myimage = document.getElementById( "Mani2" );
    myimage.addEventListener( "mouseover", function() { getContent( "Manisha2.html" ); }, false ); 
    myimage.addEventListener( "mouseout", clearContent, false ); 
    myimage = document.getElementById( "Mani3" );
    myimage.addEventListener( "mouseover", function() { getContent( "Manisha3.html" ); }, false ); 
    myimage.addEventListener( "mouseout", clearContent, false ); 
 
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

