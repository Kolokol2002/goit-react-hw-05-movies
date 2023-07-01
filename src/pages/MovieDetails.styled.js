import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerMain = styled.div``;

export const ContainerMovie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  background-color: #cbcbcb;
  width: fit-content;
`;

export const ContainerInfoMovie = styled.div`
  display: flex;
`;

export const ImgMovie = styled.img`
  margin-right: 20px;
  margin-bottom: 30px;
`;

export const TitleMovie = styled.h2`
  margin: 0;
  padding: 0;
`;

export const SubTitleMovie = styled.p`
  max-width: 500px;
`;

export const LinkMovie = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 10px;

  transition: background-color 0.4s cubic-bezier(0.08, 0.82, 0.44, 0.91);
  &.active {
    background-color: violet;
  }
  &:hover {
    background-color: violet;
  }
`;
