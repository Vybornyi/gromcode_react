import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import Home from './Home';
import Products from './Products';
import Contacts from './Contacts';
import PageNotFound from './PageNotFound';

const App = () => (
  <div className="page">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/contacts" element={<Contacts />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
