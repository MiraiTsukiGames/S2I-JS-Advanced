import createBookCard from "./createBookCard.js";
import getDescription from "./getDescription.js";

//Function to initialize API data
 const getData = async function(category, bookList)  {
  try {
    const res = await fetch(`https://openlibrary.org/subjects/${category}.json`);
    const data = await res.json();
    let books = data.works;

    //Response status and data works length
    if (res.status !== 404 && data.works.length > 0) {
      bookList.innerHTML = '';
      books.forEach((book) => {
       const title = book.title
       const authors = book.authors[0].name;
       
       //BookCards title and authors
      const bookCard = createBookCard(title, authors);
      bookList.append(bookCard);

      const readButton = bookCard.querySelector('.read-button');

      //Read button Event listener and getDescription
      readButton.addEventListener('click', () => {
      getDescription(book, bookCard);
      readButton.remove();
    })
      });
    } else {
      const errorMessage = `No results found for the category: ${category}`;
      bookList.innerHTML = `<h2>${errorMessage}</h2>`;
    }
  
  }catch(error) {
  console.log(error);
  }
   
  };
      

export default getData;