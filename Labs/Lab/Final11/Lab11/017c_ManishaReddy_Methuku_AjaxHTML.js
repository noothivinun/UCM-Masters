
/*Manisha Reddy Methuku, 2022.11.05, Lab11*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
    registerListeners();
}

function registerListeners(){

    var img;
        img = document.getElementById( "Mani1" );
        img.addEventListener( "mouseover",function(){ getContent( "Manisha1.html" ); }, false );
        img.addEventListener( "mouseout", clearContent, false );
 
        img = document.getElementById( "Mani2" );
        img.addEventListener( "mouseover", function() { getContent( "Manisha2.html" ); }, false );
        img.addEventListener( "mouseout", clearContent, false );
 
        img = document.getElementById( "Mani3" );
        img.addEventListener( "mouseover",function() { getContent( "Manisha3.html" ); }, false );
        img.addEventListener( "mouseout", clearContent, false );
 
 }

var asyncRequest;

function getContent( url ) {
    try{
        asyncRequest = new XMLHttpRequest();
        asyncRequest.addEventListener("readystatechange", stateChange, false);
        asyncRequest.open("GET", url, true);
        asyncRequest.send(null);
    }
    catch(exception) {
      alert("error" + exception);
    }
    console.log ("getContent starting...");
}

function stateChange() {
    if(asyncRequest.readyState == 4 && asyncRequest.status == 200) {
       document.getElementById("contentArea").innerHTML =asyncRequest.responseText;
    }
}

function clearContent(){
    document.getElementById( 'contentArea' ).innerHTML = '';
} 


 