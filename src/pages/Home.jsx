import { URL_IMAGE, getTopMovies } from 'api/moviesAPI';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { Card, CardImage, CardLink, Cards } from './Home.styled';

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

  const { results: topMovies } = data.data;
  console.log(topMovies);
  return (
    <Cards>
      {topMovies?.map(({ id, original_title, poster_path }) => (
        <Card key={id}>
          <CardLink to={`/movies/${id}`} state={{ from: location }}>
            <CardImage
              src={`${URL_IMAGE}${poster_path}`}
              alt={original_title}
            />
            <span>{original_title}</span>
          </CardLink>
        </Card>
      ))}
    </Cards>
  );
};

export default Home;
