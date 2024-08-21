function add()
{
    //Select movie list element
    const movieListElement = document.querySelector('ul.movie-list');

    //Create new li element
    const newMovieElement = document.createElement('li');

    //Add content
    newMovieElement.textContent = 'The Godfather';

    //Append element
    movieListElement.appendChild(newMovieElement);
}
