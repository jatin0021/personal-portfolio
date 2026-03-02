import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial loading animation
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0f1c]"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 border-4 border-transparent border-t-blue-500 border-b-purple-500 rounded-full"
            />
            <motion.h2 
              initial={{ opacity: 0, mt: 10 }}
              animate={{ opacity: 1, mt: 20 }}
              transition={{ delay: 0.5 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold tracking-widest uppercase text-sm mt-4"
            >
              Loading Experience
            </motion.h2>
          </motion.div>
        ) : (
          <motion.main 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-7xl mx-auto px-6 pt-12 pb-12 overflow-hidden relative z-10"
          >
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
      
      {!loading && (
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="py-8 text-center text-slate-500 border-t border-white/5 mt-12 backdrop-blur-md relative z-10"
        >
          <p className="font-medium text-sm">© {new Date().getFullYear()} Jatin Kumar. Crafted with <span className="text-blue-500">React</span> & <span className="text-cyan-400">Tailwind</span>.</p>
        </motion.footer>
      )}
    </>
  );
}

export default App;
