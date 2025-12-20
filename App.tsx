import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import Loader from './components/Loader';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-[#020617]">
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <Background />
      <ScrollToTop />
      <Navbar />
      
      {/* Main content elevated to z-10 to stay on top of the z-0 Background */}
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      {!isHomePage && (
        <footer className="bg-slate-950/80 backdrop-blur-md text-slate-400 py-12 text-center border-t border-white/5 relative z-20">
          <div className="container mx-auto px-6">
            <div className="text-2xl font-display font-bold text-white mb-4">
              DM<span className="text-brand-indigo">.</span>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Dhruvi Mehta. All rights reserved.
            </p>
            <p className="text-xs mt-2 opacity-60">
              Designed with Passion • Built with React
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;