function deleteByEmail() {
    const tableElement = document.getElementById('customers');
    const inputEmailElement = document.querySelector('input[type="text"][name="email"]');
    const resultElement = document.getElementById('result');

    const searchEmailValue = inputEmailElement.value;

    const tdElements = tableElement.querySelectorAll('tbody td:last-child');
    const searchedElement = Array.from(tdElements).find(el => el.textContent === searchEmailValue);
    if(searchedElement){
        searchedElement.parentElement.remove();
        resultElement.textContent = 'Deleted.';
    }
    else{
        resultElement.textContent = 'Not found.';
    }

    inputEmailElement.value = '';
}
