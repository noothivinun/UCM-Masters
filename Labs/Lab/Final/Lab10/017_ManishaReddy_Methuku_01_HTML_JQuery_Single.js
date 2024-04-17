
/* Manisha Reddy Methuku, 2022.10.29, Lab10 */
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
}

var url = "hatshepsut.html";

$(
    function() {
        $("#hatshepsut").click(
            function(event) {
                $("#content").load(url);
            }
        );
    }
);

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
} */