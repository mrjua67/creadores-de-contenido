import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Usa mayúscula para coincidir con el nombre del archivo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
