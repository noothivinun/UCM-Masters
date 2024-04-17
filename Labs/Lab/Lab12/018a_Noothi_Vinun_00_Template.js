
/* Noothi Vinun, 2022.11.12, Lab12*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
}

$(

    function(){
        var output = "<p>";
        var timeInMiliseconds = $.now();
        var date = new Date(timeInMiliseconds);
        output += date + "<br>";
        $("#details").html(output);
    }
);