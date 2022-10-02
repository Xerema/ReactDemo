import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router  } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
//import BackToTop from './components/BackToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Router>
        <ScrollToTop />
        <App />
    </Router>
    </>
);
