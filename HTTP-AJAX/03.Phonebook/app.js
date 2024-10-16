function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/phonebook";

    const ulPhoneBookElement = document.getElementById("phonebook");
    const loadBtnElement = document.getElementById("btnLoad");
    const createBtnElement = document.getElementById("btnCreate");
    const [personInputElement, phoneInputElement] = document.querySelectorAll("input[type=text]");

    async function customFetch(url, options){
        return fetch(url, options)
            .then(response => response.json());
    }
    
    function getAllPhonesHandler(){
        customFetch(baseUrl)
            .then(result => {
                ulPhoneBookElement.textContent = "";
                console.log(Object.values(result));
                Object.values(result).forEach(({person, phone, _id}) => {
                    const liElement = document.createElement("li");
                    liElement.textContent = `${person}: ${phone}`;

                    const deleteBtnElement = document.createElement("button");
                    deleteBtnElement.textContent = "Delete";
                    deleteBtnElement.addEventListener("click", async () => {
                        try {
                            const response = await customFetch(`${baseUrl}/${_id}`, {
                                method: "DELETE",            
                            }); 
                
                            liElement.remove();
                        } catch (error) {
                            console.log(error);
                        }  
                    });
               
                    liElement.appendChild(deleteBtnElement);
                    ulPhoneBookElement.appendChild(liElement);
                })
            })
    }

    function createPhoneHandler(){
        customFetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                person: personInputElement.value,
                phone: phoneInputElement.value
            })
        }).then(() => {
            personInputElement.value = "";
            phoneInputElement.value = "";
            getAllPhonesHandler();
        });
    }

    loadBtnElement.addEventListener("click", getAllPhonesHandler);
    createBtnElement.addEventListener("click", createPhoneHandler);
}

attachEvents();
