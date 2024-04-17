
/* Noothi Vinun, 2022.10.29, Lab10 */
window.addEventListener("load",start,false);

function start(){
    console.log("event starting..");
    registerListner();

}
function registerListner(){
    document.getElementById( "all" ).addEventListener("click", function() { getImages( "all.xml" ); }, false );
    document.getElementById( "vinun1" ).addEventListener("click", function() { getImages( "Vinun1.xml" ); }, false );
    document.getElementById( "vinun2" ).addEventListener("click", function() { getImages( "Vinun2.xml" ); }, false );
    document.getElementById( "vinun3" ).addEventListener("click", function() { getImages( "Vinun3.xml" ); }, false );
    document.getElementById( "none" ).addEventListener( "click", clearImg, false );
    
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

        var output = document.getElementById( "resultArea" );
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
    $("#resultArea").text("");
}

/* function getPictures( url )
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



 */