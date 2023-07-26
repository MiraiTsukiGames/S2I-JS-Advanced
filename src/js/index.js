import '../css/stylesDesktop.css';
import '../css/stylesMobile.css';


const categoryInput = document.getElementById('search-input');
const bookList = document.getElementById('book-list');
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', async () => {
  const category = categoryInput.value.trim();
   if (category !== '') {
      const response = await fetch(`https://openlibrary.org/subjects/${category}.json`);
      const data = await response.json();
      bookList.innerHTML = '';
       data.works.forEach((book) => {
        const title = book.title
        const authors = book.authors[0].name;
        const key = book.key;
        const bookItem = document.createElement('div');
        const readButton = document.createElement('button');
        bookItem.classList.add('bookCard');
        readButton.textContent = 'read more';
        readButton.classList.add('read-button');
        bookItem.innerHTML = `<strong><h2>${title}</h2></strong> 
        <p>Autore: ${authors}</p>`;
        readButton.addEventListener('click', async () => {
            const bookResponse = await fetch(`https://openlibrary.org${key}.json`);
            const bookData = await bookResponse.json();
            if(typeof bookData.description === 'string') {
            const description = bookData.description;
            const descriptionDiv = document.createElement('div');
            const descriptionContainer = document.createElement('div');
            descriptionContainer.classList.add('container-description');
            descriptionDiv.classList.add('description');
              descriptionDiv.innerHTML = `
              <p>Description: <br>${description}</p>`
              bookItem.append(descriptionContainer);
              descriptionContainer.append(descriptionDiv);
            } else {
              const descriptionDiv = document.createElement('div');
              const descriptionContainer = document.createElement('div');
              descriptionContainer.classList.add('container-description');
              descriptionDiv.classList.add('description');
                descriptionDiv.innerHTML = `<a href="https://openlibrary.org${key}" target="_blank">View more</a>`;
                bookItem.append(descriptionContainer);
                descriptionContainer.append(descriptionDiv);
            }
        });
        bookList.appendChild(bookItem);
        bookItem.appendChild(readButton);
      });
  } else {
    bookList.innerHTML = '<h2>Please write a category in english.</h2>';
    
  }
});
