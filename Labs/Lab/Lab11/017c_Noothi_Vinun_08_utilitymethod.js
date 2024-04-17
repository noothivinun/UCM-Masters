
/* Noothi Vinun, 2022.11.05, Lab11*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...");
}

$(
   function(){
    console.log("jQuery log starting...");
    
    var output = "<p>"

    var myData = "         Let there be an end to all conflicts(The Veda)        ";
    myData = $.trim(myData);
    output += myData + "<br>";

    output += $.now() + "<br>";

    output += "</p>";
    $("#results").html(output);
    
   }
);