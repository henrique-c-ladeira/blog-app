import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Button, TitleField, MultilineTextField } from './styles';

const editPost = ({ location }) => {
  const id = location?.search?.split('?id=')[1];
  const history = useHistory();
  const { token } = useSelector((state) => state.user);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const changeInput = (setInput) => (event) => setInput(event.target.value);

  return (
    <Container>
      <TitleField value={title} onChange={changeInput(setTitle)} label="Título" />
      <MultilineTextField value={body} onChange={changeInput(setBody)} multiline rows={20} />
      <Button
        onClick={async () => {
          try {
            await axios.put(
              '/posts',
              {
                id,
                title,
                subtitle: body,
              },
              { headers: { authorization: token } },
            );
            history.push('/');
          } catch {
            // Ignore
          }
        }}
      >
        {' '}
        Editar{' '}
      </Button>
    </Container>
  );
};

export default editPost;
