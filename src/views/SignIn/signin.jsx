/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
import React, { useCallback, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

import { Container } from './style';

function SignIn() {
  const [data, setData] = useState({});

  const history = useHistory();
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      api
        .post('sign-in', data)
        .then((response) => {
          const sessionToken = JSON.stringify(response.data);
          console.log(sessionToken);
          sessionStorage.setItem('@segwareServiceToken', sessionToken);
          history.push('/');
        })
        .catch((e) => {
          toast.error('Ops, seu login falhou, tente novamente.', {
            hideProgressBar: false
          });
        });
    },
    [data, history]
  );

  return (
    <Container>
      <div className="card">
        <h5>Faça o seu login para acessar o melhor blog do Brasil!</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <input type="submit" value="Logar" />
        </form>
        <Link to="/signup">Clique aqui para cadastrar</Link>
      </div>
    </Container>
  );
}

export default SignIn;
