import { getTopMovies } from 'api/moviesAPI';
import React from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { data, isError, isLoading, error } = useQuery(
    'topMovies',
    getTopMovies
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const { results: topMovies } = data.data;
  return (
    <main>
      <ul>
        {topMovies?.map(({ id, original_title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`}>{original_title}</NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
