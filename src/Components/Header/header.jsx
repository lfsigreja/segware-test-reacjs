import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from './style';

function Header() {
  const token = sessionStorage.getItem('@segwareServiceToken');
  // eslint-disable-next-line prettier/prettier
  const handleSignout = () => sessionStorage.removeItem('@segwareServiceToken');

  if (token) {
    return (
      <NavBar>
        <Link to="/"> Segware Blog </Link>
        <Link to="/newpost">Novo post</Link>
        <Link to="/signin" onClick={handleSignout}>
          Sair
        </Link>
      </NavBar>
    );
  }
  return (
    <NavBar>
      <Link to="/"> Segware Blog </Link>
      <Link to="/signin">Entrar</Link>
    </NavBar>
  );
}

export default Header;
