import React from "react";

const Carrousel = () => {
  const textos = [{primeiro: "primeiro texto", segundo: "segundo texto"}];
  return (
    <div className="carousel_cell p-2">
      <ul style={{ fontSize: "10px", listStyleType: "none" }}>
        <li align="justify">{textos.map((texto) => console.log(texto.primeiro))}</li>
      </ul>
    </div>
  );
};

export default Carrousel;
