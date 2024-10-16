function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/messenger";
    const textAreaElement = document.getElementById("messages");
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
        }).then(() => {
            authorInputElement.value = "";
            messageInputElement.value = "";
        });
    }

    function appendMessages(messagesResult){
        textAreaElement.textContent = Object.values(messagesResult)
            .map(({author, content}) =>`${author}: ${content}`).join("\n");
        }

    function getAllMessagesHandler(){
        customFetch(baseUrl)
            .then(result => appendMessages(result));
    }

    submitBtnElement.addEventListener("click", createMessageHandler);   
    refreshBtnElement.addEventListener("click", getAllMessagesHandler);
}

attachEvents();
