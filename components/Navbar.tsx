import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled || isOpen 
          ? 'py-4' 
          : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-display font-black tracking-tighter group flex items-center gap-1">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative"
          >
            <span className="text-white group-hover:text-brand-cobalt transition-colors">DM</span>
            <span className="absolute -top-1 -right-2 w-2 h-2 bg-gradient-to-tr from-brand-cobalt to-brand-cyan rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse"></span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center p-1.5 rounded-full glass-card border-white/5 bg-white/5 backdrop-blur-3xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-6 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden ${
                isActive(link.path) 
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isActive(link.path) && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-white/10 border border-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.1)] rounded-full z-[-1]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-12 h-12 flex items-center justify-center text-white focus:outline-none glass-card border-white/10 rounded-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 glass-card border-white/10 rounded-[32px] p-4 flex flex-col gap-2 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-black block py-5 px-8 rounded-2xl text-center uppercase tracking-[0.3em] text-[10px] transition-all ${
                  isActive(link.path) 
                    ? 'bg-brand-cobalt text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]' 
                    : 'text-slate-400 bg-white/5 hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;