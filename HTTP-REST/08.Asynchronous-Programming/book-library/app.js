const baseUrl = 'http://localhost:3030/jsonstore/collections/books';

const loadBtn = document.getElementById('loadBooks');
const tbodyEl = document.querySelector('table tbody');
const formSubmitBtnEl = document.querySelector('#form button:last-of-type');

loadBtn.addEventListener ('click', fetchBooks);

formSubmitBtnEl.addEventListener('click', (e)=>{
    e.preventDefault();

    // get inputs
    const titleInputEl = document.querySelector('#form input[name="title"]');
    const authorInputEl = document.querySelector('#form input[name="author"]');

    //send data to the server api
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: titleInputEl.value, 
            author: authorInputEl.value
        })
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);

        //clear input
        titleInputEl.value = ''; 
        authorInputEl.value = '';

        //refetch books
        fetchBooks();
    });
})

function createTrBookEl(object){
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

    return trEl;
}

function fetchBooks(){
    fetch(baseUrl)
        .then(response => {
            if(!response.ok){
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



/* <tr>
<td>Book 1</td>
<td>Author 1</td>
<td>
    <button>Edit</button>
    <button>Delete</button>
</td>
</tr>*/
