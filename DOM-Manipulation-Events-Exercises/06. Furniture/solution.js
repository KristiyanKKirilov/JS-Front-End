function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const [inputTextarea, outputTextarea] = document.querySelectorAll('textarea');

  const tbodyEl = document.querySelector('tbody');
  const firstTrEl = tbodyEl.querySelector('tr');
  function onGenerateBtnClickHandler(){
    const inputData = JSON.parse(inputTextarea.value);
    console.log(inputData);

    inputData.forEach(({img, name, price, decFactor}) => {
      const currentTrClone = firstTrEl.cloneNode(true);
      //changing the image 
      currentTrClone.children[0].children[0].setAttribute('src', img);
      //changing the name
      currentTrClone.children[1].children[0].textContent = name;
      //changing the price 
      currentTrClone.children[2].children[0].textContent = price;
      //changing the decFactor
      currentTrClone.children[3].children[0].textContent = decFactor;

      tbodyEl.appendChild(currentTrClone);
    })
  }

  generateBtn.addEventListener('click', onGenerateBtnClickHandler);
}
