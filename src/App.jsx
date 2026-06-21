import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import SVGBackground from './components/ParticleBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const clampedProgress = Math.min(progress, 100);

  return (
    <>
      <ScrollProgress />

      {/* SVG Background */}
      <SVGBackground />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white"
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            {/* Simple spinner */}
            <div className="relative w-14 h-14 mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-slate-200" />
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-600"
                style={{ animation: 'spin 0.9s linear infinite' }}
              />
            </div>

            {/* Logo */}
            <p className="text-2xl font-extrabold font-poppins text-slate-800 tracking-tight mb-6">
              J<span className="text-blue-600">K</span>
            </p>

            {/* Progress bar */}
            <div className="w-40 h-0.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${clampedProgress}%` }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
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

            {/* Footer */}
            <footer className="relative z-10 border-t border-slate-200 bg-white/80 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-extrabold font-poppins text-slate-800">
                      J<span className="text-blue-600">K</span>
                    </span>
                    <div className="w-px h-4 bg-slate-200" />
                    <p className="text-slate-500 text-sm">
                      © {new Date().getFullYear()} Jatin Kumar. All rights reserved.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
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
                        className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>

                  <p className="text-slate-400 text-xs font-mono">
                    Built with <span className="text-blue-600">React</span> & <span className="text-indigo-600">Tailwind</span>
                  </p>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}

export default App;
