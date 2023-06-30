import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Cards = styled.ul`
  display: flex;
  margin: 0;
  padding: 0 50px;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: solid 2px black;
  border-radius: 10px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  overflow: hidden;

  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  &:hover {
    transform: scale(1.05);
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: black;

  & span {
    padding: 10px;
  }
`;
