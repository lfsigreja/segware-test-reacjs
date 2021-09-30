import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from './style';

function Header() {
  return (
    <NavBar>
      <Link to="/"> Segware Blog </Link>
      <Link to="/newpost">Novo Post</Link>
      <Link to="/signin">Entrar</Link>
    </NavBar>
  );
}

export default Header;
