import createDescriptionContainer from "./descriptionContainer.js";
import axios from "axios";
import _get from "lodash/get";

//Function get the book description
const getDescription = async function (book, bookCard) {
  try {
    //Response description
    const response = await axios.get(`${process.env.BOOK_URL}${book.key}.json`);
    const description = await _get(response.data, "description");

    //Create description container
    const descriptionContainer = createDescriptionContainer(description);
    bookCard.appendChild(descriptionContainer);
  } catch (error) {
    //Error
    console.log(error);
  }
};

export default getDescription;
