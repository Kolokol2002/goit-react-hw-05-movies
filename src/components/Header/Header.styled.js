import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 12px;
`;

export const Header = styled.header`
  /* background-color: gray; */
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  display: block;
  padding: 20px 0;

  &.active {
    color: violet;
  }
`;
