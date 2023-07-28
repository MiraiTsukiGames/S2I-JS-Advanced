

//Create BookCard function
const createBookCard = (title, authors) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
  
    const titleElement = document.createElement('h2');
    titleElement.innerHTML = `<strong>${title}</strong>`;
  
    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${authors}`;
    const readButton = document.createElement('button');
    readButton.classList.add('read-button');
    readButton.textContent = 'Read more';

    bookCard.append(titleElement, authorElement, readButton);
    return bookCard;
  };

  export default createBookCard;

