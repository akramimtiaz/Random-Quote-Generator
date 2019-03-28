/******************************************
Treehouse FSJS Techdegree: project 1 - A Random Quote Generator
******************************************/

// Create the array of quote objects
let quotes = [
  {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.", 
    source: "Winston S. Churchill"
  },
  {
    quote: "The difference between who you are and who you want to be is what you do.", 
    source: "Anonymous"
  },
  {
    quote: "It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free.", 
    source: "Steve McConnell", 
    citation: "Code Complete", 
    year: 1993
  },
  {
    quote: "Hiring people to write code to sell is not the same as hiring people to design and build durable, usable, dependable software.", 
    source: "Larry Constantine", 
    citation: "Beyond Chaos: The Expert Edge in Managing Software Development", 
    year: 2001
  },
  {
    quote: "If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilisation.", 
    source: "Gerald Weinberg"
  },
  {
    quote: "There are two ways to write error-free programs; only the third works.", 
    source: "Alan J. Perlis"
  }
];
console.log(quotes);

/*
generate a Random Number between 0 and the number of quotes in the quotes Array (e.g. 0-5)
and return the quote object from the array at the index of Random Number
*/
function getRandomQuote(quotes){
  let randomNum = Math.floor( Math.random() * quotes.length );
  return quotes[randomNum];
}



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.