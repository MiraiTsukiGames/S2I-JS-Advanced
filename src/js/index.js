import '../css/stylesDesktop.css';
import '../css/stylesMobile.css';
import { createCard, createReadButton } from './bookElements';
import { getBooks, getData } from './api';

//variables
const categoryInput = document.getElementById('search-input');
const bookList = document.getElementById('book-list');
const searchButton = document.getElementById('search-button');
let category;
let books = [];

//Function create BookCards
const createBookCards = function(books) {
     bookList.innerHTML = '';
    books.forEach((book) => {
     const title = book.title
     const authors = book.authors[0].name;
     const bookKey = book.key;
    const bookItem = createCard(title, authors);
    const readButton = createReadButton();

     bookList.append(bookItem);
     bookItem.append(readButton);

    //Read button event listener 
    readButton.addEventListener('click', async function() {
      getBooks(bookKey, bookItem);
      readButton.remove();
      });
    });  
};

//HandleSearch function
const handleSearch = async function(category) {
  try {
  category = categoryInput.value.trim().toLowerCase().replace(/[\W_]/g, '');
  bookList.scrollIntoView({ behavior: 'smooth'});
  if (category === '') {
    bookList.innerHTML = '<h2>Please write a category in english</h2>';
    setTimeout(() => location.reload(), 3000);
    return;
  }
    bookList.innerHTML ='';
    books = await getData(category);
    createBookCards(books);
} catch (error) {
  console.log(error);
  bookList.innerHTML = `<h2>Error: No results found for: ${category}. Please check your typo. <br>Remember you write the category in english.</h2>`;
}
  
};


//Event listener search button
searchButton.addEventListener('click', handleSearch);

//Event listener input
categoryInput.addEventListener('keyup', (event) => {
const key = event.key;

if (key === 'Enter') {
  handleSearch();
} 
});