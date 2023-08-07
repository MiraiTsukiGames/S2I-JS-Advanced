//Create descriptionContainer function
const createDescriptionContainer = (description) => {
  let descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("description");

  //Create description Elements
  const descriptionElement = document.createElement("p");
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("container-description");

  //Check the book description is undefined
  if (description === undefined) {
    description = "description not found";
    descriptionElement.innerHTML = `${description}`;
  } else {
    description = description.value || description;
    descriptionElement.innerHTML = `${description}`;
  }

  //Append Elements
  descriptionContainer.append(descriptionDiv, descriptionElement);
  return descriptionContainer;
};

export default createDescriptionContainer;