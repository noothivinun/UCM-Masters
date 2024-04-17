
/* Manisha Reddy Methuku, 2022.11.05, Lab11*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
}

$(
   function(){
    $("#fadeInButton").click(
        function(event){
        console.log("fadeIn Button click");
        $("#mypic").fadeIn(1000);
                
        }
    );

    $("#fadeOutButton").click(
        function(event){
        console.log("fadeOut Button click");
        $("#mypic").fadeOut(1000);
                
        }
    );

    $("#fadetoggleButton").click(
        function(event){
        console.log("fadetoggle Button click");
        $("#mypic").fadeToggle(1000);
                
        }
    );
   

   }
);