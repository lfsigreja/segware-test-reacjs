/* eslint-disable implicit-arrow-linebreak */
import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import Header from '../../Components/Header/header';
import register from '../../services/register';

import { Container } from './style';

function SignUp() {
  const [data, setData] = useState({});
  const history = useHistory();

  const onError = (e) => {
    toast.error('Ops, seu login falhou, tente novamente.', {
      hideProgressBar: false
    });
  };
  const onSuccess = (e) => {
    history.push('/');
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      register(data, { onError, onSuccess });
    },
    [data]
  );

  return (
    <>
      <Header />
      <Container>
        <div className="card">
          <h5>Cadastre-se já no blog da Segware</h5>
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
            <input type="submit" value="Cadastrar" />
          </form>
          <Link to="/signin">Já possuí conta? Clique aqui.</Link>
        </div>
      </Container>
    </>
  );
}

export default SignUp;
