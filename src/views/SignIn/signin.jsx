/* eslint-disable implicit-arrow-linebreak */
import React, { useCallback, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import Header from '../../Components/Header/header';
import { Container } from './style';
import login from '../../services/loginService';

function SignIn() {
  const [data, setData] = useState({});
  const history = useHistory();

  const onError = (e) => {
    toast.error('Ops, seu login falhou, tente novamente.', {
      hideProgressBar: false
    });
  };

  const onSuccess = () => history.push('/');

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      login(data, { onError, onSuccess });
    },
    [data]
  );

  return (
    <>
      <Header />
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
    </>
  );
}

export default SignIn;
