import {
  Card,
  CardImage,
  Cards,
} from 'components/MoviesCards/MoviesCards.styled';
import styled from 'styled-components';

export const CardsCast = styled(Cards)`
  margin-top: 20px;
`;

export const CardCast = styled(Card)`
  & div {
    padding: 10px 5px;
  }
`;

export const CardImageCast = styled(CardImage)``;
