import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();

// Ketika state provider menyelimuti app, react pagenya menjadi blank tapi tidak menunjukkan tanda tanda error di console.
// Bug nya ada dibagian react hooks use context dan reducer