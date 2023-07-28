import '../css/stylesDesktop.css';
import '../css/stylesMobile.css';
import getData from './getData.js';

//variables
const categoryInput = document.getElementById('search-input');
const bookList = document.getElementById('book-list');
const searchButton = document.getElementById('search-button');

//HandleSearch  
const handleSearch = async function() {
  const category =  categoryInput.value.trim().toLowerCase().replace(/[\W_]/g, '');
  bookList.scrollIntoView({ behavior: 'smooth'});
  if (category === '') {
    bookList.innerHTML = '<h2>Please write a category in english</h2>';
    return;
  } else {
    getData(category);
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

export default bookList;