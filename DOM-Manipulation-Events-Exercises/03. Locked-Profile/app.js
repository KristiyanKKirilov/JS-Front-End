function lockedProfile() {
    const buttonEls = document.querySelectorAll('div.profile button');

    function onShowMoreBtnClickHandler(event) {
        const buttonEl = event.target;
        const unlockInputEl = buttonEl.parentElement.querySelectorAll('input[type="radio"]')[1];
        if (unlockInputEl.checked) {
            if (buttonEl.textContent === 'Show more') {
                buttonEl.parentElement.querySelector('div').style.display = 'block';
                buttonEl.textContent = 'Hide it';
            }
            else {
                buttonEl.parentElement.querySelector('div').style.display = 'none';
                buttonEl.textContent = 'Show more';
            }
        }      

    }
    buttonEls.forEach((buttonEl) => buttonEl.addEventListener('click', onShowMoreBtnClickHandler));
}
