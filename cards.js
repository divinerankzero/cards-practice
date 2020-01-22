// When the user enters in text into the text area 
// and then clicks the create button, 
// [x] use a factory function 
// [x] that creates a new DOM component 
// [x] that has a border, 
// [x] and includes it's own delete button.
let card_id = 0;
const entryField = document.getElementById("entryField")
const outputContainer = document.getElementById("output")

const cardFactory = () => {
    card_id ++;
    const card = document.createElement("article");
    card.classList.add("border");
    card.id = `card--${card_id}`;
    card.textContent = entryField.value;

    const deleteButton = document.createElement("BUTTON")
    deleteButton.innerHTML = "DELETE"
    deleteButton.id = `delete--${card_id}`;
    deleteButton.classList.add("deleteButton")
    deleteButton.addEventListener("click", deleteCard)
    card.appendChild(deleteButton);

    outputContainer.appendChild(card);
}

const deleteCard = (event) => {
    const id = event.target.id.split("-")[2];
    const card = document.getElementById(`card--${id}`)
    outputContainer.removeChild(card)

}

// [x] Insert that new component into the DOM.
// [x] When the user clicks the Delete button, 
//      the containing card, and no other cards, 
//      should then be removed from the DOM. 
// [x] Not just made invisible, actually removed from the DOM.

createButton.addEventListener("click", cardFactory);
