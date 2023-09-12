import React from "react";

const MovieScreen = ({ addMovie, movieList, page, setPage, list, removeMovie}) =>{
    const movieDisplay = movieList.map((movie, index) => {
        return <h2>{movie.original_title}</h2>;
    });
    <div className="page">
        <h1>Hyrums's Movie Theater</h1>
        <h3>Add a movie to your watchlist😎</h3>
        <div className="movie-conatiner">
            {movieDisplay}
        </div>
    </div>
}
export default MovieScreen