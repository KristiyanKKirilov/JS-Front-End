function create(words) {
   const divContentEl = document.getElementById('content');

   function createWordStructute(word){
      const pEl = document.createElement('p');
      const divEl = document.createElement('div');

      pEl.textContent = word;
      pEl.style.display = 'none';

      divEl.appendChild(pEl);

      return divEl;
   }
   words.forEach((word) => {
      const divEl = createWordStructute(word);

      divEl.addEventListener('click', () => {
         divEl.children[0].style.display = 'block';
         //event.target.children[0].style.display = 'block';
      });
      divContentEl.appendChild(divEl);      
   });
}
