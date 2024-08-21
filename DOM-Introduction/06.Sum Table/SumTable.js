function sumTable() {
    let allEvenTdElements = document.querySelectorAll('tbody tr td:nth-child(even):not(#sum');
    const sumElement = document.getElementById('sum');
    let totalSum = 0;
    for (const element of allEvenTdElements) {
                 totalSum += Number(element.textContent);             
    }

    sumElement.textContent = totalSum;
   
}
