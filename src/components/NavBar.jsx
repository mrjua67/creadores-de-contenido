import React from 'react';
import './Nav.css';  // Archivo de estilos
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <header className='navbar'>
        <nav>
          <ul className="menu">
            <li><Link to ="/">Inicio</Link></li>
            <li><Link to ="/galeria">Galería</Link></li>
            <li><Link to ="/contacto">Contacto</Link></li>
          </ul>
      </nav>  
    </header>

  );
};

export default Nav;
