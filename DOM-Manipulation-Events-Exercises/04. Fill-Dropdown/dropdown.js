function addItem() {
    function createOptionElement(text, value){
        const option = document.createElement('option');
        option.textContent = text;
        option.value = value;

        return option;
    }
    const [textInputEl, valueInputEl] = document.querySelectorAll('input[type="text"]');
}
