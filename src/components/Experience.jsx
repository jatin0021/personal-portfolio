import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter text-slate-100">Work <span className="text-blue-500">Experience</span></h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12"></div>
      </motion.div>

      <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 pl-8 py-4">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="relative"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[43px] top-1 w-10 h-10 bg-slate-900 border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Briefcase size={18} />
          </div>

          <div className="glass-card p-6 md:p-8 hover:border-blue-500/30 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-100">Frontend Developer</h3>
                <h4 className="text-lg text-blue-400 font-medium">AAYAAMX Technologies Pvt Ltd</h4>
              </div>
              <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 text-sm font-semibold rounded-full border border-blue-500/20 whitespace-nowrap">
                Jan 2025 – Present
              </span>
            </div>
            
            <ul className="list-disc list-inside space-y-3 text-slate-300 mt-6 leading-relaxed">
              <li>Developing <strong className="text-slate-200 font-medium">reusable components</strong> to standardise and accelerate the UI development process.</li>
              <li>Architecting a <strong className="text-slate-200 font-medium">scalable UI</strong> architecture utilizing best practices in React.js and modern state management.</li>
              <li>Ensuring <strong className="text-slate-200 font-medium">cross-browser compatibility</strong> by employing meticulous mobile-first styling logic via Tailwind CSS.</li>
              <li>Driving significant <strong className="text-slate-200 font-medium">performance improvements</strong> through rigorous profiling, code-splitting, and lazy loading strategies.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
