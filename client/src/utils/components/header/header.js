import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './header.styled';

export const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
