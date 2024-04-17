//names functions with multiple parameters

function add(x, y) {
    return x + y;
}

let add2 = (x, y) => x + y 

//named function with one parameter
function isNumberObject(x) {
    return x instanceof Number
}

let isNumberObject2= x => x instanceof Number

//named function without parameters
function generateRandomNumber() {
   return Math.random()
}

let generateRandomNumber2 = () => Math.random()

//anonymous function
document.addEventListener('click', function() {
    console.log("click event 1");
})

document.addEventListener('click', () => console.log("click event 2") )