
/* Noothi Vinun, 2022.11.05, Lab11*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
}

$(
    function(){
        $("button").click(
            function(event){
            console.log("click event....");
            
            var output = "<p>"

            $buttonParent = $(this).parent().attr("id");
            output += "The Parent of button is: " + $buttonParent + "<br>";

            $danaParent = $("#dana").parent().attr("id");
            output += "The Parent of Dana is: " + $danaParent + "<br>";

            $paramitaChilds = $("#paramita").children().text();
            output += "The Children of Paramita are: " + $paramitaChilds + "<br>";
            
            output += "</p>"
            $("#results").html(output);
            }
            );
    }
    
);