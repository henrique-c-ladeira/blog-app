import React from 'react';
import { useSelector } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container, HeaderItem, Status } from './header.styled';

export const Header = () => {
  const title = useSelector(state => state.posts)

  return(
    <Container>
      <HeaderItem><MdAddCircleOutline /></HeaderItem>
      <Status>Login</Status>
    </Container>
  )
  };