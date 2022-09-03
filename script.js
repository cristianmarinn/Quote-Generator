const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick a random Quote from API Quotes Array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if Author field is blank and replace it with 'Unknown'
    if(!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    // Check Quote length to determine the styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');

    }
    quoteText.textContent = quote.text;
}

// Get Quotes from API
// async function getQuotes () {
//     const apiUrl = 'ADD API URL HERE';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes =  await response.json();
//         newQuote();
        // Catch Error Here
//        } catch (error) {
//         alert(error)
//
//     }
// }

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// // On Load
// getQuotes();
newQuote();