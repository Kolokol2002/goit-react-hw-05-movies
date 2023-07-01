import { getMovies } from 'api/moviesAPI';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import { useQuery } from 'react-query';
import { useLocation, useSearchParams } from 'react-router-dom';

import MoviesCards from 'components/MoviesCards/MoviesCards';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const valueInput = searchParams.get('search');

  const { data, isError, isLoading, error } = useQuery(
    ['movies', valueInput],
    () => getMovies(valueInput)
  );

  const location = useLocation();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ search: e.target.children.search.value });
  };

  // const { results, page, total_pages, total_results } = data.data;
  const { results } = data.data;

  return (
    <>
      <ButtonBack linkTo={'/'} />

      <form onSubmit={onSubmit}>
        <input defaultValue={valueInput} name="search" type="text"></input>
        <button type="submit">Search</button>
      </form>

      {valueInput && <MoviesCards results={results} location={location} />}
    </>
  );
};

export default Movies;
