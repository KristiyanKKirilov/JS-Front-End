function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/messenger";
    const textAreaElement = document.getElementById("messages");
    console.log(textAreaElement);
     const [authorInputElement, messageInputElement] = document.querySelectorAll("#controls div input[type=text]");
    const submitBtnElement = document.getElementById("submit");
    const refreshBtnElement = document.getElementById("refresh");
 
    async function customFetch(url, options){
        return fetch(url, options).then(response => response.json());
    }
    function createMessageHandler(){
        customFetch(baseUrl, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                author: authorInputElement.value,
                content: messageInputElement.value
            })
        });
    }

    function appendMessages(messagesResult){
        textAreaElement.value = "";
        Object.values(messagesResult).forEach(({author, content}) => {
            console.log(author);
            const pEl = document.createElement("p");
            pEl.textContent = author ? `${author}: ${content}\n`: '';
            console.log(pEl.textContent);
            textAreaElement.value += pEl.textContent ? pEl.textContent : '';
        })

        textAreaElement.value = textAreaElement.value.trimEnd();
    }

    function getAllMessagesHandler(){
        customFetch(baseUrl)
            .then(result => appendMessages(result));
    }

    submitBtnElement.addEventListener("click", createMessageHandler);   
    refreshBtnElement.addEventListener("click", getAllMessagesHandler);
}

attachEvents();
