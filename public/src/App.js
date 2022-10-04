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
import StableDiffusion from './components/pages/StableDiffusion';
import Gpt3 from './components/pages/Gpt3';

function OpenCV() {
  window.open('https://drive.google.com/file/d/1lxmgQTuvGTFbZXf6b5DyeJmChoGaZtgy/view?usp=sharing', '_blank');
  window.location.replace('/')
  return null;
}

function Facebook() {
  window.open('https://facebook.com', '_blank');
  window.location.replace('/')
  return null;
}

function Instagram() {
  window.open('https://instagram.com', '_blank');
  window.location.replace('/')
  return null;
}

function Youtube() {
  window.open('https://youtube.com', '_blank');
  window.location.replace('/')
  return null;
}

function Twitter() {
  window.open('https://twitter.com', '_blank');
  window.location.replace('/')
  return null;
}

function LinkedIn() {
  window.open('https://linkedin.fi', '_blank');
  window.location.replace('/')
  return null;
}

function GitHub() {
  window.open('https://github.com/Xerema', '_blank');
  window.location.replace('/')
  return null;
}

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
        <Route path='/portfolio/stablediffusion' element={<StableDiffusion />} />
        <Route path='/portfolio/gpt3' element={<Gpt3 />} />
      </Route>

        <Route path='/opencv' element={<OpenCV />} />
        <Route path='/facebook' element={<Facebook />} />
        <Route path='/instagram' element={<Instagram />} />
        <Route path='/youtube' element={<Youtube />} />
        <Route path='/twitter' element={<Twitter />} />
        <Route path='/linkedin' element={<LinkedIn />} />
        <Route path='/github' element={<GitHub />} />

    </Routes>

  );
}

export default App;
