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
import ParticleBackground from './components/ParticleBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading with progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const clampedProgress = Math.min(progress, 100);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      
      {/* Animated Particle Background */}
      <ParticleBackground />
      
      {/* Noise texture layer */}
      <div className="noise-overlay" />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
            style={{ background: '#070c18' }}
            exit={{ 
              clipPath: ['inset(0% 0% 0% 0%)', 'inset(0% 0% 100% 0%)'],
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
          >
            {/* Loader rotating rings */}
            <div className="relative w-24 h-24 mb-10">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-b-cyan-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-3 rounded-full border-2 border-transparent border-r-purple-500 border-l-pink-400"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-black font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">JK</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-slate-800 rounded-full mb-4 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full"
                style={{ width: `${clampedProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <motion.p 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-slate-500 text-xs font-mono tracking-widest uppercase"
            >
              {clampedProgress < 100 ? 'Loading Experience...' : 'Ready'}
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Navbar />
            <main className="max-w-7xl mx-auto px-6 pt-12 pb-12 overflow-hidden relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Contact />
            </main>
            
            {/* Enhanced Footer */}
            <footer className="relative z-10 border-t border-white/5 mt-4">
              {/* SVG wave separator */}
              <div className="w-full overflow-hidden" style={{ height: '40px', marginBottom: '-2px' }}>
                <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,20 C200,40 400,0 600,20 C800,40 1000,0 1200,20 L1200,40 L0,40 Z" 
                    fill="rgba(59,130,246,0.03)" />
                </svg>
              </div>
              
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-extrabold font-poppins">
                      J<span className="text-cyan-400">K</span>
                    </span>
                    <div className="w-px h-5 bg-white/10" />
                    <p className="text-slate-500 text-sm font-mono">
                      © {new Date().getFullYear()} Jatin Kumar. All rights reserved.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {[
                      { href: "https://github.com/jatin0021", icon: <Github size={16} />, label: "GitHub" },
                      { href: "https://www.linkedin.com/in/jatin-kumar-bb958a294/", icon: <Linkedin size={16} />, label: "LinkedIn" },
                      { href: "mailto:jatinchauhan457@gmail.com", icon: <Mail size={16} />, label: "Email" },
                    ].map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                  
                  <p className="text-slate-600 text-xs font-mono">
                    Built with <span className="text-blue-400">React</span> & <span className="text-cyan-400">Tailwind</span>
                  </p>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
