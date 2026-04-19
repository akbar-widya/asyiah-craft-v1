import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Pricelist from './pages/Pricelist';
import Community from './pages/Community';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream-50 text-warm-900">
        <Navbar onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/pricelist" element={<Pricelist />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
