function colorize() {
    let evenRows = document.querySelectorAll('table tr:nth-child(even)');
    console.log(evenRows);
    for (const evenRow of evenRows) {
        evenRow.style.backgroundColor = 'Teal';
    }
}
