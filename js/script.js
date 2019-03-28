/******************************************
Treehouse FSJS Techdegree: project 1 - A Random Quote Generator
******************************************/

// Create the array of quote objects
let quotes = [
  {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.", 
    source: "Winston S. Churchill",
    tag: "motivation"
  },
  {
    quote: "The difference between who you are and who you want to be is what you do.", 
    source: "Anonymous"
  },
  {
    quote: "It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free.", 
    source: "Steve McConnell", 
    citation: "Code Complete", 
    year: 1993,
    tag: "software"
  },
  {
    quote: "Hiring people to write code to sell is not the same as hiring people to design and build durable, usable, dependable software.", 
    source: "Larry Constantine", 
    citation: "Beyond Chaos: The Expert Edge in Managing Software Development", 
    year: 2001
  },
  {
    quote: "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilisation.", 
    source: "Gerald Weinberg",
    tag: "humor"
  },
  {
    quote: "There are two ways to write error-free programs; only the third works.", 
    source: "Alan J. Perlis",
    tag: "humor"
  }
];

/*
generate a Random Number between 0 and the number of quotes in the quotes Array (e.g. 0-5)
and return the quote object from the array at the index of Random Number
*/
function getRandomQuote(quotes){
  let randomNum = Math.floor( Math.random() * quotes.length );
  return quotes[randomNum];
}


function printQuote(){
  let randomQuote = getRandomQuote(quotes);
  let quoteBox = document.getElementById("quote-box");
  let htmlQuote = '';

  htmlQuote += '<p class="quote">' + randomQuote.quote + '</p>';
  htmlQuote += '<p class="source">' + randomQuote.source; 

  //if the quote contains a citation, add it to the html string to be output
  if(randomQuote.citation){
    htmlQuote += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  //if the quote has a year specified, add it to the html string to be output
  if(randomQuote.year){
    htmlQuote += '<span class="year">' + randomQuote.year + '</span>';
  }

  //if the quote has an added tag, add it to the html string to be output
  if(randomQuote.tag){
    htmlQuote += '<span class="tag">' + randomQuote.tag + '</span>';
  }

  htmlQuote += '</p>'; 
  quoteBox.innerHTML = htmlQuote; //add the html content to the web-page
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);