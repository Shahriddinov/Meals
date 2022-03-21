import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppContext } from './components/context/context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContext>
      <App />
    </AppContext>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

