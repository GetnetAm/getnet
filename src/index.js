import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/scroller/ScrollToTop';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter basename='/GetnetPortfolio'>
  <BrowserRouter>
  <React.StrictMode>
  <ToastContainer />
    < ScrollToTop />
  
    
    <App />
 
  </React.StrictMode>
  </BrowserRouter>
  
);


