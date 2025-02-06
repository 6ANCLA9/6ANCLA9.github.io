document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.getElementById("quote")
    const authorElement = document.getElementById("author")
    const button = document.getElementById("newQuoteBtn")
  
    function fetchQuote() {
      quoteElement.textContent = "Loading quote..."
      authorElement.textContent = ""
  
      fetch("https://dummyjson.com/quotes/random")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          return response.json()
        })
        .then((data) => {
          quoteElement.textContent = `"${data.quote}"`
          authorElement.textContent = `- ${data.author}`
        })
        .catch((error) => {
          console.error("Error fetching quote:", error)
          quoteElement.textContent = "Failed to load quote. Please try again."
          authorElement.textContent = ""
        })
    }
  
    button.addEventListener("click", fetchQuote)
  
    // Fetch a quote when the page loads
    fetchQuote()
  })