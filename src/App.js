import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import MovieScreen from "./components/MovieScreen";
import axios from "axios";
import Watchlist from "./components/Watchlist";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => setList([...list, movie]);

  const removeMovie = (movie) =>{
    const newState = list.filter((mov) =>{
      return mov !== movie
    })
    setList(newState)
  }

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      })
      .catch((error) =>{
          console.log(error)
      })
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header></Header>
      <main>
        <MovieScreen
          addMovie={addMovie}
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
          removeMovie={removeMovie}
        />
        <Watchlist list={list} removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
