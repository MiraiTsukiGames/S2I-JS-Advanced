import axios from "axios";

//variables
let bookDescription;

// function book description
export async function getBookDescription(bookId) {
  try {
    const response = await axios.get(`https://openlibrary.org${bookId}.json`);
    if (response.status === 200) {
       bookDescription = response.data.description;
       return response;

    } else {
      console.error(`Errore durante la chiamata API: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error(error);
    alert('Si è verificato un errore durante la ricerca');
    return null;
  }
}

export { bookDescription }

