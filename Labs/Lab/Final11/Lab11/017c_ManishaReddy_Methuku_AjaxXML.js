
/* Manisha Reddy Methuku, 2022.11.05, Lab11 */
window.addEventListener("load",start,false);

function start(){
    console.log("event starting..");
    document.getElementById( "all" ).addEventListener("click", function() { getPictures( "all.xml" ); }, false );
    document.getElementById( "Manisha1" ).addEventListener("click", function() { getPictures( "Manisha1.xml" ); }, false );
    document.getElementById( "Manisha2" ).addEventListener("click", function() { getPictures( "Manisha2.xml" ); }, false );
    document.getElementById( "Manisha3" ).addEventListener("click", function() { getPictures( "Manisha3.xml" ); }, false );
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

function clearImg(){
    document.getElementById( "resultArea" ).innerHTML = "";
}


function processResponse()
 {
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200 && asyncRequest.responseXML)
    {
        clearImg(); 

        var output = document.getElementById( "resultArea" );
        var imagesUL = document.createElement( "ul" );
        var imageLI = document.createElement( "li" );

        var pics = asyncRequest.responseXML.getElementsByTagName("picture" );

        for ( var i = 0; i < pics.length; ++i ){

            var picture = pics.item(i);
            var image = picture.getElementsByTagName( "image" ).item( 0 ).firstChild.nodeValue;
            var title = picture.getElementsByTagName( "title" ).item( 0 ).firstChild.nodeValue;
            var width = picture.getElementsByTagName( "width" ).item( 0 ).firstChild.nodeValue;
            var height = picture.getElementsByTagName( "height" ).item( 0 ).firstChild.nodeValue;

            var imgName = document.createElement("img");
            var linebr = document.createElement("br");
            var imgspan = document.createElement("span");

            imgName.setAttribute( "src", image );
            imgName.setAttribute( "width", width );
            imgName.setAttribute( "height", height );

            var text =document.createTextNode(title);
            imgspan.appendChild(text);

            imageLI.appendChild( imgName ); 
            imageLI.appendChild(imgspan);
            imageLI.appendChild(linebr);
            imagesUL.appendChild( imageLI ); 

            
        }
        output.appendChild(imagesUL);
           }
     } 



