import { URL_IMAGE, getCast } from 'api/moviesAPI';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const { data, isError, isLoading, error } = useQuery('cast', () =>
    getCast(movieId)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const movieCasts = data.data.cast;

  return (
    <div>
      <ul>
        {movieCasts?.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `${URL_IMAGE}${profile_path}`
                  : 'https://via.placeholder.com/300x450'
              }
              alt=""
            />
            <h3>Name: {name}</h3>
            <span>Character: {character}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
