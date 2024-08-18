// MovieCards.js
import React, { useState, useEffect } from 'react';
import MovieCard from '../moviecard/moviecard';
import { axiosInstance } from '../../netwotking/axiosinstance';

const MovieCards = ({ currentPage }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(`discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [currentPage]);

  return (
    <div className="container-fluid ms-0 px-2 me-0 d-flex justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 gy-5 mt-5">
      {movies.map(movie => (
        <MovieCard 
          title={movie.title} 
          releaseDate={movie.release_date} 
          rating={movie.vote_average} 
          imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        />
      ))}
    </div>
  );
};

export default MovieCards;
