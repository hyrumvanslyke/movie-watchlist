import React from "react";

const MovieScreen = ({ movieList, page, setPage, list}) =>{
    const movieDisplay = movieList.map((movie, index) => {
        return <h2>{movie.original_title}</h2>;
    });
    <div className="page">
        <h1>Hyrums's Movie Theater</h1>
        <h3>Add a movie to your watchlist😎</h3>
        <div className="movie-container">
            {movieDisplay}
        </div>
    </div>
}
export default MovieScreen