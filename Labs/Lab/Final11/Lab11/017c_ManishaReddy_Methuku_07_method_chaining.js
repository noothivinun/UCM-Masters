
/* Manisha Reddy Methuku, 2022.11.05, Lab11*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...")
}

$(
   function(){
    $("#animateButton").click(
        function(event){
        console.log("Animate Button click");
        
        animatePicture();
        
        function animatePicture(){
           $("#picdiv").css("background-color","pink");
           
           $("#mypic").animate( {height: 586}, "slow")
                      .animate( {width: 450}, "slow" )
                      .animate( {width: 300, height:500}, "slow" )
                      .animate( {height: 400}, "slow")
                      .animate( {width: 350}, "slow", animatePicture());
        }
        }
    );

    $("#stopButton").click(
        function(event){
        console.log("Stop Button click");
        $("#mypic").stop();
        $("#picdiv").stop();
                
        }
    );

    
   }
);