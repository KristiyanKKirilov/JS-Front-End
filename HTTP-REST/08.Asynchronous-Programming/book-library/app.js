const baseUrl = 'http://localhost:3030/jsonstore/collections/books';

const loadBtn = document.getElementById('loadBooks');
const tbodyEl = document.querySelector('table tbody');
loadBtn.addEventListener ('click', () => {
    //Fetch all books
    fetch(baseUrl)
        .then(response => {
            if(!response.ok){
                throw Error('Something went wrong');
            }

           return response.json();
        })
        .then(result => {
            const books = Object.values(result);
            tbodyEl.append(...books.map(createTrBookEl));    
        })
        .catch(reject => console.log(reject));
        
    //Create tr element for each book

    //Append each tr element to the table
});


function createTrBookEl(object){
    const nameTdEl = document.createElement('td');
    nameTdEl.textContent = object.title;
    const authorTdEl = document.createElement('td');
    authorTdEl.textContent = object.author;
    
    const trEl = document.createElement('tr');

    trEl.appendChild(nameTdEl);
    trEl.appendChild(authorTdEl);

    return trEl;
}



/* <tr>
<td>Book 1</td>
<td>Author 1</td>
<td>
    <button>Edit</button>
    <button>Delete</button>
</td>
</tr>*/
