window.addEventListener("load", solve);

function solve() {
   const addButtonElement = document.getElementById('add-btn');
   const laptopInputElement = document.getElementById('laptop-model');
   const storageInputElement = document.getElementById('storage');
   const priceInputElement = document.getElementById('price');   
   const checkListElement = document.getElementById('check-list');
   const laptopWishListElement = document.getElementById('laptops-list');
   const clearButtonElement = document.getElementsByClassName('clear')[0];

   addButtonElement.addEventListener('click', () => {
    const laptop = laptopInputElement.value;
    const storage = storageInputElement.value;
    const price = priceInputElement.value;

    const listElement = createCheckListItem(laptop, storage, price);
    checkListElement.appendChild(listElement);

    laptopInputElement.value = '';
    storageInputElement.value = '';
    priceInputElement.value = '';
    addButtonElement.setAttribute('disabled', 'disabled');
   });

   clearButtonElement.addEventListener('click', () => {
      location.reload(true);
   });
 
   function createCheckListItem(laptop, storage, price){
    const pLaptopElement = document.createElement('p');
    pLaptopElement.textContent = laptop;
    const pStorageElement = document.createElement('p');
    pStorageElement.textContent = `Memory: ${storage} TB`;
    const pPriceElement = document.createElement('p');
    pPriceElement.textContent = `Price: ${price}$`;

    const articleElement = document.createElement('article');
    articleElement.appendChild(pLaptopElement);
    articleElement.appendChild(pStorageElement);
    articleElement.appendChild(pPriceElement);

    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'edit');
    editButton.textContent = 'edit';     

    const okButton = document.createElement('button');
    okButton.classList.add('btn', 'ok');
    okButton.textContent = 'ok';

    const listItem = document.createElement('li');
    listItem.classList.add('laptop-item');

    editButton.addEventListener('click', () => {
      laptopInputElement.value = laptop;
      storageInputElement.value = storage;
      priceInputElement.value = price;

      addButtonElement.removeAttribute('disabled');
      listItem.remove();
    });

    okButton.addEventListener('click', () => {
      okButton.remove();
      editButton.remove();
      addButtonElement.removeAttribute('disabled');

      laptopWishListElement.appendChild(listItem);
    })
    listItem.appendChild(articleElement);
    listItem.appendChild(editButton);
    listItem.appendChild(okButton);

    return listItem;

  }
   
  }

  
  