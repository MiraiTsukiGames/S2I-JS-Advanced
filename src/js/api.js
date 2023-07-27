import bookList  from "./index.js";
import {createDescriptionContainer, createDescriptionDiv} from "./bookElements.js";


//Function to initialize API data
 async function getData(category) {
    const response = await fetch(`https://openlibrary.org/subjects/${category}.json`);
    const data= await response.json();
    if (response.status !== 404 && data.works.length > 0) {
      return data.works;
    } else {
      const errorMessage = `No results found for the category: ${category}`
      bookList.innerHTML = `<h2>${errorMessage}</h2>`;
      throw new Error(errorMessage);
    }
  }

  //Function get the book description
 async function getBooks(bookKey, bookItem)  {
    const bookResponse = await fetch(`https://openlibrary.org${bookKey}.json`);
          const bookData = await bookResponse.json();
          const descriptionDiv = createDescriptionDiv();
          const descriptionContainer = createDescriptionContainer();
          descriptionContainer.append(descriptionDiv);
          bookItem.appendChild(descriptionContainer);
    
          //Check the book description is a string
          if (typeof bookData.description === 'string') {
              const description = bookData.description;
              descriptionDiv.innerHTML = `
              <p>Description: <br>${description}</p>`
          } else {
              descriptionDiv.innerHTML = `<a href="https://openlibrary.org${bookKey}" target="_blank">View more</a>`;
          }
        }
      

export { getData, getBooks};