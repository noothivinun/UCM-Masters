/* Vinun_Noothi 2022.10.22, Lab09 */
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...");
    loadXML();
}

var studentXML="<Student>" + "<name>Noothi Vinun </name>" +
"<destignation>Student</destignation>" + "<cost>50000</cost>" + "</Student>"

function loadXML() {
    console.log("loadXML starting...");
    var xmlParser = new DOMParser();
    var myStudentXML = xmlParser.parseFromString(studentXML,"text/xml");
    var name = myStudentXML.getElementsByTagName("name").item(0).firstChild.nodeValue;
}