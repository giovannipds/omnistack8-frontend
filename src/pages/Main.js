import React from 'react';

import logo from '../assets/logo.svg';

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="" />
          <footer>
            <strong>Filipe Deschamps</strong>
            <p>Programador e cantor sertanejo nos tempos livres.</p>
          </footer>
        </li>
      </ul>
    </div>
  );
}
