import bookList  from "./index.js";
import getBooks from "./getBooks.js";
let books = [];

//Function to initialize API data
 const getData = async function(category)  {
  try {
    var response = await fetch(`https://openlibrary.org/subjects/${category}.json`);
    const data = await response.json();
    books = data.works;
    if (response.status !== 404 && data.works.length > 0) {
      bookList.innerHTML = '';
      books.forEach((book) => {
       const title = book.title
       const authors = book.authors[0].name;
       const bookKey = book.key;
        const bookItem = document.createElement('div');
        bookItem.classList.add('bookCard');
        const titleElement = document.createElement('h2');
        const authorElement = document.createElement('p');

        titleElement.innerHTML = `<strong>${title}</strong>`;
         authorElement.innerHTML=  `Author: ${authors}`;
      
      const readButton = document.createElement('button');
      readButton.innerText = 'Read more';
      readButton.classList.add('read-button');
      
       bookList.append(bookItem);
       bookItem.append(titleElement, authorElement);
       bookItem.append(readButton);
      
      //Read button event listener - getBooks function
      readButton.addEventListener('click', () => {
        getBooks(bookKey, bookItem);
        readButton.remove();
        });
        return response;
      });  
    } else {
      const errorMessage = `No results found for the category: ${category}`;
      bookList.innerHTML = `<h2>${errorMessage}</h2>`;
    }
  
  }catch(error) {
    alert('Whoops something is wrong');
  }
   
  };
      

export default getData;