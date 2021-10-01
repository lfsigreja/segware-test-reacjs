import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import Header from '../../Components/Header/header';

import { Container } from './style';

function NewPost() {
  const [content, setContent] = useState('');

  const history = useHistory();
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const token = sessionStorage
        .getItem('@segwareServiceToken')
        .replaceAll('"', '');

      api
        .post('/feed', content, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          toast.success('Post realizado com sucesso', {
            hideProgressBar: false,
            onClose: () => history.push('/')
          });
        })
        .catch((e) => {
          toast.error('Ops, algo não deu certo');
        });
    },
    [content]
  );

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <h1>Conteudo</h1>
          <input
            placeholder="O que você gostaria de ensinar hoje?"
            onChange={(e) => setContent({ content: e.target.value })}
          />
          <input type="submit" value="Postar" />
        </form>
      </Container>
    </>
  );
}

export default NewPost;
