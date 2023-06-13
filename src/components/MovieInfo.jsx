import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const MovieInfo = (info, location) => {
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
  } = info;

  return (
    <>
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
          User score: {vote_average} ({vote_count} votes)
        </p>
        <h3>Genres: {genres.map(genre => genre.name)}</h3>
        <p>Release date: {release_date}</p>
        <p>First air date: {first_air_date}</p>
        <p>Runtime: {runtime}</p>
        <p>Episode runtime: {episode_run_time}</p>
      </div>
      <div>
        <h2>Additional information</h2>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </div>
    </>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  info: PropTypes.object.isRequired,
};
