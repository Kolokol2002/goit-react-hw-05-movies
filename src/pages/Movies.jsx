import { URL_IMAGE, getMovies } from 'api/moviesAPI';
import { useQuery } from 'react-query';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

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

  const { results, page, total_pages, total_results } = data.data;

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input defaultValue={valueInput} name="search" type="text"></input>
          <button type="submit">Search</button>
        </form>
      </div>

      {valueInput && (
        <div>
          <ul>
            {results?.map(({ title, overview, poster_path, id }) => (
              <li key={id}>
                <img
                  src={
                    poster_path
                      ? `${URL_IMAGE}${poster_path}`
                      : 'https://via.placeholder.com/300x450'
                  }
                  alt={title}
                />
                <Link to={`${id}`} state={{ from: location }}>
                  <h2>{title}</h2>
                </Link>
                <p>{overview}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Movies;
