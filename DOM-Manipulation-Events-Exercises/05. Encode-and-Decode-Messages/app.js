function encodeAndDecodeMessages() {
    const [encodeBtnEl, decodeBtnEl] = document.querySelectorAll('div button');
    const [encodeTextAreaEl, decodeTextAreaEl] = document.querySelectorAll('div textarea');

    function turnIntoNextChar(char){
        const charCode = char.charCodeAt(0) + 1;
        return String.fromCharCode(charCode);
    }
    
    function encodeMessageHandler(){
        let encodeTextAreaValue = encodeTextAreaEl.value;        
        let result = encodeTextAreaValue.split('').map(ch => turnIntoNextChar(ch)).join('');
        decodeTextAreaEl.value = result;
        encodeTextAreaEl.value = '';
        
    }

    function decodeMessageHandler(){
        
    }

    encodeBtnEl.addEventListener('click', encodeMessageHandler);
    decodeBtnEl.addEventListener('click', decodeMessageHandler);
}
