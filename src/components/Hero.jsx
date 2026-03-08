import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Code2, Cpu, Database, Layers } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const elements = document.querySelectorAll('.floating-icon');
    elements.forEach((el, index) => {
      gsap.to(el, {
        y: "Random(-15, 15)",
        x: "Random(-10, 10)",
        rotation: "Random(-8, 8)",
        duration: "Random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3
      });
    });
  }, []);

  const socialLinks = [
    { href: "https://github.com/jatin0021", icon: <Github size={18} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/jatin-kumar-bb958a294/", icon: <Linkedin size={18} />, label: "LinkedIn" },  
    { href: "mailto:jatinchauhan457@gmail.com", icon: <Mail size={18} />, label: "Email" },
  ];

  const floatingIcons = [
    { icon: <Code2 size={22} />, color: 'text-cyan-400', border: 'border-cyan-500/40', shadow: 'shadow-[0_0_20px_rgba(34,211,238,0.4)]', pos: '-left-6 top-1/4' },
    { icon: <Database size={22} />, color: 'text-blue-400', border: 'border-blue-500/40', shadow: 'shadow-[0_0_20px_rgba(59,130,246,0.4)]', pos: '-right-6 top-1/3' },
    { icon: <Cpu size={22} />, color: 'text-purple-400', border: 'border-purple-500/40', shadow: 'shadow-[0_0_20px_rgba(168,85,247,0.4)]', pos: 'bottom-1/4 left-1/2' },
    { icon: <Layers size={22} />, color: 'text-pink-400', border: 'border-pink-500/40', shadow: 'shadow-[0_0_20px_rgba(236,72,153,0.4)]', pos: 'top-10 right-1/4' },
  ];

  return (
    <section id="hero" ref={heroRef} className="relative min-h-[95vh] flex flex-col md:flex-row items-center justify-between pt-20 pb-10 overflow-visible px-4">
      
      {/* Static ambient glows — no scroll listener needed */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/6 rounded-full" style={{ filter: 'blur(80px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/6 rounded-full" style={{ filter: 'blur(80px)' }} />
      </div>

      {/* LEFT: Text Content */}
      <motion.div 
        className="w-full md:w-1/2 space-y-6 lg:pl-8 relative z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Status badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-sm"
          animate={{ boxShadow: ['0 0 0px rgba(52,211,153,0)', '0 0 20px rgba(52,211,153,0.3)', '0 0 0px rgba(52,211,153,0)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </motion.div>
        
        <p className="text-blue-400 font-medium tracking-[0.3em] uppercase text-xs font-mono">Hi, I am</p>
        
        <h1 className="text-5xl md:text-7xl font-extrabold font-poppins text-slate-100 tracking-tight leading-none">
          <span className="relative inline-block">
            <span className="relative z-10 animate-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent" style={{ backgroundSize: '200% auto' }}>
              Jatin Kumar
            </span>
            {/* Underline glow */}
            <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full opacity-60 blur-sm" />
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-semibold text-slate-300 flex items-center gap-3 min-h-[36px]">
          <span className="text-slate-600">{'>'}</span>
          <TypeAnimation
            sequence={[
              'Frontend Developer', 2000,
              'React.js Specialist', 2000,
              'API Integration Expert', 2000,
              'UI/UX Enthusiast', 2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-mono"
            repeat={Infinity}
          />
          <span className="w-0.5 h-6 bg-cyan-400 animate-pulse rounded-full" />
        </h2>
        
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg font-light">
          I build <span className="text-slate-200 font-medium">scalable, high-performance</span> web apps with clean, modern interfaces and seamless API integrations — turning complex logic into <span className="text-cyan-400 font-medium">premium user experiences</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Link to="contact" smooth={true} offset={-80}>
            <motion.button 
              className="group relative px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl flex items-center gap-3 overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ boxShadow: '0 0 20px rgba(34,211,238,0.3)' }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-3">
                Hire Me 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>

          <motion.a 
            href="/resume.pdf" 
            download 
            className="group px-8 py-3.5 glass-card text-white font-semibold rounded-xl flex items-center gap-3 hover:border-cyan-500/30"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Resume 
            <Download size={18} className="group-hover:-translate-y-1 transition-transform text-cyan-400" />
          </motion.a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 pt-2">
          <span className="text-slate-600 text-xs tracking-widest uppercase font-mono">Find me</span>
          <div className="flex gap-3">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* RIGHT: Avatar with orbital rings */}
      <motion.div 
        className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center relative z-10"
        initial={{ opacity: 0, scale: 0.7, rotateY: 25 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          
          {/* Outer orbit ring */}
          <div 
            className="absolute inset-[-30px] rounded-full border border-blue-500/20 animate-spin-slow"
            style={{ borderStyle: 'dashed', borderSpacing: '4px' }}
          />
          
          {/* Middle orbit ring */}
          <div 
            className="absolute inset-[-10px] rounded-full border border-cyan-400/15 animate-spin-slow-reverse"
          />
          
          {/* Floating Tech Icons */}
          {floatingIcons.map((item, i) => (
            <div 
              key={i} 
              className={`absolute floating-icon glass-card p-3 rounded-2xl ${item.border} ${item.color} ${item.shadow} z-20 ${item.pos}`}
            >
              {item.icon}
            </div>
          ))}

          {/* Glow aura behind avatar */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 via-purple-500/20 to-cyan-400/30 blur-[60px] animate-pulse" style={{ animationDuration: '4s' }} />
          
          {/* Outer ring glow */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.3),inset_0_0_60px_rgba(34,211,238,0.1)]" />
          
          {/* Avatar image */}
          <div className="absolute inset-0 rounded-full overflow-hidden p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-tr from-blue-900/40 to-purple-900/40">
              <img
                src="/anime_boy_dev.png"
                alt="Jatin Kumar - Frontend Developer"
                className="w-full h-full object-cover object-top animate-float"
                style={{ willChange: 'transform' }}
              />
            </div>
          </div>

          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/20 pulse-ring" />
          <div className="absolute inset-0 rounded-full border border-blue-400/10 pulse-ring" style={{ animationDelay: '1s' }} />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs tracking-widest uppercase font-mono"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span>Scroll</span>
        <motion.div 
          className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
