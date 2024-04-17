
/* Noothi Vinun, 2022.11.12, Lab12*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...");
}

const luckyNumbers = [56, 65, 68, 58, 89, 52, 12];

$(

    function(){
        
        console.log("jQuery block starting...." );
        var output = "<p>"
        output += "Data output :<br>";
        
        const numIncludes = luckyNumbers.includes(11);
        console.log("numIncludes=" + numIncludes );
       

        output += "</p>"
      
        $("#details").html(output);
    }
);