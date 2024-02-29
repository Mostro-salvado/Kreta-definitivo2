import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';

// Aumentar el límite de los listeners de eventos
// Puedes ajustar el número según sea necesario
require('events').EventEmitter.defaultMaxListeners = 30;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
