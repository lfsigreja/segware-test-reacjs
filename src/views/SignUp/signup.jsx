/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import Header from '../../Components/Header/header';

import { Container } from './style';

function SignUp() {
  const [data, setData] = useState({});
  const history = useHistory();
  const handleSubmit = useCallback(
    (e) => {
      console.log(data);
      e.preventDefault();
      api
        .post('/sign-up', data)
        .then((response) => {
          console.log(response.data);
          toast.success('Cadastro Realizado com Sucesso, você será redirecionado em instantes', {
            hideProgressBar: false
          });
        })
        .catch((e) => {
          toast.error('Oops, algo não deu certo');
        });
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
            hideProgressBar: false,
            onClose: () => history.push('/')
          });
        });
    }, [data, history]
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
