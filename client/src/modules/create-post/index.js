import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Button, TitleField, MultilineTextField } from './styles';

const createPost = () => {
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
            await axios.post(
              '/posts',
              {
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
        Adicionar
      </Button>
    </Container>
  );
};

export default createPost;
