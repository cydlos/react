// Retorna o estilo em forma de uma constante

import React from 'react';

const Titulo = (props) => {
  return (
    <h1 style={{ color: "red" }}>{props.texto}</h1>
  )
}

export default Titulo
