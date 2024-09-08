function search() {
   const townEls = document.querySelectorAll('#towns li');
   const resultEl = document.querySelector('#result');
   function getMatchElements(input, elements) {
      return [...elements]
      .filter(x => x.textContent.toLowerCase().includes(input.toLowerCase()));
   }

   function clearPreviousMatches(){
      townEls.forEach(el => {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = 'none';
      })
   }

   clearPreviousMatches();
   const [inputEl] = document.getElementsByTagName('input');
   const matchElements = getMatchElements(inputEl.value, townEls);
   matchElements.forEach(matchEl => {
      matchEl.style.fontWeight = 'bold';
      matchEl.style.textDecoration = 'underline';
   })

   resultEl.textContent =  `${matchElements.length} matches found`;
}
