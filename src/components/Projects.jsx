import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: "World Info Web App",
    tech: ["React.js", "Tailwind CSS", "Axios", "React Router", "Vercel"],
    desc: "A comprehensive country information application integrating public APIs to display detailed global data. Features include search functionality, regional filtering, dynamic sorting, and detailed dynamic routing views for individual countries.",
    github: "#",
    live: "#"
  },
  {
    title: "Fin CRM – Trading CRM Dashboard",
    tech: ["React.js", "Tailwind CSS", "Vite"],
    desc: "A professional Financial CRM designed for trading management. The application features a clean, responsive Dashboard UI, streamlined user onboarding flows, secure wallet integration views, and a dedicated KYC screen. Optimized for maximum performance.",
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter text-slate-100">Featured <span className="text-blue-500">Projects</span></h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group glass-card overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className="h-48 bg-slate-800/50 backdrop-blur-md relative overflow-hidden group-hover:bg-slate-800/80 transition-colors flex items-center justify-center border-b border-white/5 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Abstract decorative graphic representing the project */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-32 h-32 relative text-slate-600 group-hover:text-blue-400 transition-colors duration-500"
              >
                {index === 0 ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-lg"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full drop-shadow-lg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                )}
              </motion.div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 h-20">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, id) => (
                  <span key={id} className="text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-5 py-2.5 rounded-lg transition-colors border border-slate-700">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
