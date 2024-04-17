
/*  Noothi Vinun, 2022.11.05, Lab12*/

window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
}

import Vacation, {getPlace, getCost, getDate, getComments} from './Vacation.js'

$(

    function(){
       
        var output = "<p>"
        var out1 = "<p>"
        var out2 = "<p>"
        var out3 = "<p>"
                            
        const vacay = new Vacation("Mumbai", 10000, "12/11/2022", "Dream City" )
        output +=  vacay.place;
        $("#results").html(output);

        out1 +=  vacay.cost
        $("#noothi1").html(out1);

        out2 +=  vacay.date
        $("#noothi2").html(out2);

        out3 +=  vacay.comments
        $("#noothi3").html(out3);

        console.log("Vacation1" );
    
    }
);

$(

    function(){
        
        var output1 = "<p>"
        var first1 = "<p>"
        var first2 = "<p>"
        var first3 = "<p>"

        const vacay2 = new Vacation("GOA", 1500, "02/14/2019", "Beach and Wine" )
        output1 +=  vacay2.place 
        $("#results2").html(output1);
 
        first1 +=  vacay2.cost
        $("#vinun1").html(first1);

        first2 +=  vacay2.date
        $("#vinun2").html(first2);

        first3 +=  vacay2.comments
        $("#vinun3").html(first3);

        console.log("Vacation2" );

     
    }
);

$(

    function(){
       
        var output2 = "<p>"
        var second1 = "<p>"
        var second2 = "<p>"
        var second3 = "<p>"
       
        const vacay3 = new Vacation("Bengaluru", 2000, "02/14/2018", "Green City" )
        output2 +=  vacay3.place;
        $("#results3").html(output2);  
        
        second1 +=  vacay3.cost;
        $("#vin1").html(second1);
        
        second2 +=  vacay3.date;
        $("#vin2").html(second2);

        second3 +=  vacay3.comments;
        $("#vin3").html(second3);  
        
        console.log("Vacation3" );
     
    }
);
