import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Experience from './components/pages/Experience';
import Aboutme from './components/pages/Aboutme';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/aboutme' element={<Aboutme />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
