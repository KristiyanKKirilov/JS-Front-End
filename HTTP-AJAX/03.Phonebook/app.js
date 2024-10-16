function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/phonebook";

    const ulPhoneBookElement = document.getElementById("phonebook");
    const loadBtnElement = document.getElementById("btnLoad");
    const [personInputElement, phoneInputElement] = document.querySelectorAll("input[type=text]");

    async function customFetch(url, options){
        return fetch(url, options)
            .then(response => response.json());
    }

    function deletePhoneHandler(){

    }
    function getAllPhonesHandler(){
        customFetch(baseUrl)
            .then(result => {
                Object.values(result).forEach(({person, phone, id}) => {
                    const liElement = document.createElement("li");
                    liElement.textContent = `${person}: ${phone}`;

                    const deleteBtnElement = document.createElement("button");
                    deleteBtnElement.textContent = "Delete";
                    deleteBtnElement.addEventListener("click", deletePhoneHandler);
               
                    liElement.appendChild(deleteBtnElement);
                    ulPhoneBookElement.appendChild(liElement);
                })
            })
    }

    loadBtnElement.addEventListener("click", getAllPhonesHandler);
}

attachEvents();
