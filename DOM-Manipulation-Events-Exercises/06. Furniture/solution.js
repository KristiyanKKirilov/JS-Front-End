function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const [inputTextarea, outputTextarea] = document.querySelectorAll('textarea');

  const firstTrEl = document.querySelector('tbody > tr');
  function onGenerateBtnClickHandler(){
    const inputData = JSON.parse(inputTextarea.value);
    inputData.forEach(({img, name, price, decFactor}) => {
      const currentTrClone = firstTrEl.cloneNode(true);

      //changing the image 
      currentTrClone.children[0].setAttribute('src', img);
    
    })
  }

  generateBtn.addEventListener('click', onGenerateBtnClickHandler);
}
