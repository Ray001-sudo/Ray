
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCart();
  const location = useLocation();
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Farm Practices", path: "/practices" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-farm-forest-green font-serif font-bold text-2xl">
            Sustainable<span className="text-farm-terracotta">Farm</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium hover:text-farm-terracotta transition-colors ${
                isActive(link.path) ? "text-farm-terracotta" : "text-farm-forest-green"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Cart Icon */}
        <Link to="/cart" className="relative mr-2 md:mr-0">
          <ShoppingCart className="h-6 w-6 text-farm-forest-green hover:text-farm-terracotta transition-colors" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-farm-terracotta text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden ml-4" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-farm-forest-green" />
          ) : (
            <Menu className="h-6 w-6 text-farm-forest-green" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 px-6 font-medium hover:bg-farm-light-olive ${
                  isActive(link.path) ? "text-farm-terracotta" : "text-farm-forest-green"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
