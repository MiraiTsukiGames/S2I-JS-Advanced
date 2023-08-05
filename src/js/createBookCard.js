//Create BookCard function
const createBookCard = (title, authors) => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");

  //Create title Element
  const titleElement = document.createElement("h2");
  titleElement.innerHTML = `<strong>${title}</strong>`;

  //Create author Element
  const authorElement = document.createElement("p");
  authorElement.textContent = `Author: ${authors}`;

  //Create Read button
  const readButton = document.createElement("button");
  readButton.classList.add("read-button");
  readButton.textContent = "Read more";

  //Append Elements
  bookCard.append(titleElement, authorElement, readButton);
  return bookCard;
};

export default createBookCard;
