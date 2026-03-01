import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const projectsData = [
  {
    title: "World Info Web App",
    tech: ["React.js", "Tailwind CSS", "Axios", "React Router", "Vercel"],
    desc: "A comprehensive country information application integrating public APIs to display detailed global data. Features include search functionality, regional filtering, dynamic sorting, and detailed dynamic routing views for individual countries.",
    github: "#",
    live: "#",
    color: "blue"
  },
  {
    title: "Fin CRM Dashboard",
    tech: ["React.js", "Tailwind CSS", "Vite", "Chart.js"],
    desc: "A professional Financial CRM designed for trading management. The application features a clean, responsive Dashboard UI, streamlined user onboarding flows, secure wallet integration views, and a dedicated KYC screen. Optimized for maximum performance.",
    github: "#",
    live: "#",
    color: "purple"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-white/5 relative z-10 w-full overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-2 block font-poppins">Portfolio Showcase</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-100">Featured <span className="gradient-text">Projects</span></h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-16 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
      </motion.div>

      <div className="flex flex-col gap-12 w-full">
        {projectsData.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1}
            transitionSpeed={1500}
            className="w-full"
            perspective={1500}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card overflow-hidden w-full flex flex-col lg:flex-row hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Image / Graphic Display Section */}
              <div className={`w-full lg:w-1/2 min-h-[300px] relative overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5 p-8 ${project.color === 'blue' ? 'bg-[#0a1224]' : 'bg-[#150a24]'}`}>
                {/* Overlay Blur Effect on Hover */}
                <div className="absolute inset-0 bg-slate-900/0 backdrop-blur-none group-hover:bg-slate-900/40 group-hover:backdrop-blur-sm transition-all duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="px-6 py-3 border border-white/20 bg-white/10 text-white font-poppins rounded-xl shadow-2xl backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Explore Details
                  </span>
                </div>
                
                {/* SVG Graphics representing the App */}
                <motion.div
                  className="w-64 h-64 relative text-slate-600 transition-all duration-700 ease-out group-hover:scale-110 z-0"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {index === 0 ? (
                    <svg viewBox="0 0 200 200" fill="none" className={`w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] ${project.color === 'blue' ? 'text-blue-500' : 'text-purple-500'}`} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <circle cx="100" cy="100" r="80" fill="currentColor" fillOpacity="0.1" />
                       <ellipse cx="100" cy="100" rx="40" ry="80" fill="none" strokeOpacity="0.8" />
                       <ellipse cx="100" cy="100" rx="80" ry="25" fill="none" strokeOpacity="0.8" />
                       <line x1="100" y1="20" x2="100" y2="180" strokeOpacity="0.8" />
                       <line x1="20" y1="100" x2="180" y2="100" strokeOpacity="0.8" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] text-purple-500" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       <rect x="20" y="30" width="160" height="140" rx="15" fill="currentColor" fillOpacity="0.1" />
                       <path d="M20 70 L180 70" strokeOpacity="0.8"/>
                       <circle cx="45" cy="50" r="5" fill="#ef4444" stroke="none" />
                       <circle cx="65" cy="50" r="5" fill="#eab308" stroke="none" />
                       <circle cx="85" cy="50" r="5" fill="#22c55e" stroke="none" />
                       {/* Dashboard elements abstract */}
                       <rect x="40" y="90" width="45" height="60" rx="5" fill="currentColor" fillOpacity="0.2" stroke="none" />
                       <rect x="95" y="110" width="65" height="40" rx="5" fill="currentColor" fillOpacity="0.2" stroke="none" />
                       <path d="M40 130 Q70 110 95 120 T160 100" strokeOpacity="0.8" strokeWidth="3" />
                       <circle cx="160" cy="100" r="4" fill="#a855f7" stroke="none"/>
                    </svg>
                  )}
                </motion.div>
              </div>
              
              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center h-full relative z-20">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-slate-100 mb-4 group-hover:text-blue-400 transition-colors font-poppins">{project.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed font-inter font-light">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech, id) => (
                    <span key={id} className={`text-sm font-medium px-4 py-1.5 border rounded-full backdrop-blur-sm ${project.color === 'blue' ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' : 'bg-purple-500/10 text-purple-300 border-purple-500/20'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="magnetic-btn flex items-center gap-2 text-sm font-semibold text-[#0a0f1c] bg-cyan-400 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] px-6 py-3 rounded-xl transition-all duration-300">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="magnetic-btn flex items-center gap-2 text-sm font-semibold text-slate-100 hover:text-white bg-slate-800 hover:bg-slate-700 hover:shadow-lg border border-slate-700 px-6 py-3 rounded-xl transition-all duration-300">
                    <Github size={18} /> Source Code
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
