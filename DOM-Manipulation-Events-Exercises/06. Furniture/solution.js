function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const [inputTextarea, outputTextarea] = document.querySelectorAll('textarea');

  const tbodyEl = document.querySelector('tbody');
  const firstTrEl = tbodyEl.querySelector('tr');

  function appendTrForEachData({ img, name, price, decFactor }) {
    const currentTrClone = firstTrEl.cloneNode(true);
    //changing the image 
    currentTrClone.children[0].children[0].setAttribute('src', img);
    //changing the name
    currentTrClone.children[1].children[0].textContent = name;
    //changing the price 
    currentTrClone.children[2].children[0].textContent = price;
    //changing the decFactor
    currentTrClone.children[3].children[0].textContent = decFactor;
    //changing the checkbox availability
    const checkboxEl = currentTrClone.children[4].children[0];
    checkboxEl.disabled = false;
    checkboxEl.setAttribute('name', name);
    checkboxEl.setAttribute('price', price);
    checkboxEl.setAttribute('decFactor', decFactor);

    tbodyEl.appendChild(currentTrClone);
  }

  function onGenerateBtnClickHandler() {
    const inputData = JSON.parse(inputTextarea.value);
    console.log(inputData);

    inputData.forEach(appendTrForEachData);
  }

  function onBuyBtnClickHandler() {
    const allCheckedInputEl = [...document.querySelectorAll('input[type="checkbox"]')]
    .filter((inputEl) => inputEl.checked);
    console.log(allCheckedInputEl);
  }

  generateBtn.addEventListener('click', onGenerateBtnClickHandler);
  buyBtn.addEventListener('click', onBuyBtnClickHandler);
}
