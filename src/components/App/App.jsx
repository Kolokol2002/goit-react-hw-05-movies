import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';

const Cast = lazy(() => import('components/Cast/Cast'));
const HeaderLayout = lazy(() => import('components/Header/Header'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </QueryClientProvider>
    </>
  );
};

export default App;
