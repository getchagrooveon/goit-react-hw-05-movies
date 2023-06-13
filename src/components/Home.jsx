import React from 'react';
import { useEffect, useState } from 'react';
import { getTopMovies } from './GetTopMovies';
import { MovieList } from './MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const topList = await getTopMovies();
        setMovies(topList.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
