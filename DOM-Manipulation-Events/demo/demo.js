function add()
{
    //Select movie list element
    const movieListElement = document.querySelector('ul.movie-list');

    //Create new li element
    const newMovieElement = document.createElement('li');

    //Add content
    newMovieElement.textContent = 'The Godfather';

    //Append element
    movieListElement.appendChild(newMovieElement); //add to the end of the collection (as last child)
    movieListElement.append(newMovieElement); //add to the end of the collection (as last child)
    movieListElement.prepend(newMovieElement); //add to the beginning of the collection (as first child)
}

