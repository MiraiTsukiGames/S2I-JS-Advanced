import { createDescriptionContainer, createDescriptionDiv } from "./bookElements";

//Function to initialize API data
const getData = async function(category) {
    const response = await fetch(`https://openlibrary.org/subjects/${category}.json`);
    console.log(response);
    if (response.status !== 404) {
    const data= await response.json();
    const works = data.works;
      return works;
    } else {
      throw new Error(`No book found: ${category}`);
    }
  };

  //Function get the book description
const getBooks = async (bookKey, bookItem) =>  {
    const bookResponse = await fetch(`https://openlibrary.org${bookKey}.json`);
          if (!bookResponse.ok) {
            throw new Error('No results found');
          }
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
        };

export {getData, getBooks}