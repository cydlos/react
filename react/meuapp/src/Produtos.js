import React from "react";
import App from "./App";
import Titulo from "./Titulo";
import Produto from "./Produto";

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = ({ nome, ...props }) => {
  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...props} />
      ))}
    </section>
  );
}

export default Produtos;