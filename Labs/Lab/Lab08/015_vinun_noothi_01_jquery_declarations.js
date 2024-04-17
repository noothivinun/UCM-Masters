/*Vinun_Noothi JAVA SCRIPT*/

window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
}

jQuery (document).ready (
    function() {
        console.log("jquery 1");
    }
);

$ (document).ready (
    function() {
        console.log("jquery 2");
    }
);

$ (
    function() {
        console.log("jquery 3");
    }
);

$(init);

function init() {
    console.log("jquery 4");
}