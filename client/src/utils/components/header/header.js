import React from 'react';
import { useSelector } from 'react-redux';
import { IconButton, Button } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Container } from './header.styled';


export const Header = () => {
  const title = useSelector(state => state.posts)

  return(
    <Container>
      <Hidden mdUp>
        <IconButton><AddBoxIcon /></IconButton>
      </Hidden>
      <Hidden smDown>
        <Button variant="contained">Nova Publicação</Button>
      </Hidden>
      <Button>Login</Button>
    </Container>
  )
  };