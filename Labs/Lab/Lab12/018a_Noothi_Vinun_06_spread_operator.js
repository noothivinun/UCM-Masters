
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
        
       const [b, , k, ...misti] = food
       console.log("misti=" + misti );

       const foodAndLuckyNums = [...food,...luckyNumbers]
       console.log("foodAndLuckyNums=" + foodAndLuckyNums );

        output += "</p>"
      
        $("#details").html(output);
    }
);