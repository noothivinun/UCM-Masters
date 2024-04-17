
/* Manisha Reddy Methuku, 2022.10.29, Lab10 */

window.addEventListener("load", start, false)


     function start() {
         console.log("event started")
         registerListeners();
     }
          
     function registerListeners() {

    document.getElementById( "all" ).addEventListener("click", function() { getimage( "all.json" ); }, false );
    document.getElementById( "Manisha1" ).addEventListener("click", function() { getimage( "Manisha1.json" ); }, false );
    document.getElementById( "Manisha2" ).addEventListener("click", function() { getimage( "Manisha2.json" ); }, false );
    document.getElementById( "Manisha3" ).addEventListener("click", function() { getimage( "Manisha3.json" ); }, false );
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

        var output = document.getElementById("resultfull");
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
        $('#resultfull').text ("");
    }

    $(
        function(){

            $("#fadepic").click(
            function(event){
            console.log("Animate image when name click");
            $("#mypic").hide(6000);
            $("#mypic").show(6000);

            $("#manisha").animate({height: 0},{width: 700}, "slow");
           
           }
        );

        }
     );

     
     