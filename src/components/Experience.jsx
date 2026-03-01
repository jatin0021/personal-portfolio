import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-white/5 relative z-10 w-full overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-purple-400 font-semibold tracking-widest uppercase text-sm mb-2 block font-poppins">Career Journey</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-100">Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-md">Experience</span></h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mb-16 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
      </motion.div>

      <div className="relative border-l-2 border-slate-800 ml-5 md:ml-8 pl-10 py-4">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="relative"
        >
          {/* Timeline Dot Glowing */}
          <motion.div 
            className="absolute -left-[63px] top-1 w-14 h-14 bg-[#0a0f1c] border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] z-20"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <Briefcase size={22} className="drop-shadow-lg" />
          </motion.div>
          
          <div className="absolute -left-[63px] top-1 w-14 h-14 rounded-full bg-cyan-400/20 blur-xl animate-pulse z-10"></div>

          <div className="glass-card p-8 md:p-10 rounded-3xl group cursor-pointer hover:border-cyan-400/30 hover:shadow-cyan-400/10 transition-all duration-500 overflow-hidden relative">
            {/* Hover Blob Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-cyan-400/10 transition-colors duration-700 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4 relative z-10">
              <div>
                <h3 className="text-3xl font-bold text-slate-100 font-poppins mb-1">Frontend Developer</h3>
                <h4 className="text-xl text-purple-400 font-medium font-poppins drop-shadow-sm">AAYAAMX Technologies Pvt Ltd</h4>
              </div>
              <span className="px-5 py-2 bg-purple-500/10 text-cyan-300 text-sm font-semibold rounded-full border border-purple-500/20 whitespace-nowrap shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                Jan 2025 – Present
              </span>
            </div>
            
            <ul className="space-y-4 text-slate-300 mt-8 leading-relaxed font-inter relative z-10">
              {[
                { bold: "Reusable Components", text: "to standardise and accelerate the UI development process." },
                { bold: "Scalable UI Architecture", text: "utilizing best practices in React.js and modern state management flows." },
                { bold: "Cross-browser Compatibility", text: "employing meticulous mobile-first styling logic via Tailwind CSS." },
                { bold: "Performance Optimization", text: "driving significant improvements through rigorous profiling and splitting." }
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] shrink-0"></span>
                  <p><strong className="text-slate-100 font-semibold">{item.bold}</strong> {item.text}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
