// Shaik Allahbakshu 15b Jquery Declaration
function start()
{
	console,log("event starting..");
}
$(
	function(){
		console.log("inside the main anonymous  function");
		$("p").css("background-color","blue");
		$("#author").css("background-color","yellow");
	}
);
