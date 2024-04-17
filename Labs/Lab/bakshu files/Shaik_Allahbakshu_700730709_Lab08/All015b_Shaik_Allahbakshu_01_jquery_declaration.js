// Shaik Allahbakshu 15b Jquery Declaration
function start()
{
	console,log("event starting..");
}
jQuery (document).ready(
	function(){
		console.log("jquery 1")
	}
);

$(
	function(){
		console.log("Jquery 2");
	}

);

$(
	function(){
		console.log("Jquery 3");
	}

);

function init(){
	console.log("Jquery 4")
}
$(init);