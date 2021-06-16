import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Hidden from '@material-ui/core/Hidden';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Author, Content, DateText, Container, Title, WrapTitle } from '../styles';
import { asyncGetPosts } from '../../../store/ducks/posts';
import { asyncGetRecentPosts } from '../../../store/ducks/recent-posts';

const Card = ({ id, title, date, content, author }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <Container>
      <WrapTitle>
        <Title>{title}</Title>

        {user.name === author && (
          <>
            <IconButton
              style={{ position: 'absolute', right: '10%', bottom: '1%' }}
              onClick={() => history.push(`/edit-post?id=${id}`)}
            >
              <EditIcon />
            </IconButton>

            <IconButton
              style={{ position: 'absolute', right: '1%', bottom: '1%' }}
              onClick={async () => {
                try {
                  await axios.delete(`/posts/${id}`, { headers: { authorization: user.token } });
                  dispatch(asyncGetPosts(1));
                  dispatch(asyncGetRecentPosts());
                } catch {
                  // Ignore
                }
              }}
            >
              <DeleteForeverIcon />
            </IconButton>
          </>
        )}
      </WrapTitle>
      <DateText>{date}</DateText>
      <Hidden mdUp>
        <Content>{content}</Content>
      </Hidden>
      <Hidden smDown>
        <Content>{content}</Content>
      </Hidden>
      <Author>{author}</Author>
    </Container>
  );
};
Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

Card.defaultProps = {
  id: null,
  title: 'Noname',
  date: 'No date',
  content: 'No Content',
  author: '',
};

export default Card;
