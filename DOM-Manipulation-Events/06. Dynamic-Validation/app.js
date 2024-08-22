function validate() {
    const inputEmailElement = document.getElementById('email');
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
    inputEmailElement.addEventListener('change', (e) => {
            if(pattern.test(e.currentTarget.value)){
                e.currentTarget.classList.remove('error');
            }   
            else{
                e.currentTarget.classList.add('error');
            }     
    })
}
