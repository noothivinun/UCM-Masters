
/* Manisha Reddy Methuku, 2022.10.29, Lab10 */

window.addEventListener("load",start,false);

function start(){
    console.log("event starting..");
    document.getElementById( "all" ).addEventListener("click", function() { getPictures( "all.json" ); }, false );
    document.getElementById( "Manisha1" ).addEventListener("click", function() { getPictures( "Manisha1.json" ); }, false );
    document.getElementById( "Manisha2" ).addEventListener("click", function() { getPictures( "Manisha2.json" ); }, false );
    document.getElementById( "Manisha3" ).addEventListener("click", function() { getPictures( "Manisha3.json" ); }, false );
    document.getElementById( "none" ).addEventListener( "click", clearImg, false );
}


function getPictures( url )
 {
    try
    {
        asyncRequest = new XMLHttpRequest(); 
        asyncRequest.addEventListener("readystatechange", processResponse, false);
        asyncRequest.open( "GET", url, true ); 
         asyncRequest.send( null ); 
    }
    catch ( exception )
     {
        alert ("error" +exception);
     }
}

function getImage( url )
 {
    try
    {
        asyncRequest = new XMLHttpRequest(); 
        asyncRequest.addEventListener("readystatechange", processSingleImage, false);
        asyncRequest.open( "GET", url, true ); 
         asyncRequest.send( null ); 
    }
    catch ( exception )
     {
        alert ("error" +exception);
     }
}

function processSingleImage(){

    if (asyncRequest.readyState == 4 && asyncRequest.status == 200 && asyncRequest.responseText)
    {

        clearImg(); 

        var output = document.getElementById( "resultArea" );
        var imageParagraph = document.createElement( "p" );

        var myJSONobj = JSON.parse(asyncRequest.responseText);
        console.log("myJSONobj =" + JSON.stringify(myJSONobj));
        console.log("myJSONobj.pictures.picture = "+  myJSONobj.pictures.picture);
        console.log("length:" + myJSONobj.pictures.picture.length);

            var image = myJSONobj.pictures.picture.image;
            var title = myJSONobj.pictures.picture.title;
            var width = myJSONobj.pictures.picture.width;
            var height = myJSONobj.pictures.picture.height;

            var imgName = document.createElement("img");
            var linebr = document.createElement("br");
            var imgspan = document.createElement("span");

            imgName.setAttribute( "src", image );
            imgName.setAttribute( "width", width );
            imgName.setAttribute( "height", height );

            imageParagraph.appendChild(imgName);
            imageParagraph.appendChild(linebr);

            var text =document.createTextNode(title);
            imgspan.appendChild(text);
            imageParagraph.appendChild(imgspan);
            imageParagraph.appendChild(linebr);

            
        
        output.appendChild(imageParagraph);
           }

}

function clearImg(){
    document.getElementById( "resultArea" ).innerHTML = "";
}


function processResponse()
 {
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200 && asyncRequest.responseText)
    {

        clearImg(); 

        var output = document.getElementById( "resultArea" );

        var imageParagraph = document.createElement( "p" );

        var myJSONobj = JSON.parse(asyncRequest.responseText);
        console.log("myJSONobj =" + JSON.stringify(myJSONobj));
        console.log("myJSONobj.pictures.picture = "+  myJSONobj.pictures.picture);
        console.log("length:" + myJSONobj.pictures.picture.length);

        for ( var i = 0; i <  myJSONobj.pictures.picture.length ; ++i ){

            console.log("loop " + i);

            var image = myJSONobj.pictures.picture[i].image;
            var title = myJSONobj.pictures.picture[i].title;
            var width = myJSONobj.pictures.picture[i].width;
            var height = myJSONobj.pictures.picture[i].height;

            var imgName = document.createElement("img");
            var linebr = document.createElement("br");
            var imgspan = document.createElement("span");

            imgName.setAttribute( "src", image );
            imgName.setAttribute( "width", width );
            imgName.setAttribute( "height", height );

            imageParagraph.appendChild(imgName);
            imageParagraph.appendChild(linebr);

            var text =document.createTextNode(title);
            imgspan.appendChild(text);

            imageParagraph.appendChild(imgspan);
            imageParagraph.appendChild(linebr);

            
        }
        output.appendChild(imageParagraph);
           }
     }
