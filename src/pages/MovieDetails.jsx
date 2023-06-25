import { URL_IMAGE, getMovie } from 'api/moviesAPI';
import React from 'react';
import { useQuery } from 'react-query';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const { data, isError, isLoading, error } = useQuery('movie', () =>
    getMovie(movieId)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const { original_title, overview, poster_path } = data.data;

  return (
    <main>
      <div>
        <img src={`${URL_IMAGE}${poster_path}`} alt={original_title} />
        <h2>{original_title}</h2>
        <p>{overview}</p>
      </div>
      <NavLink to={'cast'}>Cast</NavLink>
      <NavLink to={'reviews'}>Reviews</NavLink>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
