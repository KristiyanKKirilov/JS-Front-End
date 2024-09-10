function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const rowEls = document.querySelectorAll('table.container tbody tr');
      const input = document.querySelector('#searchField');

      function getMatchElements(input){
         return [...rowEls].filter((row) => row.textContent.toLowerCase().includes(input.toLowerCase()));
      }

      function clearPreviousMatches(){
         [...rowEls].forEach(el => {
            el.classList.remove('select');
         })
      }

      clearPreviousMatches();
      const matches = getMatchElements(input.value);

      matches.forEach(match => match.classList.add('select'));
      input.value = '';
   }
}
