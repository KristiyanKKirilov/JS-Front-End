function addItem() {
    //get elements refferences
    const itemsElement = document.getElementById('items');
    const newItemTextElement = document.getElementById('newItemText');
    const inputTextValue = newItemTextElement.value;
    //create new elementwith textContent of the input
    const listElement = document.createElement('li');    
    listElement.textContent = inputTextValue;
    //create delete button
    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    //attach event to delete button
    deleteButton.addEventListener('click', (e) => {
        // deleteButton.parentElement.remove(); 
        e.currentTarget.parentElement.remove();
    })

    //delete button set attribute
    deleteButton.setAttribute('href', '#');
    //add button to list element
    listElement.append(deleteButton);
    //add list element to DOM
    itemsElement.appendChild(listElement);
    //reset input
    newItemTextElement.value = '';
}
