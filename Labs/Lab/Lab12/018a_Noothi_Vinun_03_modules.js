
/* Noothi Vinun, 2022.11.12, Lab12*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
}

import Student from './Student.js'
import S from './Student2.js'
import S2, {printStudent, printID} from './Student2.js'
import S3, {printStudent as printName, printID as printIdentity} from './Student2.js'

$(

    function(){
        var output = "<p>";
        var timeInMiliseconds = $.now();
        
        var date = new Date(timeInMiliseconds);
        output += date + "<br>";
      
        const student = new Student("Noothi Vinun", 700741380)
        output += "student.name = " + student.name + "<br>";

        /* const Student = new S("Noothi", 700741380)
        output += "student.name=" + student.name + "<br>";
 */
        const Student3= new S3("Noothi Vinun", 700741380)
        output += "S3.name=" + printName(S3) + "<br>";

        $("#details").html(output);
    }
);