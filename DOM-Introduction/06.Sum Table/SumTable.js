function sumTable() {
    let allEvenTdElements = document.querySelectorAll('tbody tr td:nth-child(even)');
    const sumElement = document.getElementById('sum');
    let totalSum = 0;
    for (const element of allEvenTdElements) {
        if(element.textContent){
            totalSum += Number(element.textContent);
        }       
    }

    sumElement.textContent = totalSum;
   
}
