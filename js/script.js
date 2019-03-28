/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
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

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




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