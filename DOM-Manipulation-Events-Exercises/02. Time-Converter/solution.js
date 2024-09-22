function attachEventsListeners() {

    const secondsToMinutes = (seconds) => seconds / 60;
    const secondsToHours = (seconds) => secondsToMinutes(seconds) / 60;
    const secondsToDays = (seconds) => secondsToHours(seconds) / 24;

    function onClickHandler(event){
        const rawId = event.target.getAttribute('id');
        const inputId = rawId.replace('Btn', '');

        const inputEl = document.querySelector(`input#${inputId}`); 

        switch(inputId){
            case 'seconds': {
                document.getElementById('days').value = secondsToDays(inputEl.value);
                document.getElementById('hours').value = secondsToHours(inputEl.value);
                document.getElementById('minutes').value = secondsToMinutes(inputEl.value);
            }
        }
    }

    document.querySelectorAll('input[type="button"]').forEach((buttonEl) => {
        buttonEl.addEventListener('click', onClickHandler);
    });

}
