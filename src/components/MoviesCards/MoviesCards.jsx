import { URL_IMAGE } from 'api/moviesAPI';
import {
  Card,
  CardImage,
  CardLink,
  Cards,
} from 'components/MoviesCards/MoviesCards.styled';
import React from 'react';

const MoviesCards = ({ results, location }) => {
  return (
    <Cards>
      {results.map(({ title, poster_path, id }) => (
        <Card key={id}>
          <CardLink to={`${id}`} state={{ from: location }}>
            <div>
              <CardImage
                src={
                  poster_path
                    ? `${URL_IMAGE}${poster_path}`
                    : 'https://via.placeholder.com/300x450'
                }
                alt={title}
              />
            </div>
            <h2>{title}</h2>
          </CardLink>
        </Card>
      ))}
    </Cards>
  );
};

export default MoviesCards;
