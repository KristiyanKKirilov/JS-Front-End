function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const [inputTextarea, outputTextarea] = document.querySelectorAll('textarea');

  function onGenerateBtnClickHandler(){
    console.log(inputTextarea.value);
  }

  generateBtn.addEventListener('click', onGenerateBtnClickHandler);
}
