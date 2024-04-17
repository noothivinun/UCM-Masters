/*Image using Canvas*/

window.addEventListener( "load", start, false );
var image = new Image();
function start(){
    console.log("event starting...")
    myImage();
    registerListner();   //xml jquery function call
    register();  //json jquery function call
   
}

image.src = "Noothi_200.jpg";

            function myImage()
            {
               var canvas = document.getElementById("myimage");
               var context = canvas.getContext("2d")
               context.drawImage(image, 0, 0, 175, 175);
            }
 
/* loading HTML using AJAX On Click*/

var asyncRequest;

function getContent( url ) {
    try{
        asyncRequest = new XMLHttpRequest();
        asyncRequest.addEventListener("readystatechange", stateChange, false);
        asyncRequest.open("GET", url, true);
        asyncRequest.send(null);
    }
    catch(exception) {
      alert("error" + exception);
    }
    console.log ("getContent starting...");
}

function stateChange() {
    if(asyncRequest.readyState == 4 && asyncRequest.status == 200) {
       document.getElementById("contentArea").innerHTML =asyncRequest.responseText;
    }
}

/* Name & Description*/

class Vinun{
    constructor (name, description) {
        this.name=name
        this.description=description
 
    }
}

function getname(Noothi) {
 return Noothi.name
}

function getdescription(Noothi) {
    return Noothi.description
}

$(

    function(){
       
        var output = "<p>"
       
        const babji = new Vinun("I'm from India" ,"I'm currently taking my Final exam" )
        
        output +=  babji.name + "<br>" + babji.description;
        $("#results").html(output);   
        
        console.log("My Details" );
     
    }
);

/* Current Time Display*/


/* $(

    function(){
        var output = "<p>";
        var timeInMiliseconds = $.now();
        var date = new Date(timeInMiliseconds);
        output += date + "<br>";

        $("#details").html(output);
    }
) */

/*Time Refresh*/

$(
    function () {
        console.log("inside jQuery function");
        var output = "<p>";
        var timeInMilliseconds = $.now();
        var date = new Date(timeInMilliseconds);
        output += date;
        $("#refresh").html(output);

        $("div").click(function () {
            date = new Date($.now());
            output = date;
            $("#refresh").html(output);
        }
    );

}
);



//fetch xml data jQuery

function registerListner(){
    document.getElementById( "setAxml" ).addEventListener("click", function() { getImages( "setA.xml" ); }, false );
    window.addEventListener( "load", clearImg, false);

}

function getImages(url){
    console.log("getImagesJQuery event starting");
    $.ajax(
        {
            type: "GET",
            url: url,
            dataType: "xml",
            success: handleXML,
            error: handleError
        }
    );
    
    }
    function handleXML (xml) {
        console.log("Handle XML Event starting xml" + xml);
         clearImg(); 
    
            var output = document.getElementById( "fetchdata" );
            var imageParagraph = document.createElement( "p" );
            
            $(xml).find('picture').each(
                function(){
                var imageName = document.createElement("img");
                var linebreak = document.createElement("br");
                var imageSpan = document.createElement("span");
    
                var image = $(this).find( 'image' ).text();
                var title = $(this).find( 'title' ).text();
                var width = $(this).find( 'width' ).text();
                var height = $(this).find( 'height' ).text();
                console.log ("handling picture :" + image)
    
                imageName.setAttribute( "src", image );
                imageName.setAttribute( "width", width );
                imageName.setAttribute( "height", height );
    
                imageParagraph.appendChild( imageName );
                imageParagraph.appendChild( linebreak );
    
                var txt = document.createTextNode(title);
                imageSpan.appendChild(txt);
                imageParagraph.appendChild( imageSpan );
                imageParagraph.appendChild( linebreak );
    
                }
            );
    
            output.appendChild(imageParagraph);
                
            }
        
    function handleError(){
        console.log("Error handling call");
    }
    
    
    function clearImg(){
        $("#fetchdata").text("");
    }


    //end of xml fetch data jQuery

    //json getch data jQuery

    function register() {

        document.getElementById( "setAjson" ).addEventListener("click", function() { getpicture( "setA.json" ); }, false );
        window.addEventListener( "load", clear, false);
    
 }


    function getpicture(url) {
        console.log ("getpictures starting with URL =" + url);
        $(
            $.getJSON(url, loadJSONData)
        );
    }

    function loadJSONData(myJSONobj) {
       console.log ("loadJSONData starting=" + myJSONobj);
       clear();

       var output = document.getElementById("jsnfetch");
        var imageParagraph = document.createElement("p");
    
        for(var i=0; i<myJSONobj.pictures.picture.length; i++) {
            for (var i=0; i<myJSONobj.pictures.picture.length; i++) {
                console.log("loop" + i);
    
                // var image = myJSONobj.pictures.picture[i].image;
                var title = myJSONobj.pictures.picture[i].title;
                // var width = myJSONobj.pictures.picture[i].width;
                // var height = myJSONobj.pictures.picture[i].height;
                
                var imageName = document.createElement("img");
                var linebreak = document.createElement("br");
                var imageSpan = document.createElement("span");

               /*  imageName.setAttribute("src", image );
                imageName.setAttribute("width", width );
                imageName.setAttribute("height", height ); */
    
                imageParagraph.appendChild( imageName);
                imageParagraph.appendChild( linebreak);

                var txt = document.createTextNode(title);
                imageSpan.appendChild(txt);
                imageParagraph.appendChild( imageSpan);
                imageParagraph.appendChild( linebreak);
            }
    
            output.appendChild( imageParagraph);
        }
    }

    function clear() {
       $('#jsnfetch').text ("");
   }


   //end of json fetch data