import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Star } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const projectsData = [
  {
    num: "01",
    title: "World Info Web App",
    subtitle: "Global Data Explorer",
    tech: ["React.js", "Tailwind CSS", "Axios", "React Router", "Vercel"],
    desc: "A comprehensive country information application integrating public APIs to display detailed global data. Features search functionality, regional filtering, dynamic sorting, and detailed routing views for individual countries.",
    github: "https://github.com/jatin0021/WorldInfo-react",
    live: "https://world-info-react.vercel.app/",
    color: "cyan",
    gradient: "from-blue-600/20 to-cyan-500/10",
    borderHover: "hover:border-cyan-400/40",
    glowColor: "rgba(34,211,238,0.15)",
    svgColor: "text-cyan-500",
    dropShadow: "drop-shadow-[0_0_40px_rgba(34,211,238,0.5)]",
    tags: ["Public API", "Filter & Search", "Responsive"],
    featured: true,
  },
  {
    num: "02",
    title: "Fin CRM Dashboard",
    subtitle: "Financial Management",
    tech: ["React.js", "Tailwind CSS", "Vite", "Chart.js"],
    desc: "A professional Financial CRM designed for trading management. Features a clean, responsive Dashboard UI, streamlined onboarding flows, secure wallet integration views, and a dedicated KYC screen. Optimized for maximum performance.",
    github: "#",
    live: "#",
    color: "purple",
    gradient: "from-purple-600/20 to-pink-500/10",
    borderHover: "hover:border-purple-400/40",
    glowColor: "rgba(168,85,247,0.15)",
    svgColor: "text-purple-500",
    dropShadow: "drop-shadow-[0_0_40px_rgba(168,85,247,0.5)]",
    tags: ["Dashboard", "Charts", "KYC Flow"],
    featured: true,
  },
  {
    num: "03",
    title: "Portfolio Website",
    subtitle: "Personal Brand",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP", "Vite"],
    desc: "A highly animated, premium developer portfolio featuring glassmorphism design, custom cursor, scroll animations, GSAP-powered floating elements, and smooth page transitions. Built with performance and aesthetics in mind.",
    github: "https://github.com/jatin0021",
    live: "#",
    color: "blue",
    gradient: "from-indigo-600/20 to-blue-500/10",
    borderHover: "hover:border-blue-400/40",
    glowColor: "rgba(59,130,246,0.15)",
    svgColor: "text-blue-500",
    dropShadow: "drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]",
    tags: ["Animations", "GSAP", "Portfolio"],
    featured: false,
  }
];

