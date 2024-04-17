
/*Manisha Reddy Methuku, 2022.10.29, Lab10*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
    registerListeners();
}
var asyncRequest;

function registerListeners(){

    var img;
        img = document.getElementById( "one" );
        img.addEventListener( "mouseover",function(){ getContent( "Manisha1.html" ); }, false );
        img.addEventListener( "mouseout", clearContent, false );
 
        img = document.getElementById( "two" );
        img.addEventListener( "mouseover", function() { getContent( "Manisha2.html" ); }, false );
        img.addEventListener( "mouseout", clearContent, false );
 
        img = document.getElementById( "three" );
        img.addEventListener( "mouseover",function() { getContent( "Manisha3.html" ); }, false );
        img.addEventListener( "mouseout", clearContent, false );
 
 }

function getContent(url){
    $(
        function() {
            $("#contentArea").load(url);
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

/* var asyncRequest;

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

} */