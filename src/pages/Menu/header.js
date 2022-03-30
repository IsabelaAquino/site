import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../img/logotipo.jpeg"
// import { Container } from './styles';

function Header() {
  return (
          <nav className="menu">
            <div className="logo">
          <picture>
            <img src={logo} alt="logo do projeto" className='imglogo'/>
          </picture>
        </div>
        <div>
          <ul>
              <Link to={"/"} className='link'>Home</Link>
              <Link to={"/contato"} className='link'>Contatos</Link>
          </ul>
        </div>
              
          </nav>
  )
}

export default Header;