
/* Manisha Reddy Methuku, 2022.10.22, Lab09 */
window.addEventListener("load",start,false);

function start() {
    console.log("event started")
    registerListeners();
}

var asyncRequest; // variable to hold XMLHttpRequest object
 // set up event handlers
 function registerListeners()
{
var img;
 img = document.getElementById( "Mani1" );
 img.addEventListener( "mouseover", function() { getContent( "Manisha1.html" ); }, false ); 
 img.addEventListener( "mouseout", clearContent, false ); 
 img = document.getElementById( "Mani2" );
 img.addEventListener( "mouseover", function() { getContent( "Manisha2.html" ); }, false ); 
 img.addEventListener( "mouseout", clearContent, false ); 
 img = document.getElementById( "Mani3" );
 img.addEventListener( "mouseover", function() { getContent( "Manisha3.html" ); }, false ); 
 img.addEventListener( "mouseout", clearContent, false ); 
 
} // end function registerListeners

 // set up and send the asynchronous request.
 function getContent( url )
 {
 // attempt to create XMLHttpRequest object and make the request
 try
 {
    asyncRequest = new XMLHttpRequest(); // create request object

    asyncRequest = new XMLHttpRequest(); // create request object
    asyncRequest.addEventListener( "readystatechange", stateChange, false); 
    asyncRequest.open( "GET", url, true ); // prepare the request
    asyncRequest.send( null ); // send the request 
 }
 
 catch ( exception )
 {
    
alert( "Request failed." );
 } // end catch
 } // end function getContent
 
 // displays the response data on the page
 function stateChange()
 {
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200 )
 {
     document.getElementById( "resultArea" ).innerHTML = 
     asyncRequest.responseText; // places text in contentArea
 } // end if
 } 

 function clearContent()
 {
 document.getElementById( "resultArea" ).innerHTML = "";
 } 

