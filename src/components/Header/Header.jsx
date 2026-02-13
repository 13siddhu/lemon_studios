import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">🌿</div>
          <span className="logo-text">Planto.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <a href="#home" className="nav-link active">Home</a>
          <div className="nav-dropdown">
            <a href="#plant-types" className="nav-link">
              Plant Types <ChevronDown size={16} />
            </a>
          </div>
          <a href="#more" className="nav-link">More</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Desktop Actions */}
        <div className="header-actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="icon-btn" aria-label="Shopping Bag">
            <ShoppingBag size={20} />
          </button>
          <button 
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#home" className="mobile-link">Home</a>
          <a href="#plant-types" className="mobile-link">Plant Types</a>
          <a href="#more" className="mobile-link">More</a>
          <a href="#contact" className="mobile-link">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
