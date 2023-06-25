import Cast from 'components/Cast/Cast';
import HeaderLayout from 'components/Header/Header';
import Reviews from 'components/Reviews/Reviews';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<Home />} />

            <Route path="movies">
              <Route index element={<Movies />} />
              <Route path=":movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
