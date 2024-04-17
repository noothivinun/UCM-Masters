
/* Noothi Vinun, 2022.10.29, Lab10 */

window.addEventListener("load", start, false)


     function start() {
         console.log("event started")
         registerListeners();
     }
          
     function registerListeners() {

    document.getElementById( "all" ).addEventListener("click", function() { getimage( "all.json" ); }, false );
    document.getElementById( "vinun1" ).addEventListener("click", function() { getimage( "Vinun1.json" ); }, false );
    document.getElementById( "vinun2" ).addEventListener("click", function() { getimage( "Vinun2.json" ); }, false );
    document.getElementById( "vinun3" ).addEventListener("click", function() { getimage( "Vinun3.json" ); }, false );
    document.getElementById( "none" ).addEventListener( "click", clear, false );
        
     }
     
     function getimage(url) {
         console.log ("getimages starting with URL =" + url);
         $(
             $.getJSON(url, loadJSONData)
         );
     }

     function loadJSONData(myJSONobj) {
        console.log ("loadJSONData starting=" + myJSONobj);
        clear();

        var output = document.getElementById("resultArea");
         var imageParagraph = document.createElement("p");
     
         for(var i=0; i<myJSONobj.pictures.picture.length; i++) {
             for (var i=0; i<myJSONobj.pictures.picture.length; i++) {
                 console.log("loop" + i);
     
                 var image = myJSONobj.pictures.picture[i].image
                 var title = myJSONobj.pictures.picture[i].title;
                 var width = myJSONobj.pictures.picture[i].width;
                 var height = myJSONobj.pictures.picture[i].height;
                 
                 var imageName = document.createElement("img");
                 var linebreak = document.createElement("br");
                 var imageSpan = document.createElement("span");

                 imageName.setAttribute("src", image );
                 imageName.setAttribute("width", width );
                 imageName.setAttribute("height", height );
     
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
        $('#resultArea').text ("");
    }

     
     
     /* function loadJSONData(myJSONobj) {
         console.log ("loadJSONData starting=" + myJSONobj);
         smashimage();
     
         var output = document.getElementById("resultArea");
         var imageParagraph = document.createElement("p");
     
         for(var i=0; i<myJSONobj.pictures.picture.length; i++) {
             for (var i=0; i<myJSONobj.pictures.picture.length; i++) {
                 console.log("loop" + i);
     
                 var image = myJSONobj.pictures.picture[i].image
                 var title = myJSONobj.pictures.picture[i].title;
                 var width = myJSONobj.pictures.picture[i].width;
                 var height = myJSONobj.pictures.picture[i].height;  
     
                 var imageName = document.createElement("img");
                 var linebreak = document.createElement("br");
                 var imageSpan = document.createElement("span");
     
                 imageName.setAttribute("src", image );
                 imageName.setAttribute("width", width );
                 imageName.setAttribute("height", height );
     
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
     
     function smashimage() {
         $('#details').text ("");
     }
 */


