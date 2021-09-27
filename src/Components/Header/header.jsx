import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from './style';

function Header() {
  return (
    <NavBar>
      <Link to="/"> Home </Link>
    </NavBar>
  );
}

export default Header;
