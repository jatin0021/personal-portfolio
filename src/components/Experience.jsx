import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: "Frontend Developer",
    company: "AAYAAMX Technologies Pvt Ltd",
    location: "Noida, India",
    period: "Jan 2025 – Present",
    current: true,
    color: "cyan",
    achievements: [
      { bold: "Reusable Component Library", text: "Built a scalable component system standardizing UI development, reducing feature build time by 40%." },
      { bold: "Scalable UI Architecture", text: "Architected React.js application structure using best practices and modern state management flows." },
      { bold: "Cross-browser Compatibility", text: "Delivered pixel-perfect designs across all browsers using mobile-first Tailwind CSS methodology." },
      { bold: "Performance Optimization", text: "Drove significant improvements through code splitting, lazy loading, and rigorous profiling." },
    ],
    techUsed: ["React.js", "Tailwind CSS", "Vite", "Axios", "Git"],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 section-divider relative z-10 w-full overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16"
      >
        <span className="text-purple-400 font-semibold tracking-widest uppercase text-xs mb-3 block font-mono">Career Journey</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-100">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" style={{ boxShadow: '0 0 20px rgba(168,85,247,0.5)' }} />
      </motion.div>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-[28px] md:left-[36px] top-0 bottom-0 w-px">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/80 via-purple-500/50 to-transparent" />
          <motion.div
            className="absolute top-0 w-full bg-gradient-to-b from-cyan-400 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-20 md:pl-24 mb-12 last:mb-0"
          >
            {/* Timeline icon */}
            <div className="absolute left-0 top-0">
              <motion.div 
                className="w-14 h-14 bg-[#070c18] border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 z-20 relative"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                style={{ boxShadow: '0 0 25px rgba(34,211,238,0.6)' }}
              >
                <Briefcase size={22} />
              </motion.div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 timeline-dot" />
            </div>

            {/* Card */}
            <div className="glass-card card-shine p-8 md:p-10 rounded-3xl group hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden">
              
              {/* Background glow blob  */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-[80px] -mr-40 -mt-40 group-hover:bg-cyan-400/10 transition-colors duration-700 pointer-events-none" />

              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-4 relative z-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-100 font-poppins mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-purple-400 font-semibold font-poppins mb-3">{exp.company}</h4>
                  <div className="flex flex-wrap gap-4 text-slate-500 text-sm font-mono">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-cyan-400/60" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-cyan-400/60" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
                  {exp.current && (
                    <span className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Currently Here
                    </span>
                  )}
                  <span className="px-4 py-1.5 bg-purple-500/10 text-cyan-300 text-xs font-semibold rounded-full border border-purple-500/20 font-mono">
                    Full Time
                  </span>
                </div>
              </div>
              
              {/* Achievement list */}
              <ul className="space-y-4 relative z-10 mb-8">
                {exp.achievements.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <CheckCircle2 size={16} className="text-cyan-400 mt-1 shrink-0 opacity-70" />
                    <p className="text-sm leading-relaxed font-light">
                      <strong className="text-slate-100 font-semibold">{item.bold}</strong>{' '}
                      <span className="text-slate-400">{item.text}</span>
                    </p>
                  </motion.li>
                ))}
              </ul>

              {/* Tech used */}
              <div className="flex flex-wrap gap-2 relative z-10 pt-6 border-t border-white/5">
                <span className="text-slate-600 text-xs font-mono mr-2 self-center">Stack:</span>
                {exp.techUsed.map((tech, t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1 bg-cyan-500/8 text-cyan-400 border border-cyan-500/15 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Timeline "Looking for opportunities" end node */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          className="relative pl-20 md:pl-24"
        >
          <div className="absolute left-0 top-0 w-14 h-14 bg-blue-500/10 border-2 border-dashed border-blue-500/40 rounded-full flex items-center justify-center text-blue-400/60">
            <span className="text-xl">✦</span>
          </div>
          <div className="glass-card rounded-2xl px-6 py-4 border-dashed border-blue-500/20 text-slate-500 text-sm font-mono flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Open to new opportunities — Let's build something great together.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
