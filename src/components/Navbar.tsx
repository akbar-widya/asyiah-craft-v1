import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSettings } from '../hooks/useSettings';
import { ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import type { CartItem } from '../lib/types';
import { getCart } from '../lib/cart';

type NavbarProps = {
  onCartOpen: () => void;
};

const navLinks = [
  { label: 'Beranda', to: '/' },
  { label: 'Katalog', to: '/catalog' },
  { label: 'Pricelist', to: '/pricelist' },
  { label: 'Komunitas', to: '/community' },
];

export default function Navbar({ onCartOpen }: NavbarProps) {
  const settings = useSettings();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const updateCount = () => {
      const cart: CartItem[] = getCart();
      setCartCount(cart.reduce((sum, i) => sum + i.qty, 0));
    };
    updateCount();
    window.addEventListener('cart-updated', updateCount);
    return () => window.removeEventListener('cart-updated', updateCount);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleCaraOrder = () => {
    if (location.pathname === '/') {
      document.getElementById('cara-order')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#cara-order';
    }
    setMenuOpen(false);
  };

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-50 shadow-md' : 'bg-cream-50/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-xl font-bold text-warm-700 tracking-wide">
            Asyiah Craft
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.to)
                    ? 'text-warm-700 border-b-2 border-warm-500'
                    : 'text-warm-600 hover:text-warm-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleCaraOrder}
              className="text-sm font-medium text-warm-600 hover:text-warm-800 transition-colors duration-200"
            >
              Cara Order
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onCartOpen}
              className="relative p-2 text-warm-600 hover:text-warm-800 transition-colors"
              aria-label="Keranjang"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-warm-600 text-cream-50 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>

            <a 
              href={`https://wa.me/${settings.whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-200"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>

            <button
              className="md:hidden p-2 text-warm-600"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 px-4 py-4 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block text-sm font-medium py-2 border-b border-cream-200 ${
                isActive(link.to) ? 'text-warm-700' : 'text-warm-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleCaraOrder}
            className="block text-sm font-medium py-2 border-b border-cream-200 text-warm-600 text-left w-full"
          >
            Cara Order
          </button>

            <a 
              href={`https://wa.me/${settings.whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-full w-fit mt-2"
          >
            <MessageCircle size={16} />
            Hubungi via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
