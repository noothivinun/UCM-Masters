
/* Manisha Reddy Methuku, 2022.10.29, Lab10*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...");
    parseXML();
}

var studentXML=
"<student>" +
"<name>Manisha Reddy </name>" +
"<cost>50000</cost>" +
"<destignation>Student</destignation>" +
"<date>Oct 22 2022</date>" +
"</student>"
;

function parseXML() {
     var xmlDoc = $.parseXML (studentXML);
     console.log(xmlDoc);   
     var myStudent = xmlDoc.getElementsByTagName("student"); 
     console.log(myStudent);
     var myStudentName = xmlDoc.getElementsByTagName("name").item(0).firstChild.nodeValue;
     console.log(myStudentName);

     var xml = studentXML, xmlDoc = $.parseXML (xml), $xml = $(xmlDoc), $studentName = $xml.find("name");
     console.log("studentName=" + $studentName.text());
     $("#details").text(xml);
    }