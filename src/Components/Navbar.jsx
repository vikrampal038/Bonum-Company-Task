import React, { useState } from 'react';
import logo from '../assets/logo-01.png';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    'About Us',
    'Certification',
    'Industries',
    'Why Choose Us',
    'Quality Assurance',
    'Contact Us',
    'Product',
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-20 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-60" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link, index) => (
            <a key={index} href="#" className="hover:text-[#1565a4] text-lg">
              {link}
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-[#1565a4] text-white text-md px-4 py-2 rounded hover:bg-[#0d4e88] transition">
            View Catalogue
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 py-4 bg-white shadow-inner text-sm font-medium space-y-3">
          {navLinks.map((link, index) => (
            <a key={index} href="#" className="w-full hover:text-[#1565a4] text-center font-bold text-xl">
              {link}
            </a>
          ))}
          <button className="mt-2 bg-[#1565a4] text-center font-bold text-xl text-white w-full px-4 py-2 rounded hover:bg-[#0d4e88] transition">
            View Catalogue
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
