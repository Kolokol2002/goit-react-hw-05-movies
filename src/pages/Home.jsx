import { getTopMovies } from 'api/moviesAPI';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import MoviesCards from 'components/MoviesCards/MoviesCards';

const Home = () => {
  const { data, isError, isLoading, error } = useQuery(
    'topMovies',
    getTopMovies
  );
  const location = useLocation();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const { results } = data.data;

  return <MoviesCards results={results} location={location} />;
};

export default Home;
