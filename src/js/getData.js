import createBookCard from "./createBookCard.js";
import getDescription from "./getDescription.js";
import axios from "axios";
import _get from "lodash/get";

export const openLibraryUrl = process.env.API_URL;

//Function to initialize API data
const getData = async function (category, bookList) {
  try {
    const res = await axios.get(openLibraryUrl + `/subjects/${category}.json`);

    //Response books data
    let books = res.data.works;

    //Response status and data works length
    if (res.status !== 404 && books.length > 0) {
      bookList.innerHTML = "";
      books.forEach((book) => {
        const title = _get(book, "title");
        const authors = _get(book, "authors[0].name");

        //BookCards title and authors
        const bookCard = createBookCard(title, authors);
        bookList.append(bookCard);

        //Read button
        const readButton = bookCard.querySelector(".read-button");

        //Read button Event listener and getDescription
        readButton.addEventListener("click", () => {
          getDescription(book, bookCard);
          readButton.remove();
        });
      });
    } else {
      //No results for this category
      bookList.innerHTML = `<h2>No results found for the category: ${category}</h2>`;
    }
  } catch (error) {
    //Error
    console.log(error);
  }
};

export default getData;
