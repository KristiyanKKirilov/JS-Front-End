function addItem() {
    const listItemsElement = document.getElementById('items');
    const newListElement = document.createElement('li');
    const inputTextContent = document.getElementById('newItemText');
    newListElement.textContent = inputTextContent.value;
    listItemsElement.appendChild(newListElement);
    inputTextContent.value = '';
}
