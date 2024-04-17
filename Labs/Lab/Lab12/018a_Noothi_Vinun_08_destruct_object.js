
/* Noothi Vinun, 2022.11.12, Lab12*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...");
}

const studentOne = {
    name: 'Vinun',
    year: 2022, 
    //gpa: 4.5,
    enrollment: {
        subject: 'ClientSide', 
        code: 5611
    }
}

const studentTwo = {
    name: 'Setu',
    year: 2023, 
    /* // gpa: 4.0,
    enrollment: {
        subject: 'MIS', 
        code: 5615
    } */
}


$(

    function(){
        
        console.log("jQuery block starting...." );
        var output = "<p>"
        output += "Data output :<br>";

        const {name, year} = studentOne
        console.log("name=" + name );
            
        const {name:firstName, year:gradYear} = studentOne
        console.log("firstName=" + firstName );
        console.log("gradYear=" + gradYear );

        const {name:fName, year:gYear, gpa=4.0} = studentOne
        console.log("fName=" + fName );
        console.log("gpa=" + gpa );

        const {name:fN, ...details} = studentOne
        console.log("fN=" + fN + ", details=" + details);

        const {name:f1, enrollment: {subject}} = studentOne
        console.log("f1=" + fN + ", subject=" + subject);

        const studentThree = {...studentOne, ...studentTwo}
        console.log (studentThree);

        output += "</p>"
      
        $("#details").html(output);
    }
);