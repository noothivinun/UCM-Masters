
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

        var vinun = new Student("Noothi Vinun");
        var name = moumita.getName();
        var vinuntype = vinun instanceof Student;
        output += "name=" + name + "<br>";
        output += "vinuntype student? " + vinuntype + "<br>";

        let mumin = new Teacher("Mumin Shah");
        let teacherName = mumin.getName();
        output += "teacherName=" + teacherName + "<br>";


        $("#details").html(output);
    }
);