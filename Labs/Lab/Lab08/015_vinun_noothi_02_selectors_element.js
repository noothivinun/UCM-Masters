/*Vinun_Noothi JAVA SCRIPT*/




window.addEventListener( "load", start, false );

 function start(){
    console.log("event starting...")
} 

$ (
function start(){
    console.log("event starting...");
}
);

$ (
    function(){
        console.log("inside the main anonymous function");
        $("p").css("background-color","yellow");
        $("#author").css("background-color","pink");
        $(".class").css("background-color","blue");
    }
    );