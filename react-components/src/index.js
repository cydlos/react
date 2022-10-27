// Within the src directory, along with the index.js file, create a new file called App.js.
// This will be the main component for our application.
// You can use the components found in the "components" directory to build out the App component

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
