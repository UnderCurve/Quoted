const quote = document.getElementById("quote");
const author = document.getElementById("author");

fetch("https://api.quotable.io/random")
  .then(response => response.json())
  .then(data => {
    const { content, author: authorName } = data;
    quote.innerText = `"${content}"`;
    author.innerText = `— ${authorName}`;
  })
  .catch(error => console.error(error));
