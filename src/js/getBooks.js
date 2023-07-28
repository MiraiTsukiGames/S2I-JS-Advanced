//Function get the book description
const getBooks = async function(bookKey, bookItem)  {
    try {
    var bookResponse = await fetch(`https://openlibrary.org${bookKey}.json`);
          const bookData = await bookResponse.json();
          const descriptionDiv = document.createElement('div');
          descriptionDiv.classList.add('description');
          const descriptionContainer = document.createElement('div');
          descriptionContainer.classList.add('container-description');
          
          //append elements
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
        } catch(error) {
            ;
        }
    };

export default getBooks;