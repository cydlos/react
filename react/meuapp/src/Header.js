import React from 'react';
import App from './App';
import Produtos from './Produtos';

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
    </header>
  )
}

export   default   Header ;
