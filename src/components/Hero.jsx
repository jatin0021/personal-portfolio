import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const socialLinks = [
    { href: "https://github.com/jatin0021", icon: <Github size={18} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/jatin-kumar-bb958a294/", icon: <Linkedin size={18} />, label: "LinkedIn" },
    { href: "mailto:jatinchauhan457@gmail.com", icon: <Mail size={18} />, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col md:flex-row items-center justify-between pt-24 pb-12 overflow-visible px-4"
    >

      {/* LEFT: Text Content */}
      <motion.div
        className="w-full md:w-1/2 space-y-6 lg:pl-8 relative z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Available for opportunities
        </div>

        <p className="text-blue-600 font-semibold tracking-[0.3em] uppercase text-xs font-mono">Hi, I am</p>

        <h1 className="text-5xl md:text-7xl font-extrabold font-poppins text-slate-900 tracking-tight leading-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Jatin Kumar
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-slate-600 flex items-center gap-3 min-h-[36px]">
          <span className="text-slate-400">{'>'}</span>
          <TypeAnimation
            sequence={[
              'Frontend Developer', 2000,
              'React.js Specialist', 2000,
              'API Integration Expert', 2000,
              'UI/UX Enthusiast', 2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-blue-600 font-mono"
            repeat={Infinity}
          />
        </h2>

        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg font-light">
          I build <span className="text-slate-800 font-medium">responsive, high-performance</span> web applications using React.js, Tailwind CSS, WordPress, and Shopify — turning complex designs and data into <span className="text-blue-600 font-medium">seamless user experiences</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Link to="contact" smooth={true} offset={-80}>
            <button className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center gap-3 shadow-sm shadow-blue-200">
              Hire Me
              <ArrowRight size={18} />
            </button>
          </Link>

          <a
            href="/public/Jatin_Resume.pdf"
            download
            className="group px-8 py-3 border border-slate-300 bg-white hover:border-blue-400 text-slate-700 font-semibold rounded-xl flex items-center gap-3"
          >
            Resume
            <Download size={18} className="text-blue-600" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 pt-1">
          <span className="text-slate-400 text-xs tracking-widest uppercase font-mono">Find me</span>
          <div className="flex gap-2">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* RIGHT: Avatar */}
      <motion.div
        className="w-full md:w-1/2 mt-14 md:mt-0 flex justify-center relative z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">

          {/* Soft background circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100" />

          {/* Thin accent ring */}
          <div className="absolute inset-[-8px] rounded-full border border-blue-200" />

          {/* Avatar image */}
          <div className="absolute inset-0 rounded-full overflow-hidden p-2">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src="/anime_boy_dev.png"
                alt="Jatin Kumar - Frontend Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs tracking-widest uppercase font-mono">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-300 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
