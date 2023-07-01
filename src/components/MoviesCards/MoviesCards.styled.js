import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Cards = styled.ul`
  display: flex;
  margin: 0;
  padding: 20px 50px;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 200px;
  border: solid 2px black;
  border-radius: 10px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;

  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  &:hover {
    transform: scale(1.05);
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
  height: 100%;

  & h2 {
    display: block;
    padding: 10px 5px;
    font-size: 15px;
  }

  & div {
    height: 300px;
    overflow: hidden;
  }
`;
