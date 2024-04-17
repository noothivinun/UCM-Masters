
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

        output += "add(10, 20)=" + add(10, 20) + "<br>";
        output += "add2(10, 20)=" + add2(10, 20) + "<br>";

        output += "isNumberObject(10)=" + isNumberObject(new Number(10)) + "<br>";
        output += "isNumberObject2(10)=" + isNumberObject2(10) + "<br>";

        output += "generateRandomNumber()=" + generateRandomNumber() + "<br>";
        output += "generateRandomNumber2()=" + generateRandomNumber2() + "<br>";


        $("#details").html(output);
    }
);