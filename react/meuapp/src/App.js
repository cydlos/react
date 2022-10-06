import React from 'react';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Ativo' : 'Inativo'}
    </button>
  );
};

export default App;
