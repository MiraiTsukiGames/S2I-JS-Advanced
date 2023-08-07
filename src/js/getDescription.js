import createDescriptionContainer from "./descriptionContainer.js";
import axios from "axios";
import _get from "lodash/get";
import { openLibraryUrl } from "./getData.js";

//Function get the book description
const getDescription = async function (book, bookCard) {
  try {
    const response = await axios.get(openLibraryUrl + `${book.key}.json`);

    //Response description
    let data = response.data;
    const description = _get(data, "description");

    //Create description container
    const descriptionContainer = createDescriptionContainer(description);
    bookCard.appendChild(descriptionContainer);
  } catch (error) {
    //Error
    console.log(error);
  }
};

export default getDescription;
