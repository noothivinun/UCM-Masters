
/* Noothi Vinun, 2022.11.12, Lab12*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...");
}

function calculate(n1, n2){
    return [n1+n2, n1*n2]
}

function calculate2(n1, n2){
    return [n1+n2, n1*n2, n1/n2]
}

$(

    function(){
        
        console.log("jQuery block starting...." );
        var output = "<p>"
        output += "Data output :<br>";
      
        const data1 =  calculate(2, 3);
        console.log("data1=" + data1 );

        const [add, multiply] =  calculate(2, 3);
        console.log("add=" + add );
        console.log("multiply=" + multiply );

        const [a, m, d='N/A'] =  calculate2(2, 3);
        console.log("a=" + a );
        console.log("m=" + m );
        console.log("d=" + d );

        output += "</p>"
      
        $("#details").html(output);
    }
);