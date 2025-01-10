// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import CollectionPage from './Pages/CollectionPage';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart';

const App = () => {  
  
  return (
      <Router>
        <div>
          {/* Navbar component */}
          <Header />

          {/* Routes for dynamic collection pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections/:handle" element={<CollectionPage />} />
            <Route path="/products/:handle" element={<ProductPage />} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </Router>
  );
};

// Optional: Define a simple NotFound component
const NotFound = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
    <p>The page you're looking for does not exist.</p>
  </div>
);

export default App;