const colorMap = {
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  blue: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
};

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-24 section-divider relative z-10 w-full overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16"
      >
        <span className="text-blue-400 font-semibold tracking-widest uppercase text-xs mb-3 block font-mono">Portfolio Showcase</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-100">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ boxShadow: '0 0 20px rgba(59,130,246,0.5)' }} />
      </motion.div>

      <div className="flex flex-col gap-10 w-full">
        {projectsData.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            scale={1.005}
            transitionSpeed={2000}
            className="w-full"
            perspective={2000}
          >
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
              className={`group glass-card card-shine overflow-hidden w-full flex flex-col lg:flex-row ${project.borderHover} transition-all duration-500`}
              style={{
                boxShadow: hovered === index ? `0 20px 60px ${project.glowColor}, 0 0 0 1px rgba(255,255,255,0.05)` : '0 4px 24px rgba(0,0,0,0.2)'
              }}
            >
              {/* Left Visual */}
              <div className={`w-full lg:w-5/12 min-h-[280px] relative overflow-hidden flex items-center justify-center p-8 bg-gradient-to-br ${project.gradient} border-b lg:border-b-0 lg:border-r border-white/5`}>
                
                {/* Project Number Watermark */}
                <div className="absolute top-4 left-6">
                  <span className="text-7xl font-black font-poppins opacity-[0.07] text-white select-none">
                    {project.num}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/0 to-slate-900/40 group-hover:from-slate-900/30 group-hover:to-slate-900/60 transition-all duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="flex gap-3"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-all">
                      <ExternalLink size={15} /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-all">
                      <Github size={15} /> Code
                    </a>
                  </motion.div>
                </div>
                
                {/* SVG Illustration */}
                <motion.div
                  className={`w-56 h-56 relative ${project.svgColor} ${project.dropShadow} group-hover:scale-110 transition-transform duration-700 z-0`}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  {index === 0 && (
                    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <circle cx="100" cy="100" r="80" fill="currentColor" fillOpacity="0.08"/>
                      <ellipse cx="100" cy="100" rx="42" ry="80" fill="none" strokeOpacity="0.7"/>
                      <ellipse cx="100" cy="100" rx="80" ry="28" fill="none" strokeOpacity="0.7"/>
                      <line x1="100" y1="20" x2="100" y2="180" strokeOpacity="0.5"/>
                      <line x1="20" y1="100" x2="180" y2="100" strokeOpacity="0.5"/>
                      <circle cx="100" cy="100" r="8" fill="currentColor" fillOpacity="0.6" stroke="none"/>
                      <circle cx="100" cy="100" r="15" fillOpacity="0" strokeOpacity="0.4"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.5">
                      <rect x="20" y="30" width="160" height="140" rx="12" fill="currentColor" fillOpacity="0.08"/>
                      <path d="M20 65 L180 65" strokeOpacity="0.7"/>
                      <circle cx="42" cy="48" r="5" fill="#ef4444" stroke="none"/>
                      <circle cx="60" cy="48" r="5" fill="#eab308" stroke="none"/>
                      <circle cx="78" cy="48" r="5" fill="#22c55e" stroke="none"/>
                      <rect x="35" y="82" width="55" height="68" rx="6" fill="currentColor" fillOpacity="0.15" stroke="none"/>
                      <rect x="100" y="105" width="65" height="45" rx="6" fill="currentColor" fillOpacity="0.15" stroke="none"/>
                      <path d="M35 130 Q60 110 90 118 T165 105" strokeOpacity="0.8" strokeWidth="2.5"/>
                      <circle cx="165" cy="105" r="4" fill="currentColor" stroke="none"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.5">
                      <rect x="25" y="25" width="150" height="150" rx="20" fill="currentColor" fillOpacity="0.08"/>
                      <circle cx="100" cy="80" r="30" fill="currentColor" fillOpacity="0.15" strokeOpacity="0.7"/>
                      <path d="M70 120 Q100 105 130 120" strokeOpacity="0.8" strokeWidth="2"/>
                      <rect x="60" y="130" width="80" height="12" rx="6" fill="currentColor" fillOpacity="0.15" stroke="none"/>
                      <rect x="75" y="150" width="50" height="8" rx="4" fill="currentColor" fillOpacity="0.1" stroke="none"/>
                      <circle cx="140" cy="40" r="18" fill="currentColor" fillOpacity="0.2" strokeOpacity="0.6"/>
                      <path d="M133 40 L138 45 L148 35" strokeOpacity="0.9" strokeWidth="2" fill="none"/>
                    </svg>
                  )}
                </motion.div>
              </div>
              
              {/* Right Content */}
              <div className="w-full lg:w-7/12 p-8 lg:p-10 flex flex-col justify-between relative z-20">
                
                <div>
                  {/* Project header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-mono px-2 py-0.5 rounded-md border ${colorMap[project.color]}`}>
                          {project.num}
                        </span>
                        {project.featured && (
                          <span className="flex items-center gap-1 text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                            <Star size={10} fill="currentColor" /> Featured
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 font-mono tracking-widest uppercase mb-1">{project.subtitle}</p>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500 font-poppins">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                    {project.desc}
                  </p>
                  
                  {/* Tag chips */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, t) => (
                      <span key={t} className="text-xs text-slate-500 bg-white/3 border border-white/8 px-3 py-1 rounded-full font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, t) => (
                      <span key={t} className={`text-xs font-semibold px-3 py-1.5 border rounded-lg backdrop-blur-sm font-mono ${colorMap[project.color]}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" 
                    className="group/btn flex items-center gap-2 text-sm font-semibold text-[#070c18] bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
                    style={{ boxShadow: '0 0 20px rgba(34,211,238,0.2)' }}
                  >
                    <ExternalLink size={15} /> Live Demo
                    <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-slate-600 px-6 py-3 rounded-xl transition-all duration-300">
                    <Github size={15} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
