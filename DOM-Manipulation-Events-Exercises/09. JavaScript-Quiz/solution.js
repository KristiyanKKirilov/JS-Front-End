function solve() {
  const correctAnswers = ["onclick"]
  const userAnswers = [];

  function onclickHandler(event){
    userAnswers.push(event.target.textContent);
  }
  document.querySelectorAll('.answer-wrap')
          .forEach((wrapEl) => wrapEl.addEventListener('click', onclickHandler));

   
}
