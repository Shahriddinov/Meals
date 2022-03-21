import React from 'react';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage'
import Categories from './components/Categories/Categories'
import RandomMeal from './components/RandomMeal/RandomMeal'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'

function App(props) {
    return (
        <div>
          <Navbar />
          <Routes>
          
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/categories" element={<Categories/>}/>
          <Route exact path="/random" element={<RandomMeal/>} />
         <Footer/>
          </Routes>
         
        </div>
    );
}

export default App;