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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14"
      >
        <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-3 block font-mono">Career Journey</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-5 font-poppins text-slate-900">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-[28px] md:left-[36px] top-0 bottom-0 w-px bg-slate-200" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.15, ease: 'easeOut' }}
            className="relative pl-20 md:pl-24 mb-10 last:mb-0"
          >
            {/* Timeline icon */}
            <div className="absolute left-0 top-0">
              <div className="w-14 h-14 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-600 z-20 relative shadow-sm">
                <Briefcase size={20} />
              </div>
            </div>

            {/* Card */}
            <div className="glass-card p-7 md:p-9 rounded-2xl">

              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-poppins mb-1">{exp.title}</h3>
                  <h4 className="text-base text-blue-600 font-semibold font-poppins mb-3">{exp.company}</h4>
                  <div className="flex flex-wrap gap-4 text-slate-500 text-sm font-mono">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-slate-400" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
                  {exp.current && (
                    <span className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Currently Here
                    </span>
                  )}
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200 font-mono">
                    Full Time
                  </span>
                </div>
              </div>

              {/* Achievement list */}
              <ul className="space-y-3 mb-6">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={15} className="text-blue-500 mt-0.5 shrink-0" />
                    <p className="text-sm leading-relaxed">
                      <strong className="text-slate-800 font-semibold">{item.bold}</strong>{' '}
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Tech used */}
              <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100">
                <span className="text-slate-400 text-xs font-mono mr-1 self-center">Stack:</span>
                {exp.techUsed.map((tech, t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* "Open to opportunities" end node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative pl-20 md:pl-24"
        >
          <div className="absolute left-0 top-0 w-14 h-14 bg-slate-50 border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center text-slate-400">
            <span className="text-lg">✦</span>
          </div>
          <div className="glass-card rounded-xl px-5 py-3.5 border-dashed border-slate-200 text-slate-500 text-sm font-mono flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            Open to new opportunities — Let's build something great together.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
