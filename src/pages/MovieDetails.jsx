import { URL_IMAGE, getMovie } from 'api/moviesAPI';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import React, { useRef } from 'react';
import { useQuery } from 'react-query';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  ContainerInfo,
  ContainerInfoMovie,
  ContainerMain,
  ContainerMovie,
  ImgMovie,
  LinkMovie,
  SubTitleMovie,
  TitleMovie,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  const { data, isError, isLoading, error, status } = useQuery(
    ['movie', movieId],
    () => getMovie(movieId)
  );

  const { state } = useLocation();
  const backLink = useRef(state?.from ?? '/movies');

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const {
    title,
    overview,
    poster_path,
    genres,
    production_countries,
    release_date,
    runtime,
    vote_average,
    vote_count,
  } = data.data;

  return (
    <ContainerMain>
      <ButtonBack linkTo={backLink.current}></ButtonBack>
      <ContainerInfoMovie>
        <ImgMovie
          src={
            poster_path
              ? `${URL_IMAGE}${poster_path}`
              : 'https://via.placeholder.com/300x450'
          }
          alt={title}
        />
        <ContainerMovie>
          <TitleMovie>{title}</TitleMovie>
          <span>
            IMDB: {vote_average} ({vote_count})
          </span>
          <span>
            Countries: {production_countries.map(({ name }) => name).join(',')}
          </span>
          <span>Genres: {genres.map(({ name }) => name).join(',')}</span>
          <span>Realese: {release_date}</span>
          <span>Run time: {runtime} minutes</span>
          <SubTitleMovie>{overview}</SubTitleMovie>
        </ContainerMovie>
      </ContainerInfoMovie>
      <ContainerInfo>
        <LinkMovie to={'cast'}>Cast</LinkMovie>
        <LinkMovie to={'reviews'}>Reviews</LinkMovie>
      </ContainerInfo>
      <Outlet />
    </ContainerMain>
  );
};

export default MovieDetails;
