import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Header() {
  return (
          <nav>
              <Link to={"/"}>Home</Link>
              <Link to={"/contato"}>Contatos</Link>
          </nav>
  )
}

export default Header;