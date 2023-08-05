import createBookCard from "./createBookCard.js";
import getDescription from "./getDescription.js";
import axios from "axios";
import _ from "lodash";

//Function to initialize API data
const getData = async function (category, bookList) {
  try {
    let res = await axios.get(
      `${process.env.API_URL}/subjects/${category}.json`,
    );

    //Response books data
    let books = res.data.works;

    //Response status and data works length
    if (res.status !== 404 && res.data.works.length > 0) {
      bookList.innerHTML = "";
      books.forEach((book) => {
        let title = _.get(book, "title");
        let authors = _.get(book, "authors[0].name");

        //BookCards title and authors
        let bookCard = createBookCard(title, authors);
        bookList.append(bookCard);

        //Read button
        let readButton = bookCard.querySelector(".read-button");

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
