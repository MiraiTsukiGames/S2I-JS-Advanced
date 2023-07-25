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
        bookItem.classList.add('bookCard');
        bookItem.innerHTML = `<strong><h3>${title}</h3></strong> 
        <p>Autore: ${authors}</p>`;
        bookItem.addEventListener('click', async () => {
            const bookResponse = await fetch(`https://openlibrary.org${key}.json`);
            const bookData = await bookResponse.json();
            const description = bookData.description;
            const descriptionDiv = document.createElement('div');
            const descriptionContainer = document.createElement('div');
            descriptionContainer.classList.add('container-description');
            descriptionDiv.classList.add('description');
              descriptionDiv.innerHTML = `
              <p>Descrizione: <br>${description}</p>`
              bookItem.append(descriptionContainer);
              descriptionContainer.append(descriptionDiv);
            
            console.log(bookData.description);
        });
        bookList.appendChild(bookItem);
      });
  } else {
    bookList.innerHTML = '<h3>Please write a category in english.</h3>';
    
  }
});
