
//const div_data = document.getElementById('data');

//const data = document.getElementById('data')
/*axios.get("http://localhost:8002/api/posts")
.then(response => response.data)
.then(data => data.results.map(item => {
    const title = document.createElement('h3')
    //const overview = document.createElement('p')
    

    title.innerText = item.title
    title.classList.add('title')
    div_data.appendChild(title);
   
//console.log(item.title)
}));
const div_movies = document.getElementById('data');
axios.get("http://localhost:8002/api/posts")
.then(response => response.data)
.then(data => data.results.map(item => {
   // const title = document.createElement('h3')
    const overview = document.createElement('p')
    const media_type = document.createElement('h5');
    

    overview.innerText = item.overview
    overview.classList.add('overview')
    div_movies.appendChild(overview);
}));*/
const getMoviesServeur = async () => {
    const movies = await axios.get("http://localhost:8002/api/posts");

    const row_results = document.getElementById('films_movies');
    
    movies.data.results.forEach(movie => {
        const card = document.createElement('section');
       
        const cardBody = document.createElement('div');
       
        const title = document.createElement('h2');

        const release_date = document.createElement('h5');
        
        const poster_path = document.createElement('img');
        const button = document.createElement('btn');

        poster_path.src = movie.poster_path;
        title.innerText = movie.title;
        release_date.innerText = movie.release_date;
        console.log(movie)
        // btn for delete action
        //const deleteBtn = document.createElement('button');
        // set id card for each item to be able to target it
        card.id = `movie-${movie.id}`;
        // set classes for each element
        // all classes used here are bootstrap classes
        card.classList.add('card');
        card.classList.add('col-lg-3');
        card.classList.add('col-md-3');
        card.classList.add('col-sm-12');
        card.classList.add('my-2');
        cardBody.classList.add('card-body');
        title.classList.add('card-title');
        release_date.classList.add('card-text');
        button.classList.add('btn');
        button.classList.add('btn-primary');

        button.innerText = "hello"
        //deleteBtn.classList.add('btn');
        //deleteBtn.classList.add('btn-danger');
        // set text or value for each element
        //deleteBtn.value = movies.id;
        // deleteBtn.innerText = 'Delete';
        //title.innerText = movies.name;
        //categorie.innerText = movies.categories;
        // listenning click event on delete button
        //deleteBtn.onclick = (e) => {
            // call deleteItem function with id of the item if delete button is clicked
            //deleteItem(e.target.value);
        //  }
        // append each element to the card body
        //cardBody.appendChild(poster_path);
        cardBody.appendChild(poster_path);
        cardBody.appendChild(title);
        cardBody.appendChild(release_date);
        cardBody.appendChild(button);
      //  cardBody.appendChild(deleteBtn);
        card.appendChild(cardBody);
        
        row_results.appendChild(card);

        });
        document.getElementById('films_movies').appendChild(movies);
}

getMoviesServeur(); 


const getMoviesMyServeur = async () => {
    const move = await axios.get("http://localhost:8002/api/posts");

    const row_results = document.getElementById('bodi');
    
    move.data.results.forEach(move => {
        const carde = document.createElement('section');
       
        const cardBody = document.createElement('div');
       
        const title = document.createElement('h2');

        const release_date = document.createElement('h5');
        
        const poster_path = document.createElement('img');
        const button = document.createElement('btn');

        poster_path.src = move.poster_path;
        title.innerText = move.title;
        release_date.innerText = move.release_date;
        console.log(move)
        // btn for delete action
        //const deleteBtn = document.createElement('button');
        // set id card for each item to be able to target it
        card.id = `movie-${move.id}`;
        // set classes for each element
        // all classes used here are bootstrap classes
        card.classList.add('card');
        card.classList.add('col-lg-3');
        card.classList.add('col-md-3');
        card.classList.add('col-sm-12');
        card.classList.add('my-2');
        cardBody.classList.add('card-body');
        title.classList.add('card-title');
        release_date.classList.add('card-text');
        button.classList.add('btn');
        button.classList.add('btn-primary');

        button.innerText = "hello"
        //deleteBtn.classList.add('btn');
        //deleteBtn.classList.add('btn-danger');
        // set text or value for each element
        //deleteBtn.value = movies.id;
        // deleteBtn.innerText = 'Delete';
        //title.innerText = movies.name;
        //categorie.innerText = movies.categories;
        // listenning click event on delete button
        //deleteBtn.onclick = (e) => {
            // call deleteItem function with id of the item if delete button is clicked
            //deleteItem(e.target.value);
        //  }
        // append each element to the card body
        //cardBody.appendChild(poster_path);
        cardBody.appendChild(poster_path);
        cardBody.appendChild(title);
        cardBody.appendChild(release_date);
        cardBody.appendChild(button);
      //  cardBody.appendChild(deleteBtn);
        card.appendChild(cardBody);
        
        row_results.appendChild(card);

        });
        document.getElementById('bodi').appendChild(move);
}

getMoviesServeur(); 


    

