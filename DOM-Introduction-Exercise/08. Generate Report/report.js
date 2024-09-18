function generateReport() {
    const theadRows = document.querySelectorAll('thead tr th');
    const tbodyRows = document.querySelectorAll('tbody tr');
    const outputEl = document.querySelector('#output');
    const checkedInputEls = [...theadRows]
    .map((x, i) => ({input: x.children[0], index: i }))
    .filter(x => x.input.checked);

    const outputData = [...tbodyRows].map((tr) => {
        return checkedInputEls.reduce((acc, curr) => {
            acc[curr.input.name] = tr.children[curr.index].textContent;
            return acc;
        }, {});
    });
    outputEl.value = JSON.stringify(outputData);
}
