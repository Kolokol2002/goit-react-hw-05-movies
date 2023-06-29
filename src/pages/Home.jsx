import { getTopMovies } from 'api/moviesAPI';
import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import { NavLink, useLocation } from 'react-router-dom';

const Home = () => {
  const { data, isError, isLoading, error } = useQuery(
    'topMovies',
    getTopMovies
  );
  const location = useLocation();
  // const backLink = useRef(location.state?.from ?? '/');

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const { results: topMovies } = data.data;
  return (
    <ul>
      {topMovies?.map(({ id, original_title }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Home;
