import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: "Frontend Core", percentage: 95, items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "API & Data", percentage: 90, items: ["REST API", "Axios", "JSON"] },
  { category: "Ecosystem & Tools", percentage: 85, items: ["Git", "GitHub", "Vite", "VS Code"] },
  { category: "Backend Basics", percentage: 65, items: ["Node.js", "Express.js"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-white/5 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-2 block font-poppins">Technical Arsenal</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-100">Elevating <span className="gradient-text drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Skills</span></h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-16 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((skillSet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer hover:-translate-y-4 shadow-xl"
          >
            {/* Animated background blob for the card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-cyan-500/20 group-hover:blur-3xl transition-all duration-700"></div>
            
            <h3 className="text-2xl font-bold text-slate-100 mb-6 font-poppins relative">
              {skillSet.category}
              <span className="block mt-2 h-0.5 bg-white/10 w-full rounded">
                <motion.span 
                  className="block h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skillSet.percentage}%` }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                />
              </span>
            </h3>
            
            <div className="flex flex-col gap-3">
              {skillSet.items.map((item, id) => (
                <motion.div
                  key={id}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-slate-300 font-medium font-inter group/item"
                >
                  <span className="w-2 h-2 rounded-full border border-cyan-500 group-hover/item:bg-cyan-400 group-hover/item:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all"></span>
                  <span className="text-sm tracking-wide group-hover/item:text-slate-100 transition-colors uppercase">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl drop-shadow-xl group-hover:bg-blue-600/20 focus:-translate-y-4 transition-all duration-[2s]"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
