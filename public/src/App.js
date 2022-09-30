import * as React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Experience from './components/pages/Experience';
import Aboutme from './components/pages/Aboutme';
import Portfolio from './components/pages/Portfolio';
import Login from './components/pages/Login';
import Contact from './components/pages/Contact';
import Layout from './components/pages/Layout';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/aboutme' element={<Aboutme />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/opencv' element={<OpenCV />} />
        
        <Route path='/facebook' element={<Facebook />} />
        <Route path='/instagram' element={<Instagram />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/twitter' element={<Twitter />} />
        <Route path='/linkedin' element={<LinkedIn />} />
        <Route path='/github' element={<GitHub />} />
      </Route>
    </Routes>
  );
}

function OpenCV() {
  window.location.replace('https://drive.google.com/file/d/1lxmgQTuvGTFbZXf6b5DyeJmChoGaZtgy/view?usp=sharing');
  return null;
}

function Facebook() {
  window.location.replace('https://facebook.com');
  return null;
}

function Instagram() {
  window.location.replace('https://instagram.com');
  return null;
}

function Youtube() {
  window.location.replace('https://youtube.com');
  return null;
}

function Twitter() {
  window.location.replace('https://twitter.com');
  return null;
}

function LinkedIn() {
  window.location.replace('https://linkedin.fi');
  return null;
}

function GitHub() {
  window.location.replace('https://github.com/Xerema');
  return null;
}

export default App;
