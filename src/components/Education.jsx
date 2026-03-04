import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Education = () => {
  const educationData = [
    { 
      degree: "Master of Computer Applications", 
      short: "MCA",
      inst: "Quantum University, Roorkee", 
      period: "2023 – 2025",
      color: "blue",
      icon: <GraduationCap size={28} />,
      highlights: ["Full-stack web development focus", "Data Structures & Algorithms", "Cloud computing modules"]
    },
    { 
      degree: "Bachelor of Science", 
      short: "B.Sc",
      inst: "MJPRU Bareilly", 
      period: "2020 – 2023",
      color: "purple",
      icon: <BookOpen size={28} />,
      highlights: ["Physics, Chemistry & Mathematics (PCM)", "Strong analytical & logical foundation", "Transitioned into software development"]
    }
  ];

  const colorMap = {
    blue: {
      bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20',
      hover: 'hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]',
      glow: 'rgba(59,130,246,0.3)', iconHover: 'group-hover:bg-blue-500 group-hover:text-white'
    },
    purple: {
      bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20',
      hover: 'hover:border-purple-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]',
      glow: 'rgba(168,85,247,0.3)', iconHover: 'group-hover:bg-purple-500 group-hover:text-white'
    }
  };

  return (
    <section id="education" className="py-24 section-divider relative z-10 w-full overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16"
      >
        <span className="text-pink-400 font-semibold tracking-widest uppercase text-xs mb-3 block font-mono">Academic Background</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-100">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Education</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full" style={{ boxShadow: '0 0 20px rgba(236,72,153,0.5)' }} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => {
          const c = colorMap[edu.color];
          return (
            <Tilt 
              key={index}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.02}
              transitionSpeed={1200}
              perspective={1000}
              className="w-full"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`glass-card card-shine p-8 lg:p-10 rounded-3xl group cursor-default relative overflow-hidden min-h-[280px] flex flex-col ${c.hover} transition-all duration-500`}
              >
                {/* Background glow */}
                <div 
                  className="absolute top-0 right-0 w-48 h-48 blur-3xl rounded-full opacity-20 group-hover:opacity-50 group-hover:scale-150 transition-all duration-700"
                  style={{ background: `radial-gradient(circle, ${c.glow} 0%, transparent 70%)` }}
                />

                {/* Degree badge */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div
                    className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg ${c.bg} ${c.text} ${c.border} border ${c.iconHover}`}
                    style={{ boxShadow: `0 0 20px ${c.glow}` }}
                  >
                    {edu.icon}
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <span className={`text-2xl font-black font-poppins ${c.text} opacity-30 group-hover:opacity-60 transition-opacity`}>
                      {edu.short}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-slate-100 mb-1.5 font-poppins leading-snug">{edu.degree}</h3>
                  
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <p className="text-slate-400 font-medium font-inter">{edu.inst}</p>
                    <span className="flex items-center gap-1.5 text-slate-600 text-xs font-mono">
                      <Calendar size={11} />
                      {edu.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {edu.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-center gap-2 text-slate-500 text-sm">
                        <span className={`w-1 h-1 rounded-full ${c.text.replace('text-', 'bg-')}`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Award icon - fades in on hover */}
                <div className="mt-auto pt-5 border-t border-white/5 flex justify-between items-center relative z-10">
                  <span className="text-slate-600 text-xs font-mono tracking-wide">{edu.period}</span>
                  <Award className={`opacity-0 group-hover:opacity-100 transition-all duration-300 ${c.text} group-hover:drop-shadow-lg`} size={18} />
                </div>
              </motion.div>
            </Tilt>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
