document.addEventListener('DOMContentLoaded', () => {
    fetch('movies.json')
        .then(response => response.json())
        .then(data => {
            const moviesSection = document.getElementById('movies');
            data.movies.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('movie');
                movieDiv.innerHTML = `
                    <img src="${movie.poster_path}" alt="${movie.title}">
                    <h2>${movie.title}</h2>
                    <p>Date de sortie : ${movie.release_date}</p>
                    <p>Note moyenne : ${movie.vote_average}</p>
                `;
                moviesSection.appendChild(movieDiv);
            });
        })
        .catch(error => console.error('Erreur:', error));
});
