function colorize() {
    let evenRows = document.querySelectorAll('table tr:nth-child(2), table tr:nth-child(4)');
    console.log(evenRows);
    for (const evenRow of evenRows) {
        evenRow.style.backgroundColor = 'Teal';
    }
}
