
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/solução">Solução</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Nav;

