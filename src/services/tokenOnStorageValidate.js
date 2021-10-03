import React from 'react';
import { useHistory } from 'react-router';

const redirect = () => {
  const token = sessionStorage.getItem('@segwareServiceToken');
  const history = useHistory();
  if (!token) {
    history.push('/signin');
  }
};

const tokenOnStorageValidade = async () => {
  await redirect();
};

export default tokenOnStorageValidade;
