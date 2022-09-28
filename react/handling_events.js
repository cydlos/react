const Produtos = () => {
  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Casaco</button>
      <button onClick={handleClick}>Sapato</button>
    </div>
  );
};
