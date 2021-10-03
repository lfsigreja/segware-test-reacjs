import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import Header from '../../Components/Header/header';
import tokenOnStorageValidade from '../../services/tokenOnStorageValidate';
import post from '../../services/postService';

import { Container } from './style';

function NewPost() {
  const [content, setContent] = useState('');
  const history = useHistory();

  const token = sessionStorage.getItem('@segwareServiceToken');
  if (!token) {
    history.push('/signin');
  }

  const onError = (e) => {
    toast.error('Ops, algo deu errado, tente novamente.', {
      hideProgressBar: false
    });
  };

  const onSuccess = () => {
    toast.success('Post realizado com sucesso', {
      hideProgressBar: false
    });
    history.push('/');
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      post(content, { onSuccess, onError });
    },
    [content]
  );

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <h1>Conteudo</h1>
          <textarea
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
