function solve() {
  const inputEl = document.getElementById('input');
  const outputEl = document.getElementById('output');
  const sentences = inputEl.value.split('.').filter(Boolean).map((x) => x.trim());


  function createParagraphEl(text){
    const paragraphEl = document.createElement('p');
    paragraphEl.textContent = text;
    return paragraphEl;
  }

  for(let i = 0; i < sentences.length; i+=3){
    const currentText = sentences.slice(i, i + 3).join('. ').concat('.');
    const currentParagraph = createParagraphEl(currentText);
    outputEl.appendChild(currentParagraph);
  }

} 
