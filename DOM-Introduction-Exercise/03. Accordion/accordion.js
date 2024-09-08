function toggle() {
    const buttonEl = document.querySelector('.head span.button');
    const extraEl = document.querySelector('#extra');
    const { display } = extraEl.style;
    const isHidden = display === 'none';

    if (isHidden || !extraEl.style.display) {
        extraEl.style.display = 'block';
        buttonEl.textContent = 'Less';
    }
    else {
        extraEl.style.display = 'none';
        buttonEl.textContent = 'More';
    }
}
