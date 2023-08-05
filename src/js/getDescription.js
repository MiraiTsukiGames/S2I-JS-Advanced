import createDescriptionContainer from "./descriptionContainer.js";
import _ from "lodash";
import axios from "axios";

//Function get the book description
const getDescription = async function (book, bookCard) {
  try {
    //Response description
    let response = await axios.get(`${process.env.API_URL}${book.key}.json`);
    let description = _.get(response.data, "description");

    //Create description container
    let descriptionContainer = createDescriptionContainer(description);
    bookCard.appendChild(descriptionContainer);
  } catch (error) {
    //Error
    console.log(error);
  }
};

export default getDescription;
