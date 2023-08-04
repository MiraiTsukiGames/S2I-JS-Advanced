import createBookCard from "./createBookCard.js";
import getDescription from "./getDescription.js";
import axios from "axios";
import _ from "lodash";

//const variables
const bookList = document.getElementById("book-list");

//Function to initialize API data
const getData = async function (category) {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/subjects/${category}.json`,
    );

    let books = res.data.works;

    //Response status and data works length
    if (res.status !== 404 && res.data.works.length > 0) {
      bookList.innerHTML = "";
      books.forEach((book) => {
        const title = _.get(book, "title");
        const authors = _.get(book, "authors[0].name");

        //BookCards title and authors
        const bookCard = createBookCard(title, authors);
        bookList.append(bookCard);

        const readButton = bookCard.querySelector(".read-button");

        //Read button Event listener and getDescription
        readButton.addEventListener("click", () => {
          getDescription(book, bookCard);
          readButton.remove();
        });
      });
    } else {
      bookList.innerHTML = `<h2>No results found for the category: ${category}</h2>`;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getData;
