

import React, { useEffect, useState } from "react";
import "./Movie.css";
import axios from "axios";
import LoadMore from "./LoadMore";
import Search from "./Search";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [key, setKey]=useState(1)

  const navigate = useNavigate(); // Use useNavigate at the top level

  const fetchMovieData = async () => {
    // console.log(page);
    let url = "https://api.themoviedb.org/3/movie/popular";
    if (search !== "") {
      url = "https://api.themoviedb.org/3/search/movie";
    }
    const result = await axios.get(url, {
      params: {
        api_key: "923957623adda598d87bf801866141fb",
        page: page,
        query: search,
      },
    });
    if (search !== "") {
      setMovies([...result.data.results]);
    } else {
      setMovies([...movies, ...result.data.results]);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  useEffect(() => {
    fetchMovieData();
  }, [search]);

  const onLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
    fetchMovieData();
  };

  const onSearchText = (data) => {
    setSearch(data);
  };

  const onMovieClick = (movie) => {
    // console.log(movie);
    
    navigate(`/movie-details/${movie.id}`, { state: { movie } }); // Navigate to the movie details page
  };

  return (
    <div>
      <Search onTextChange={onSearchText} />
      <Title />
      <div className="movie_container">
        {movies ? console.log(movies): null}
        
        {movies.map((movie) => {
          return (
            <div
              onClick={(ev) => onMovieClick(movie)}
              className="m_item"
              key={movie.id}
            >
              <img
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <br />
              {movie.title}
              <p className="m_text">
               {movie.overview}
              </p>
              <span> Release Date: {movie.release_date} </span>
            </div>
          );
        })}
      </div>
      <LoadMore onLoadMoreClick={onLoadMoreClick} />
    </div>
  );
};

export default Movie;
