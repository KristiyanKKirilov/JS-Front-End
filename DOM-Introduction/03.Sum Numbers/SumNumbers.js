function calc() {
   const firstNum = Number(document.getElementById('num1').value);
   const secondNum = Number(document.getElementById('num2').value);
   let result = document.getElementById('sum');
   result.value = firstNum + secondNum;
}
