import React from 'react';
import { getMovieReviews } from './GetTopMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function getMovies(movieId) {
      try {
        const responce = await getMovieReviews(movieId);
        setReviews(responce.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies(movieId);
  }, [movieId]);

  if (!reviews || reviews.length === 0) {
    return <p>There are no reviews yet</p>;
  }
  return (
    <ul>
      {reviews.map(element => (
        <li key={element.id}>
          <p>Author: {element.author}</p>
          <br></br>
          {element.content}
          <br></br>
          {element.created_at}
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
