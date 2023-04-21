const quote = document.getElementById("quote");
const author = document.getElementById("author");

fetch("https://api.quotable.io/random")
  .then(response => response.json())
  .then(data => {
    const { content, author: authorName } = data;
    quote.innerText = `"${content}"`;
    author.innerText = `— ${authorName}`;
    window.localStorage.setItem("quote", content)
    window.localStorage.setItem("author", authorName)
  })
  .catch(error => {
    console.error(error);
    quote.innerHTML = `"${window.localStorage.getItem("quote")}"`
    author.innerHTML = `— ${window.localStorage.getItem("author")}`
  });
