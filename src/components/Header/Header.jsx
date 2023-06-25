import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, StyledLink } from './Header.styled';

const HeaderLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to={'/'}>Home</StyledLink>
          <StyledLink to={'/movies'}>Movies</StyledLink>
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default HeaderLayout;
