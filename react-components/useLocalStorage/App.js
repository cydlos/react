import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [product, setProduct] = useLocalStorage("product", "");
  function handleClick({ target }) {
    setProduct(target.innerText);
  }
  return (
    <div>
      <p>Preference: {product}</p>
      <button onClick={handleClick} style={{marginRight: "1rem"}}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
}

export default App;
