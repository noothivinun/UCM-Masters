/*Final Exam*/

window.addEventListener( "load", start, false );
var image = new Image();
function start(){
    console.log("event starting...");
    document.getElementById( "NoothiVinunxml" ).addEventListener("click", function() { getPictures( "Noothi_Vinun_700741380_exam_final.xml" ); }, false );

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
    document.getElementById( "fetchdata" ).innerHTML = "";
}


function processResponse()
 {
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200 && asyncRequest.responseXML)
    {
        clearImg(); 

        var output = document.getElementById( "fetchdata" );
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



$(
    function(){

        $("#vinnupic").click(
        function(event){
        console.log("Animate image when name click");
        $("#mine").hide(6000);
        

        $("#vinnu").animate({height: 0},{width: 750}, "slow");

       }
    );

    $("#vinnupic").click(
        function(event){
            console.log("Image show");
            $("#mine").show(6000);
        }
    )

    }
 );

    
     const books = [
        {name: 'Noothi Vinun', description: 'I am currently taking my final exam for client side internet resurce with Professor Mum ShahI'}
    ];
    
    $(
    
        function(){
            var output = "<p>";
            
            const bookNames = books.map ( (book) => {
                output += book.name});
    
            const bookPrices = books.map ( (book) => {
                output += book.description
            });
            
          
            $("#details").html(output);
    }
    );

