function encodeAndDecodeMessages() {
    const [encodeBtnEl, decodeBtnEl] = document.querySelectorAll('div button');
    const [encodeTextAreaEl, decodeTextAreaEl] = document.querySelectorAll('div textarea');

    function turnIntoNextChar(char){
        const charCode = char.charCodeAt(0) + 1;
        return String.fromCharCode(charCode);
    }

    function turnIntoPreviousChar(char){
        const charCode = char.charCodeAt(0) - 1;
        return String.fromCharCode(charCode);
    }

    function encodeMessageHandler(){
        let encodeTextAreaValue = encodeTextAreaEl.value;        
        const result = encodeTextAreaValue.split('').map(ch => turnIntoNextChar(ch)).join('');
        decodeTextAreaEl.value = result;
        encodeTextAreaEl.value = '';
        
    }

    function decodeMessageHandler(){
        let decodeTextAreaValue = decodeTextAreaEl.value;
        const result = decodeTextAreaValue.split('').map(ch => turnIntoPreviousChar(ch)).join('');
        encodeTextAreaEl.value = result;
        decodeTextAreaEl.value = '';
    }

    encodeBtnEl.addEventListener('click', encodeMessageHandler);
    decodeBtnEl.addEventListener('click', decodeMessageHandler);
}
