
/* Manisha Reddy Methuku, 2022.11.05, Lab11*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
}

$(
   function(){
    $("#hideButton").click(
        function(event){
        console.log("Hide Button click");
        $("#results").hide(1000);
        $("#paramita").hide(2000);
        $(this).hide(3000);
        }
    );

    
    //show button
    $("#showButton").click(
        function(event){
        console.log("Show Button click");
        $("#results").show(1000);
        $("#paramita").show(2000);
        $("#hideButton").show(3000);
        }
    );
     

   }
);