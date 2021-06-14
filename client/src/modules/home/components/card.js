import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import { Author, Content, DateText, Container, Title } from '../styles';

const Card = ({ title, date, content, author}) => (
  <Container>
        <Title>{title}</Title>
        <DateText>{date}</DateText>
        <Hidden mdUp >
          <Content>{`${content.substring(0, 200)} [...]`}</Content>
        </Hidden>
        <Hidden smDown >
          <Content>{content}</Content>
        </Hidden>
        <Author>{author}</Author>
  </Container>
);

Card.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

Card.defaultProps = {
  title: 'Noname',
  date: 'No date',
  content: 'No Content',
  author: '',
};

export default Card;
