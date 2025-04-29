import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BeakerIcon, ShoppingCartIcon, MenuIcon, Search, UserCircle } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useCartStore(state => state.items);
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const token = localStorage.getItem('token');

  const handleSearchClick = () => {
    navigate('/products');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/home" className="flex items-center space-x-2">
            <BeakerIcon className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Vidhi Enterprises</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="hover:text-blue-400 transition">Products</Link>
            <Link to="/safety" className="hover:text-blue-400 transition">Safety Data</Link>
            <Link to="/bulk-orders" className="hover:text-blue-400 transition">Bulk Orders</Link>
            <Link to="/support" className="hover:text-blue-400 transition">Support</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleSearchClick}
              className="hover:text-blue-400 transition"
              aria-label="Search products"
            >
              <Search className="h-6 w-6" />
            </button>
            <button 
              onClick={() => navigate('/cart')}
              className="relative"
              aria-label="Shopping cart"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            {token ? (
              <div className="relative group">
                <button className="hover:text-blue-400 transition">
                  <UserCircle className="h-6 w-6" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="hover:text-blue-400 transition">
                <UserCircle className="h-6 w-6" />
              </Link>
            )}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              <Link to="/products" className="hover:text-blue-400 transition">Products</Link>
              <Link to="/safety" className="hover:text-blue-400 transition">Safety Data</Link>
              <Link to="/bulk-orders" className="hover:text-blue-400 transition">Bulk Orders</Link>
              <Link to="/support" className="hover:text-blue-400 transition">Support</Link>
              {!token && (
                <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
              )}
              {token && (
                <button
                  onClick={handleLogout}
                  className="text-left hover:text-blue-400 transition"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}