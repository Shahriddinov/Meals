import React from 'react';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'

function App(props) {
    return (
        <div>
          <Routes>
          <Navbar />
          <Route path="/" element={}/>
          <Route path="/categories" element/>
          <Route path="/random" element/>
         <Footer/>
          </Routes>
         
        </div>
    );
}

export default App;