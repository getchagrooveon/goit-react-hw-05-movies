import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from './GetTopMovies';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function getMovies(movieId) {
      try {
        const responce = await getMovieCast(movieId);
        setCast(responce.cast);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies(movieId);
  }, [movieId]);

  if (!cast || cast.length === 0) {
    return <p>No cast info provided</p>;
  }
  return (
    <ul>
      {cast.map(element => (
        <li key={element.id}>
          <img
            src={
              element.profile_path
                ? `https://image.tmdb.org/t/p/w500/${element.profile_path}`
                : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
            }
            alt="{element.name}"
            width="100px"
          />
          name: {element.name}
          <br></br>
          character: {element.character}
        </li>
      ))}
    </ul>
  );
};

export default Cast;
