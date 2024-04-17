
/* Noothi Vinun, 2022.11.12, Lab12*/
window.addEventListener( "load", start, false );

function start(){
    console.log("event starting...");
}

const books = [
    {name: '2States', writer: 'Chetan Bhagat', price: 40.99},
    {name: 'Elogio de la Madrastra', writer: 'Mario Vargas iosa', price: 35.99},
    {name: 'Ramayan', writer: 'Valmiki', price: 40.99},
    {name: 'Mahabarat', writer: 'Vyasa', price: 25.99},
    {name: 'Fathers and Sons', writer: 'Ivan Turgenev', price: 15.99},
    {name: 'Devdas', writer: 'Tagore', price: 20.99},
    {name: 'Geethanjali', writer: 'Ravindranath Tagore', price: 40.99}
];

$(

    function(){
        var output = "<p>";
        var timeInMiliseconds = $.now();
        
        var date = new Date(timeInMiliseconds);
        output += date + "<br>";

        const bookNames = books.map ( (book) => {
            return book.name
        });
        console.log("bookNames.length=" + bookNames.length);

        const bookPrices = books.map ( (book) => {
            return book.price
        });
        console.log("bookPrices.length=" + bookPrices.length);

        const bookFind = books.find ( (book) => {
            return book.name == "Geethanjali"
        });
        console.log("bookFind=" + JSON.stringify(bookFind) );
        
        output += "</p>"
      
        $("#details").html(output);
    }
);