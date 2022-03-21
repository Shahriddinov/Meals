import React from 'react';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage'
import Categories from './components/Categories/Categories'
import RandomMeal from './components/RandomMeal/RandomMeal'
import {BrowserRouter,  Routes, Route} from 'react-router-dom'

function App(props) {
    return (
        <div>
         <Navbar />
         
         <Routes>
          <Route  path="/" element={<HomePage/>} />
          <Route  path="/Categories" element={<Categories/>}/>
          <Route  path="/RandomMeal" element={<RandomMeal/>} />
          </Routes>
          <Footer/>
        </div>
    );
}

export default App;