import createDescriptionContainer from "./descriptionContainer.js";
import _ from "lodash";
import axios from "axios";

//Function get the book description
const getDescription = async function (book, bookCard) {
  try {
    const response = await axios.get(`${process.env.API_URL}${book.key}.json`);
    let description = _.get(response.data, "description");

    const descriptionContainer = createDescriptionContainer(description);
    bookCard.appendChild(descriptionContainer);
  } catch (error) {
    console.log(error);
  }
};

export default getDescription;
