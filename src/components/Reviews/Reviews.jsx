import { getReviews } from 'api/moviesAPI';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const { data, isLoading } = useQuery('reviews', () => getReviews(movieId));

  if (isLoading) {
    return <span>Loading...</span>;
  }

  const movieReviews = data.data.results;

  if (!movieReviews.length) {
    return <h3>We don't have any reviews for this movie</h3>;
  } else {
    return (
      <ul>
        {movieReviews.map(({ id, content, author }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Reviews;
