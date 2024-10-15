const baseUrl = 'http://localhost:3030/jsonstore/collections/books';

const loadBtn = document.getElementById('loadBooks');
const tbodyEl = document.querySelector('table tbody');
const formEl = document.querySelector('#form');
const formSubmitBtnEl = formEl.querySelector('button:last-of-type');
const titleInputEl = formEl.querySelector('input[name="title"]');
const authorInputEl = formEl.querySelector('input[name="author"]');

loadBtn.addEventListener('click', fetchBooks);

formSubmitBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    const bookId = formEl.getAttribute('data-edit-id');

    const bookData = {
        _id: bookId,
        title: titleInputEl.value,
        author: authorInputEl.value,
    };
    
    //send data to the server api
    fetch(`${baseUrl}/${bookId ? bookId : ''}`, {
        method: bookId ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData), 
    }) 
        .then(response => response.json())
        .then(result => {
            //clear input
            titleInputEl.value = '';
            authorInputEl.value = '';

            //refetch books
            fetchBooks();
        })
        .finally(() => {
            formEl.removeAttribute('data-edit-id');
        });
})

function fetchBooks() {
    fetch(baseUrl)
        .then(response => {
            if (!response.ok) {
                throw Error('Something went wrong');
            }

            return response.json();
        })
        .then(result => {
            //clear book list
            tbodyEl.innerHTML = '';

            const books = Object.values(result);
            tbodyEl.append(...books.map(createTrBookEl));
        })
        .catch(reject => console.log(reject));
}

function createTrBookEl(object) {
    const nameTdEl = document.createElement('td');
    nameTdEl.textContent = object.title;
    const authorTdEl = document.createElement('td');
    authorTdEl.textContent = object.author;

    const editBtnEl = document.createElement('button');
    editBtnEl.textContent = 'Edit';
    const deleteBtnEl = document.createElement('button');
    deleteBtnEl.textContent = 'Delete';

    const buttonsTdEl = document.createElement('td');
    buttonsTdEl.append(editBtnEl, deleteBtnEl);

    const trEl = document.createElement('tr');

    trEl.appendChild(nameTdEl);
    trEl.appendChild(authorTdEl);
    trEl.appendChild(buttonsTdEl);

    deleteBtnEl.addEventListener('click', async () => {
        //Delete request
        try {
            const response = await fetch(`${baseUrl}/${object._id}`, {
                method: 'DELETE',
            });

            trEl.remove();
        } catch (error) {
            console.log(error);
        }
    });

    editBtnEl.addEventListener('click', () => {
        titleInputEl.value = object.title;
        authorInputEl.value = object.author;

        formEl.setAttribute('data-edit-id', object._id);

        trEl.remove(); 
    });

    return trEl;
}
