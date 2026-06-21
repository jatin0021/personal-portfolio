import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-4 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={400}
          className="text-2xl font-extrabold cursor-pointer font-poppins tracking-tight text-slate-800"
        >
          J<span className="text-blue-600">K</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              duration={400}
              offset={-80}
              className="text-slate-600 hover:text-blue-600 cursor-pointer text-sm font-medium tracking-wide relative group"
              activeClass="!text-blue-600 font-semibold"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full" />
            </Link>
          ))}

          <a
            href="/resume.pdf"
            download
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-lg text-sm font-semibold tracking-wide ml-2"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-600 hover:text-blue-600 p-2 rounded-lg border border-slate-200 bg-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 gap-5 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-70}
                  className="text-slate-700 hover:text-blue-600 cursor-pointer text-lg font-semibold"
                  activeClass="text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="/resume.pdf"
                  download
                  className="w-full inline-block bg-blue-600 text-white font-bold py-3 rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
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
