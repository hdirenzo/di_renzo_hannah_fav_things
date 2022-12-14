// Grab all the movie buttons by their class name
const buttons = document.querySelectorAll('.movie-button')

for (const button of buttons) {
    button.addEventListener('click', handleMovieClick)
}

function handleMovieClick(event) {

    const movieTitle = event.target.textContent


    fetch('json/data.json')
        // Fetch finished (resolved)
        .then(function (data) {
            return data.json()
        })

        .then(function (movies) {
            // create some HTML content with the data 
            const movie = movies[movieTitle]
            const movieCardEl = createMovieCard(movie)
            console.log(movieCardEl)
        })
        // dont forget the error 
        .catch(function (error) {
            alert('Error: ' + error.message)
        })
}

/**
 * 
 * 
 * @param {Object} movie
 * @returns {HTMLDivElement}
 */
function createMovieCard(movie) {
    // const movieCard = document.createElement('div')
    // movieCard.innerHTML =
    //     `<div class="movie-card">
    //         <h2 class="movie-card__title">${movie.name}</h2>
    //         <p>${movie.desc}</p>
    //         <iframe width="560" height="315" src="${movie.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //     </div>`

    document.getElementById("movie_details")
        .innerHTML = `<div class="movie-card">
    <h2 class="movie-card__title">${movie.name}</h2>
    <p>${movie.desc}</p>
    <p>${movie.year}</p>
    <p>${movie.rating}</p>
    <iframe width="560" height="315" src="${movie.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>`

    // document.body.appendChild(movieCard)//

    //     return movieCard

    //pls switch moviessss
}


