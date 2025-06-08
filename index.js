// document.getElementById('newQuoteBtn').addEventListener('click', function () {
const quotes = [
    {
        text: "Resentment is like drinking poison and waiting for your enemies to die.",
        author: "Nelson Mandela"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    }
];

function generateQuote() {
    const random = Number.parseInt(Math.random() * quotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${quotes[random].text}\"`;
    document.querySelector('#authorOutput').textContent = `--${quotes[random].author}`;

}
// const randomIndex = Math.floor(Math.random() * quotes.length);
// const randomQuote = quotes[randomIndex];

// document.getElementById('quoteText').textContent = `"${randomQuote.text}"`;
// document.getElementById('quoteAuthor').textContent = randomQuote.author;
// });