import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out py-4 ${scrolled ? 'bg-[#0a0f1c]/70 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-blue-500/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="hero" smooth={true} duration={400} className="text-3xl font-extrabold cursor-pointer group flex items-center gap-1">
          <span className="text-slate-100 font-poppins tracking-tighter group-hover:text-blue-400 transition-colors duration-300">J<span className="text-cyan-400">K</span></span>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-2 h-2 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 mt-2"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              duration={400}
              offset={-80}
              className="text-slate-400 hover:text-white cursor-pointer transition-all duration-300 relative group text-sm font-semibold tracking-wide font-inter"
              activeClass="!text-cyan-400 font-bold"
            >
              {item.name}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 transition-all ease-out duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
          
          <a href="/resume.pdf" download className="magnetic-btn border border-white/10 hover:border-cyan-400/50 text-slate-100 px-5 py-2 rounded-xl text-sm font-semibold tracking-wide hover:bg-cyan-400/10 transition-all duration-300 ml-4 font-poppins">
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors bg-white/5 p-2 rounded-lg border border-white/5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Slide Down */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0a0f1c]/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col px-6 py-8 space-y-6 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-70}
                  className="text-slate-300 hover:text-cyan-400 cursor-pointer text-xl font-poppins font-semibold active:scale-95 transition-transform tracking-wide"
                  activeClass="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10 mt-4">
                 <a href="/resume.pdf" download className="w-full inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/20 active:scale-95 transition-transform" onClick={() => setMobileMenuOpen(false)}>
                   Download Resume
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
