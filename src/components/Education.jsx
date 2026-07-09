import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications",
      short: "MCA",
      inst: "Quantum University, Roorkee",
      period: "2023 – 2025",
      accent: "blue",
      icon: <GraduationCap size={26} />,
      highlights: ["Full-stack web development focus", "Data Structures & Algorithms", "Cloud computing modules"]
    },
    {
      degree: "Bachelor of Science",
      short: "B.Sc",
      inst: "Mahatma Jyotiba Phule Rohilkhand University, Bareilly",
      period: "2020 – 2023",
      accent: "indigo",
      icon: <BookOpen size={26} />,
      highlights: ["Physics, Chemistry & Mathematics (PCM)", "Strong analytical & logical foundation", "Transitioned into software development"]
    }
  ];

  const accentMap = {
    blue:   { bg: 'bg-blue-50',   text: 'text-blue-600',   border: 'border-blue-100',   dot: 'bg-blue-500' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', dot: 'bg-indigo-500' },
  };

  return (
    <section id="education" className="py-24 section-divider relative z-10 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14"
      >
        <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-3 block font-mono">Academic Background</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-5 font-poppins text-slate-900">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Education</span>
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, index) => {
          const c = accentMap[edu.accent];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              className="glass-card p-7 lg:p-9 rounded-2xl flex flex-col"
            >
              {/* Degree badge */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center ${c.bg} ${c.text} border ${c.border}`}>
                  {edu.icon}
                </div>
                <span className={`text-xl font-black font-poppins ${c.text} opacity-30`}>
                  {edu.short}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 font-poppins leading-snug">{edu.degree}</h3>

                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <p className="text-slate-600 font-medium text-sm">{edu.inst}</p>
                  <span className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                    <Calendar size={11} />
                    {edu.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {edu.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-center gap-2 text-slate-500 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-5 border-t border-slate-100 flex justify-between items-center">
                <span className="text-slate-400 text-xs font-mono">{edu.period}</span>
                <Award className={`${c.text} opacity-50`} size={16} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
