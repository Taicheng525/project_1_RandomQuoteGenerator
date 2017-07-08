// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Project 1 by Taicheng Chen
var quotes = [
    {
        quote: "Successful people begin where failures leave off. Never settle for ‘just getting the job done.’ Excel!",
        source: 'Tom Hopkins',
        citation: 'Fortune',
        year:1995
    },
    {
        quote: "The foundation stones for a balanced success are honesty, character, integrity, faith, love and loyalty.",
        source: 'Zig Ziglar',
        citation: 'Foundation Stones',
        year:2015
    },
    {
        quote: "I know the price of success: dedication, hard work and an unremitting devotion to the things you want to see happen.",
        source: 'Frank Lloyd Wright',
        citation: 'The wright way to succeed',
        year:2010
    },
    {
        quote: 'Your true success in life begins only when you make the commitment to become excellent at what you do.',
        source: "Brian Tracy",
        citation: 'Quotes from the Masters',
        year: 2006
    },
    {
        quote: 'It’s one thing to fall in love. It’s another to feel someone else fall in love with you, and to feel a responsibility toward that love.',
        source: 'David Levithan',
        citation: 'Every Day',
        year:2011
    }
];

var usedquote=[];

//Function getRandomQuote
function getRandomQuote(){
    var selectedObj = quotes[Math.floor(Math.random()*quotes.length)];

    //If usedquote array doesn't have this obj, it will add this random obj into it
    if(usedquote.indexOf(selectedObj) === -1){
        usedquote.push(selectedObj);
    }

    //Reset the usedquote array
    //Check if the previous usedquote's last obj as same as the first obj of the new usedquote array
    else if(usedquote.length === quotes.length){
        while(usedquote[usedquote.length-1] === selectedObj){
            selectedObj = quotes[Math.floor(Math.random()*quotes.length)];
        }
        usedquote=[];
        usedquote.push(selectedObj);
    }

    //Check if the random obj has already been added into the usedquote array
    else if(usedquote.indexOf(selectedObj) > -1){
        while (usedquote.indexOf(selectedObj) > -1){
            var selectedObj = quotes[Math.floor(Math.random()*quotes.length)];
        }
        usedquote.push(selectedObj);
    }
    return selectedObj;
}

//Function printQuote
function printQuote(){
    var obj = getRandomQuote();
    document.getElementById('quote-box').innerHTML = '<p class="quote">' + obj.quote + '</p>' + '<p class="source">' + obj.source + '<span class="citation">' + obj.citation + '</span>' + '<span class="year">' + obj.year + '</span>' + '</p>' 
}





