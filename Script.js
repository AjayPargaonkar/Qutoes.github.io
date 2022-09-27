function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      //console.log(color);
    }
    return color;

  }
  


//Show New Quote
let quoteContainer = document.getElementById('quote-container');
let quoteText = document.getElementById('quote');
let authorText = document.getElementById('author');
let twitterBtn = document.getElementById('twitter');
let newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
let change = document.getElementById('body');
//console.log(changebg);

//changeBG.style.backgroundImage = "";

function changebg()
{
    let mybg = bg[Math.floor(Math.random() * bg.length)]
    //change.style.backgroundImage = mybg['image'];
    var randomColor=generateRandomColor();//"#F10531"
    change.style.backgroundColor = randomColor;
}



//showing Loading
function loading()
{
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide 
function complete()
{
    quoteContainer.hidden = false;
    loader.hidden = true;
}



function newQuote()
{
loading();    

    // Pick a random quote from apiQuotes array
    //const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];    
    
    const text = quote['text'];
    const author = quote['author'];
 
    quoteText.textContent = text;
    authorText.textContent = author;


    // check if author field is blank and replace it with
    if(!quote.author)
    {
        authorText.textContent = 'unknown';
    }
    else  
    {
        quoteText.textContent = text;
    }
        
    
    quoteText.textContent = quote.text;
    if(quote.text.length > 50)
    {
        quoteText.classList.add('long-quote');
    }
    else 
    {
        quoteText.textContent = quote.text;
    }
    
    
complete();
}
  
 

newQuote();


//Tweet Quote 
function tweetQuote()
{
    const twitterUrl = `https://twitter.com/intent/tweet=${quote.text} - ${quote.author}`;
    window.open(twitterUrl, '_blank')
}


//Event Listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);



// Get Quotes From API
/*
async function getQuotes()
{
    const apiUrl = 'https://type.fit/api/quotes';
     try 
     {
       const response = await fetch(apiUrl);
       apiQuotes = await response.json(); 
       newQuote();
       console.log(apiQuotes);
    }
     catch(error)
     {
        alert()
        // catch Error here
     }

}

//on load
getQuotes();
*/