// Shaik Allahbakshu 15b Jquery Declaration
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
}



$(
    function start() {
        console.log("inside the main anonymous function");

        $("div").click (
            function() {
                
				$(this).css("background-color", "yellow")();
            }
        );
    }
);