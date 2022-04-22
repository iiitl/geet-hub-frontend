import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import audioConcat from './components/audioConcat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<audioConcat/>
    <App />
  </React.StrictMode>
);
reportWebVitals();
