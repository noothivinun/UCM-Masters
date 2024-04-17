/*Vinun_Noothi JAVA SCRIPT*/


window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
}



$(
    function start() {
        console.log("inside the main anonymous function");

        $("div").click (
            function() {
                $(this).hide();
            }
        );
    }
);


