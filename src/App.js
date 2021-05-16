import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from 'react';
import Movie from './components/Movie'; 

function App() {
  //searched with key
  // const API_KEY = '0c5bef9ce8efd7a95b81bb04f6a99f7a';
  // const MOVIE_IMAGE = 'https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US';


  const MOVIE_BYMAN = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0c5bef9ce8efd7a95b81bb04f6a99f7a&page=1";
  const SEARCH_MOVIE = "https://api.themoviedb.org/3/search/movie?&api_key=0c5bef9ce8efd7a95b81bb04f6a99f7a&query=";

  // const MOVIE_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=0c5bef9ce8efd7a95b81bb04f6a99f7a&language=en-US&page=1";
  // const MOVIE_NOWPLAYING = "https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1";
  // const MOVIE_UPCOMING = "https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1";
  // const MOVIE_TOPRAED = "https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1";
  //searched without key
  // const MOVIE_LISTS = 'https://api.themoviedb.org/3/movie/{movie_id}/lists?api_key=<<api_key>>&language=en-US&page=1';
  // const formovie = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
  // const searchmovie = 'https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false';
  // const images_api = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';

  const [moviesP, setMoviesP] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAPI(MOVIE_BYMAN);
  }, []);

  const getAPI = (get) => {
    fetch(get)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMoviesP(data.results);
    });
  }

//   const getPopular = async () => {
//     const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    
//     //now as we know we can't get data into javascript format so conver data into json fromat = similler to javascript object syntex.
//     const data = await response.json();
//     setMoviesA(data.results);
//     // console.log(data.results); 
//   }
// console.log(moviesA);
//   getPopular();

   const handleSubmit = (e) => {
     e.preventDefault();
    getAPI(SEARCH_MOVIE + search);
     setSearch("");
   }

  //  const callMovie = (a) => {
  //    getAPI(MOVIE_POPULAR);
  //    console.log("yes popular");
  //  }

   const callMovie = (a) => {
    fetch(`https://api.themoviedb.org/3/movie/${a}?api_key=0c5bef9ce8efd7a95b81bb04f6a99f7a&language=en-US&page=1`)
    .then((res1) => res1.json())
    .then((data1) => {
      console.log(data1);
      setMoviesP(data1.results);
    });
  }

  //  const formov = async () =>{
  //    const respo = await fetch("..");
  //    const data = await respo.json();
  //  }


  return (
    <div className="App">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <a class="navbar-brand" href="#">
    <img width="200" height="25" class="d-inline-block align-center navimg" alt=""/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto font-weight-bold">
      <li className="nav-item active">
        <a className="nav-link text-info" href="#" onClick={ () => callMovie("now_playing")}>Now Playing</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#" onClick={ () => callMovie("upcoming")}>Upcoming</a>
     </li>
      <li className="nav-item active">
        <a className="nav-link" href="#" onClick={ () => callMovie("top_rated")}>Top Rated</a>
      </li> 
      <li className="nav-item active">
        <a className="nav-link" href="#" onClick={ () => callMovie("popular")}>Popular</a>
      </li>
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
    </ul>
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       />
      <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </div>
</nav>

     {/* <form onSubmit={handleSubmit}>
       <div className="form-group">
         <input className="form-control " type="text" placeholder="Search" 
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         />
         <button className="btn btn-primary">Search</button>
       </div>
     </form> */}
    
    <div className="movie-container">
      
       {moviesP.map((cur) => (
        //  ...cur has alot of things so destructure
        //  <Movie key={cur.id} data={...cur} ></Movie>
        <Movie key={cur.id} data={cur} ></Movie>
       ))}
        
    </div>
    </div>
  );
}

export default App;
