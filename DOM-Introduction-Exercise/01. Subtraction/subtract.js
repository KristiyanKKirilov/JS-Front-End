function subtract() {
    const [firstNumber, secondNumber] = document.querySelectorAll('input[type="text"]');
    const result = document.getElementById('result');
    result.innerText = firstNumber.value - secondNumber.value;
}
