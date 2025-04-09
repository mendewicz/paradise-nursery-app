import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductPage from './ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1536882240095-0379873feb4e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '2rem',
            color: 'white',
            textShadow: '1px 1px 3px black'
          }}>
            <h1>Paradise Nursery</h1>
            <p>Welcome to Paradise Nursery! We offer a wide selection of beautiful, healthy houseplants to brighten your home.</p>
            <Link to="/products">
              <button>Get Started</button>
            </Link>
          </div>
        } />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
