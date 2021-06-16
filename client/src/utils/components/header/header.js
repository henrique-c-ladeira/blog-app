import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { IconButton, Button, Drawer, TextField } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import AddBoxIcon from '@material-ui/icons/AddBox';
import HomeIcon from '@material-ui/icons/Home';
import { Container, HeaderText, ButtonWrapper, Wrapper, ErrorText, LoginText } from './header.styled';
import { asyncAuth } from '../../../store/ducks/authenticate';
import { ActivityIndicator } from '../activity-indicator';

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { name, error, isLoading } = useSelector(state => state.user)

  const [openLogin, setOpenLogin] = useState(false);
  const [credentials, setCredentials] = useState({email: '', password: ''});

  return(
    <Container>
      {name &&
      <div>
      <Hidden mdUp>
        <IconButton onClick={() => {
          history.push('/create-post')
        }}><AddBoxIcon /></IconButton>
      </Hidden>

      <Hidden smDown>
        <Button 
        variant="contained"
        onClick={() => {
          history.push('/create-post')
        }}>Nova Publicação</Button>
      </Hidden>
      </div>}

      <div>
      <Hidden mdUp>
        <IconButton onClick={() => {
          history.push('/')
        }}><HomeIcon /></IconButton>
      </Hidden>

      <Hidden smDown>
        <Button 
        variant="contained"
        onClick={() => {
          history.push('/')
        }}>Página Inicial</Button> 
      </Hidden>
      </div>

      {name 
        ? 
          <HeaderText> Olá, {name}</HeaderText>
        :
          <Button onClick={() => setOpenLogin(true)}>Login</Button>
      }
      
      <Drawer anchor='top' open={openLogin && !name} onClose={() => setOpenLogin(false)}>
        <Wrapper>
        <LoginText>Realize seu Login</LoginText>
        <TextField value={credentials.email} onChange={(event) => setCredentials({...credentials, email: event.target.value})} label="email" type="email" variant="filled" />
        <TextField value={credentials.password} onChange={(event) => setCredentials({...credentials, password: event.target.value})} label="password" type="password" variant="filled" />
        {error && <ErrorText> Ocorreu um erro. Confira suas credenciais ou sua conexão com a internet.</ErrorText>}
        {isLoading && <ActivityIndicator />}
        <ButtonWrapper>
          <Button onClick={() => {
            dispatch(asyncAuth(credentials.email, credentials.password))
          }}
          > Login </Button>
          <Button onClick={() => setOpenLogin(false)}> Sair </Button>
        </ButtonWrapper>
        </Wrapper>
      </Drawer>
    </Container>
  )
  };