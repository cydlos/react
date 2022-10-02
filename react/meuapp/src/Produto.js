import React from "react";
import App from "./App";

// Creates variable named Produto and returns a function with the name, its style and its properties.

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{ border: '1px solid', margin: '1rem 0', margin: '1rem 0', padding: '1rem'  }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
}

export default Produto;
