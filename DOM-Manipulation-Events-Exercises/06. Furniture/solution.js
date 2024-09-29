function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const [inputTextarea, outputTextarea] = document.querySelectorAll('textarea');

  const tbodyEl = document.querySelector('tbody');
  const firstTrEl = tbodyEl.querySelector('tr');

  function appendTrForEachData({ img, name, price, decFactor }) {
    const currentTrClone = firstTrEl.cloneNode(true);
    //changing the image `
    const imgTd = currentTrClone.children[0];
    imgTd.children[0].setAttribute('src', img);
    imgTd.innerHTML = imgTd.innerHTML.trim();

    //changing the name
    const nameTd = currentTrClone.children[1];
    nameTd.children[0].textContent = name;
    nameTd.innerHTML = nameTd.innerHTML.trim();

    //changing the price 
    const priceTd = currentTrClone.children[2];
    priceTd.children[0].textContent = price;
    priceTd.innerHTML = priceTd.innerHTML.trim();

    //changing the decFactor
    const decFactorTd = currentTrClone.children[3];
    decFactorTd.children[0].textContent = decFactor;
    decFactorTd.innerHTML = decFactorTd.innerHTML.trim();

    //changing the checkbox availability
    const checkboxEl = currentTrClone.children[4].children[0];
    checkboxEl.disabled = false;
    checkboxEl.innerHTML = checkboxEl.innerHTML.trim();
    currentTrClone.children[4].innerHTML = currentTrClone.chidren[4].innerHTML.trim();

    checkboxEl.setAttribute('name', name);
    checkboxEl.setAttribute('price', price);
    checkboxEl.setAttribute('decFactor', decFactor);

    tbodyEl.appendChild(currentTrClone);
  }

  function onGenerateBtnClickHandler() {
    const inputData = JSON.parse(inputTextarea.value);

    inputData.forEach(appendTrForEachData);
  }

  function onBuyBtnClickHandler() {
    const outputData = [...document.querySelectorAll('input[type="checkbox"]')]
    .filter((inputEl) => inputEl.checked)
    .reduce((acc, currInputEl) => {
      const name = currInputEl.closest('tr').getAttribute('name');
      const price = currInputEl.closest('tr').getAttribute('price');
      const decFactor = currInputEl.closest('tr').getAttribute('decFactor');

      currInputEl.parentElement.innerHTML = currInputEl.parentElement.innerHTML.trim();
      
      acc.names.push(name);
      acc.totalPrice += Number(price);
      acc.totalDecFactor += Number(decFactor); 
      return acc;
    }, {names: [], totalPrice: 0, totalDecFactor: 0});

    outputTextarea.value = `Bought furniture: ${outputData.names.join(', ')}\nTotal price: ${outputData.totalPrice.toFixed(2)}\nAverage decoration factor: ${outputData.totalDecFactor / outputData.names.length}`
  }

  generateBtn.addEventListener('click', onGenerateBtnClickHandler);
  buyBtn.addEventListener('click', onBuyBtnClickHandler);
}
