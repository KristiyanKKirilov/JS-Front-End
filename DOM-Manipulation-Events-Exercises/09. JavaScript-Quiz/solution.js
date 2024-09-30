function solve() {
  const sectionEls = document.querySelectorAll('section');
  const resultEl = document.querySelector('.results-inner  h1');

  const correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  const userAnswers = [];

  function onclickHandler(event){

    const sectionToHide = sectionEls[userAnswers.length]; 
    const sectionToShow = sectionEls[userAnswers.length + 1]; 

    if(sectionToHide){
      sectionToHide.style.display = 'none';
    }
    if(sectionToShow){
      sectionToShow.style.display = 'block';
    }   

    userAnswers.push(event.target.textContent.trim());

    if(userAnswers.length === correctAnswers.length){
      let countOfCorrectAnswers = 0;
      userAnswers.forEach((curr, i) => {
        if(curr === correctAnswers[i]){
          countOfCorrectAnswers++;
        }
      });

      if(countOfCorrectAnswers === correctAnswers.length){
        resultEl.textContent = 'You are recognized as top JavaScript fan!';
      }
      else{
        resultEl.textContent = `You have ${countOfCorrectAnswers} right answers`;
      }

      document.querySelector('ul#results').style.display = 'block';
    }
  }
  document.querySelectorAll('.answer-wrap')
          .forEach((wrapEl) => wrapEl.addEventListener('click', onclickHandler));

   
}
