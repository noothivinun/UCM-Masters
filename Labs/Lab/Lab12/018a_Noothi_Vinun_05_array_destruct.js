
/* Noothi Vinun, 2022.11.12, Lab12*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...");
}

const food = ['Biryani', 'Pulav', 'Kurma', 'Samosa', 'Pizza', 'GulabJamun'];
const luckyNumbers = [56, 65, 68, 58, 89, 52, 12];

$(

    function(){
        
        console.log("jQuery block starting...." );
        var output = "<p>"
        output += "Data output :<br>";
        
        const food1 = food[0]
        console.log("food1=" + food1 );
        const food2 = food[1]
        console.log("food2=" + food2 );
        
        const [a, b] = food;
        console.log("a=" + a );
        console.log("b=" + b );

        output += "</p>"
      
        $("#details").html(output);
    }
);