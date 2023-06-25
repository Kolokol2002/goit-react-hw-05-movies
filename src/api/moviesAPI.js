import axios from 'axios';

// const API = '002ac4cc6a036cfbbfff9a5a8ca04d0d';
const URL_API = 'https://api.themoviedb.org/3';
export const URL_IMAGE = 'https://image.tmdb.org/t/p/w300';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDJhYzRjYzZhMDM2Y2ZiYmZmZjlhNWE4Y2EwNGQwZCIsInN1YiI6IjY0OTgzMTc0ZWI3OWMyMDExYzUyNTM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-TEUfSMT22rylGVayssYVadsdZf8E1XkK7mzvSTSGBo',
  },
};

export const getTopMovies = () => {
  const URL = `${URL_API}/trending/movie/day?language=en-US`;
  const response = axios.get(URL, options);
  return response;
};

export const getMovie = movie_id => {
  const URL = `${URL_API}/movie/${movie_id}?language=en-US`;
  const response = axios.get(URL, options);
  return response;
};

export const getCast = movie_id => {
  const URL = `${URL_API}/movie/${movie_id}/credits?language=en-US`;
  const response = axios.get(URL, options);
  return response;
};

export const getReviews = movie_id => {
  const URL = `${URL_API}/movie/${movie_id}/reviews?language=en-US`;
  const response = axios.get(URL, options);
  return response;
};
