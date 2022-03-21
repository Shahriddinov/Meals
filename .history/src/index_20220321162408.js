import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppContext } from './components/context/context';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
   
    <AppContext>
      <App />
    </AppContext>
    
   
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

