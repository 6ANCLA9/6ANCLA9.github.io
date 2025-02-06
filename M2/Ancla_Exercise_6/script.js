async function fetchQuote() {
    const url = 'https://southparkquotes.onrender.com/v1/quotes';
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch quote');
        
        const data = await response.json();
        document.getElementById('quote-container').innerText = data[0].quote + " - " + data[0].character;
    } catch (error) {
        alert('Error fetching quote: ' + error.message);
    }
}