import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from './GetTopMovies';
import MovieList from './MovieList';
import SearchForm from './SearchForm';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    async function getMovies(query) {
      try {
        const responce = await getMoviesByName(query);
        setMovies(responce.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies(query);
  }, [searchParams]);

  return (
    <div>
      <SearchForm setSearchParams={setSearchParams} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
