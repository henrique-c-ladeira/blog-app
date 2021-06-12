import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, BioText, Container, ImageContainer, Text } from './card.styled';
import { ActivityIndicator } from '../activity-indicator';

export const Card = ({ name, avatar, bio, loading, error }) => (
  <Container>
    {loading ? (
      <ActivityIndicator />
    ) : (
      <>
        {name && <Text>{name}</Text>}
        <ImageContainer>
          <Avatar src={avatar} />
        </ImageContainer>
        {error ? <BioText error={error}>Ops! Ocorreu um erro...</BioText> : null}
        <BioText>{bio}</BioText>
      </>
    )}
  </Container>
);

Card.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  bio: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

Card.defaultProps = {
  name: '',
  avatar: '',
  bio: '',
  loading: false,
  error: false,
};
