import { URL_IMAGE, getMovie } from 'api/moviesAPI';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const { data, isError, isLoading, error } = useQuery('movie', () =>
    getMovie(movieId)
  );

  const { state } = useLocation();
  const backLink = useRef(state?.from ?? '/movies');

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const { original_title, overview, poster_path } = data.data;

  return (
    <div>
      <ButtonBack linkTo={backLink.current}></ButtonBack>
      <div>
        <img
          src={
            poster_path
              ? `${URL_IMAGE}${poster_path}`
              : 'https://via.placeholder.com/300x450'
          }
          alt={original_title}
        />
        <h2>{original_title}</h2>
        <p>{overview}</p>
      </div>
      <div>
        <NavLink to={'cast'}>Cast</NavLink>
        <NavLink to={'reviews'}>Reviews</NavLink>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
