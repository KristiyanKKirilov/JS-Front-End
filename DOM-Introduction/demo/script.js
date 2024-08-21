const movieListElement = document.getElementById('movie-list');
console.log(movieListElement);

let headingsElements = document.getElementsByClassName('heading');

for (const headingElement of headingsElements) {
    console.log(headingElement.textContent);
}

const movieListElements = document.getElementsByTagName('li');//returns html collection (live)
console.log(movieListElements);
for (const movieList of movieListElements) {
    console.log(movieList.textContent);
}

const favouriteMovieElement = document.querySelector('#movie-list li');
console.log(favouriteMovieElement.textContent);
console.log('----');
const favouriteMovieElement2 = document.querySelector('ul > li');
console.log(favouriteMovieElement2.textContent);
console.log('----');
const favouriteMovieElement3 = document.querySelector('ul li:nth-child(1)');
console.log(favouriteMovieElement3.textContent);
console.log('----');

const allMovies = document.querySelectorAll('#movie-list li'); //returns static node list - can be foreached
console.log(allMovies);
console.log(allMovies.forEach(m => console.log(m.textContent)));

const liveNodeListMovies = document.getElementById('movie-list').children;//returns live node list 
console.log(liveNodeListMovies);

const liveNodeList = movieListElements.childNodes;//live nodelist
console.log(liveNodeList);


