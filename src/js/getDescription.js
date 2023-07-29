import createDescriptionContainer from "./descriptionContainer.js";


//Function get the book description
const getDescription = async function(book, bookCard)  {
    try {
    const response = await fetch(`https://openlibrary.org${book.key}.json`);
            const data = await response.json();
            let description = data.description;

            const descriptionContainer = createDescriptionContainer(description);
            bookCard.appendChild(descriptionContainer);
        } catch(error) {
        console.log(error);
        }
    };

export default getDescription;