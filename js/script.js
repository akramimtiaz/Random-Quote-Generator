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

//generate a Random Number between 0 and upper. (e.g. 0-255)
function getRandomNum(upper){
  return Math.floor( Math.random() * upper );
}


//changes the background color of the body and loadquote-button to a random color.
function changeBackgroundColor(){
  //locate and store the body and loadquote-button
  let body = document.querySelector("body");
  let button = document.querySelector("#loadQuote");

  //generate a random color in the format rgb(x,y,z) where x,y and z are values between 0-255
  let color = "rgb(" + getRandomNum(255) + "," + getRandomNum(255) + "," + getRandomNum(255) + ")";
  
  //set the background color of the body and loadquote-button to the randomly generated color
  button.setAttribute("style", "background-color:" + color);
  body.setAttribute("style", "background-color:" + color);
  
}


/*
Obtains a random quote from the quotes array, changes the bg color, 
builds the HTML string and writes it to the quote-box div element. 
*/
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
  changeBackgroundColor(); 
  quoteBox.innerHTML = htmlQuote; //add the html content to the web-page
}


//adds an event listnener to the loadQuote button, such that each time it's clicked the printQuote function is called.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//prints a new quote to the page every 20s by calling the printQuote function periodically.
window.setInterval(printQuote, 20000);