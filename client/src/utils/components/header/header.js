import React from 'react';
import { useSelector } from 'react-redux';
import { Container, HeaderItem, Status } from './header.styled';

export const Header = () => {
  const title = useSelector(state => state.posts)

  return(
    <Container>
      <HeaderItem>+</HeaderItem>
      <Status>Login</Status>
    </Container>
  )
  };