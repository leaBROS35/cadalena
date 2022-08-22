const getMoviesServeur = async () => {
    const movies = await axios.get("http://localhost:8002/api/posts");
    const row_results = document.getElementById('films_movies');

    movies.data.results.forEach(movie => {
        const card = document.createElement('section');
        const cardBody = document.createElement('div');
        const title = document.createElement('h2');
        const release_date = document.createElement('h5');
        const poster_img = document.createElement('img');
        const a = document.createElement('a')

        a.href = "index2.html?id="+ movie.id;
        a.textContent = "voir plus";

        poster_img.src = "https://image.tmdb.org/t/p/original/"+movie.poster_path;
        title.innerText = movie.title;
        release_date.innerText = movie.release_date;
        card.id = `movie-${movie.id}`;
       
        card.classList.add('card');
        card.classList.add('col-lg-3');
        card.classList.add('col-md-3');
        card.classList.add('col-sm-12');
        card.classList.add('my-2');
        poster_img.classList.add('card-img-top');
        cardBody.classList.add('card-body');
        title.classList.add('card-title');
        release_date.classList.add('card-text');
       
        cardBody.appendChild(poster_img);
        cardBody.appendChild(title);
        cardBody.appendChild(release_date);
        cardBody.appendChild(a);
      
        card.appendChild(cardBody);
        row_results.appendChild(card);
    });
}

getMoviesServeur(); 