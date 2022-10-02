// Retorna o estilo em forma de uma constante

import React from 'react';
import App from './App';

const Titulo = (props) => {
  return (
    <h1 style={{ color: "red" }}>{props.texto}</h1>
  )
}

export default Titulo
