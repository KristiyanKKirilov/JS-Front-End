function encodeAndDecodeMessages() {
    const [encodeBtnEl, decodeBtnEl] = document.querySelectorAll('div button');
    const [encodeTextAreaEl, decodeTextAreaEl] = document.querySelectorAll('div textarea');

    function encodeMessageHandler(){

    }

    function decodeMessageHandler(){
        
    }

    encodeBtnEl.addEventListener('click', encodeMessageHandler);
    decodeBtnEl.addEventListener('click', decodeMessageHandler);
}
