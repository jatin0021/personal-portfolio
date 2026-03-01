import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Download, ArrowRight, Code2, Cpu, Database } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  
  // Parallax background using GSAP and Framer
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  useEffect(() => {
    // Subtle magnetic float with GSAP
    const elements = document.querySelectorAll('.floating-icon');
    elements.forEach((el, index) => {
      gsap.to(el, {
        y: "Random(-15, 15)",
        x: "Random(-15, 15)",
        rotation: "Random(-10, 10)",
        duration: "Random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });
    });
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between pt-12 overflow-visible px-4">
      {/* Background Animated Gradient Waves handled in main CSS blobs, but this is a specific overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-[-1] pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-[100px]" />
      </motion.div>

      <motion.div 
        className="w-full md:w-1/2 space-y-6 lg:pl-8 relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-sm font-medium mb-2 backdrop-blur-sm neon-glow shadow-blue-500/20">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Available for new opportunities
        </div>
        
        <p className="text-blue-400 font-medium tracking-widest uppercase text-sm font-poppins">Hi, I am</p>
        
        <h1 className="text-5xl md:text-7xl font-extrabold font-poppins text-slate-100 tracking-tight">
          <span className="gradient-text bg-size-200 animate-gradient-flow drop-shadow-lg">Jatin Kumar</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 h-10 flex items-center gap-2">
          <TypeAnimation
            sequence={[
              'Frontend Developer', 1500,
              'React.js Specialist', 1500,
              'API Integration Expert', 1500,
              'UI/UX Enthusiast', 1500
            ]}
            wrapper="span"
            speed={50}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400"
            repeat={Infinity}
          />
        </h2>
        
        <p className="text-slate-400 text-lg leading-relaxed max-w-lg font-inter">
          I build scalable, high-performance web applications with clean, modern interfaces and seamless API integrations. Turning complex logic into premium user experiences.
        </p>

        <div className="flex flex-wrap gap-5 pt-6">
          <Link to="projects" smooth={true} offset={-80} className="w-full sm:w-auto">
            <button className="magnetic-btn w-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 duration-300 group ring-1 ring-cyan-400/50">
              View Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <a href="/resume.pdf" download className="magnetic-btn w-full sm:w-auto px-8 py-3.5 glass-card text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 shadow-lg group">
            Download Resume 
            <Download size={18} className="group-hover:-translate-y-1 transition-transform text-cyan-400" />
          </a>
        </div>
      </motion.div>

      <motion.div 
        className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center relative perspective-1000 z-10"
        initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative w-full max-w-lg aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-500/10 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          
          {/* Floating tech stack icons representing the developer ecosystem */}
          <div className="absolute -left-4 top-1/4 floating-icon glass-card p-3 rounded-2xl border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] z-20">
            <Code2 size={28} />
          </div>
          <div className="absolute -right-4 top-1/3 floating-icon glass-card p-3 rounded-2xl border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] z-20">
            <Database size={28} />
          </div>
          <div className="absolute bottom-1/4 left-1/2 floating-icon glass-card p-3 rounded-2xl border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)] z-20">
            <Cpu size={28} />
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 z-10">
            <motion.img 
              src="/anime_boy_dev.png"
              alt="Anime Boy Developer"
              className="w-full h-full object-cover rounded-full shadow-[0_0_40px_rgba(34,211,238,0.4)] border-4 border-cyan-500/30"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
