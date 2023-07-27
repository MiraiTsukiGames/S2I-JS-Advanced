

//Function create bookCards title and authors html elements
 function createCard(title, authors) {
   const bookDiv = document.createElement('div');
   const titleElement = document.createElement('h2');
   const authorElement = document.createElement('p');
 
  bookDiv.classList.add('bookCard');
   titleElement.innerHTML = `<strong>${title}</strong>`;
    authorElement.innerHTML=  `Author: ${authors}`;
 
    bookDiv.append(titleElement, authorElement);
 
    return bookDiv;
 }
 
 //Function create Read Button html elements
  function createReadButton() {
 const readMore = document.createElement('button');
 
 readMore.textContent = 'read more';
 readMore.classList.add('read-button');
 
   return readMore;
 }
 
 //Function create Description container html elements
 function createDescriptionContainer() {
 const descriptionC = document.createElement('div');
 descriptionC.classList.add('container-description');
   return descriptionC;
 }
 
 //Function create Description Div html elements
 function createDescriptionDiv() {
 const descriptionD = document.createElement('div');
 descriptionD.classList.add('description');
   return descriptionD;
 }

 
export {createCard, createReadButton, createDescriptionContainer, createDescriptionDiv};

