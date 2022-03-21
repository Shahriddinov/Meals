import React from 'react';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'

function App(props) {
    return (
        <div>
          <Routes>
          <Navbar />
          <Route path="/" element={<HomePage/>} />
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/random" element={<RandomMeals/>} />
         <Footer/>
          </Routes>
         
        </div>
    );
}

export default App;