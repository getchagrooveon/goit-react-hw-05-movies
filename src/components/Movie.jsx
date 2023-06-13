import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { getMovieById } from './GetTopMovies';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

export const Movie = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const id = useParams();
  const movieid = id.movieId;
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMovies(movieid) {
      try {
        const responce = await getMovieById(movieid);
        setMovieInfo(responce);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies(movieid);
  }, [movieid]);

  if (!movieInfo) {
    return <></>;
  }

  const {
    title,
    first_air_date,
    release_date,
    overview,
    poster_path,
    vote_average,
    vote_count,
    runtime,
    episode_run_time,
    genres,
  } = movieInfo;

  return (
    <div>
      <Link to={backLinkLocationRef.current}>Back</Link>
      <div>
        {<h1>{title}</h1>}
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
          }
          alt={title}
          width="500"
        />
        <h2>Overview</h2>
        <p>{overview}</p>
        <p>
          <b>User score:</b> {vote_average} ({vote_count} votes)
        </p>
        <p>
          <b>Genres:</b> <span>{genres.map(genre => ` ` + genre.name)}</span>
        </p>
        <p>
          <b>Release date:</b> {release_date || 'N/A'}
        </p>
        <p>
          <b>First air date:</b> {first_air_date || 'N/A'}
        </p>
        <p>
          <b>Runtime:</b> {runtime || 'N/A'}
        </p>
        <p>
          <b>Episode runtime:</b> {episode_run_time || 'N/A'}
        </p>
      </div>
      <div>
        <h3>Additional information</h3>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </div>
    </div>
  );
};

export default Movie;
