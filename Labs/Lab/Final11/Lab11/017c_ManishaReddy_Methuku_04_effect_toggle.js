
/* Manisha Reddy Methuku, 2022.11.05, Lab11*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
}

$(
   function(){
    $("#toggleButton").click(
        function(event){
        console.log("Toggle Button click");
        $("#results").toggle(1000);
        $("#paramita").toggle(2000);
        
        }
    );
   

   }
);