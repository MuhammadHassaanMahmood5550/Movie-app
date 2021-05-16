// const Movie = ({title, poster_path, overview, vote_average}) => {
//      const IMG_API = "https://image.tmdb.org/t/p/w1280";
//     return ( 
//         <div className="for-movie">
//              <img src={IMG_API + poster_path} alt={title} />
             
//         </div>
//      );
// }
 
// export default Movie;

const Movie = ({data}) => {
     const IMG_API = "https://image.tmdb.org/t/p/w1280";
     const randomImage = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80";
     // const videos = "https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=0c5bef9ce8efd7a95b81bb04f6a99f7a&language=en-US";
    return ( 
        <div className="for-movie">
             {/* bcz sometimes we do not get movie by abi */}
             {data.poster_path ? <img src={IMG_API + data.poster_path} alt={data.title} /> : 
             <img  src={randomImage} alt={data.title}/>
             }
             {/* <img src={IMG_API + data.poster_path} alt={data.title} /> */}
           
             <div className="movie-info">
                  <h3>{data.title}</h3>
                  <span className="bg-secondary text-success rounded font-weight-bolder px-1">{data.vote_average}</span>
             </div>

             <div className="overlay">
                      <h2>Overview:</h2>
                       <p>{data.overview}</p>
                  </div>
           
        </div>
     );
}
 
export default Movie;