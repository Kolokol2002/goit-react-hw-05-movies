import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { QueryClient, QueryClientProvider } from 'react-query';

import { NavLink, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/movies'}>Movies</NavLink>
        </nav>
      </header>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies">
            <Route index element={<Movies />} />
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
