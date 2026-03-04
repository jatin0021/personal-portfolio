import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = [
  {
    category: "Frontend Core",
    icon: "⚛️",
    percentage: 78,
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "rgba(34,211,238,0.4)",
    items: [
      { name: "React.js", level: 78 },
      { name: "HTML5", level: 82 },
      { name: "CSS3", level: 75 },
      { name: "Tailwind CSS", level: 76 }
    ]
  },
  {
    category: "API & Data",
    icon: "🔗",
    percentage: 75,
    color: "blue",
    gradient: "from-blue-500 to-indigo-500",
    glowColor: "rgba(59,130,246,0.4)",
    items: [
      { name: "REST API", level: 75 },
      { name: "Axios", level: 72 },
      { name: "JSON", level: 80 }
    ]
  },
  {
    category: "Ecosystem & Tools",
    icon: "🛠️",
    percentage: 70,
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    glowColor: "rgba(168,85,247,0.4)",
    items: [
      { name: "Git & GitHub", level: 70 },
      { name: "Vite", level: 68 },
      { name: "VS Code", level: 75 },
      { name: "Vercel", level: 65 }
    ]
  },
  {
    category: "Backend Basics",
    icon: "🖥️",
    percentage: 45,
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(52,211,153,0.4)",
    items: [
      { name: "Node.js", level: 45 },
      { name: "Express.js", level: 40 }
    ]
  },
];

const colorMap = {
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30', bar: 'from-cyan-500 to-blue-500', ring: 'ring-cyan-500/20' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30', bar: 'from-blue-500 to-indigo-500', ring: 'ring-blue-500/20' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30', bar: 'from-purple-500 to-pink-500', ring: 'ring-purple-500/20' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', bar: 'from-emerald-500 to-teal-500', ring: 'ring-emerald-500/20' },
};

const SkillCard = ({ skillSet, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const colors = colorMap[skillSet.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card card-shine rounded-3xl p-7 group cursor-default relative overflow-hidden hover:-translate-y-3 transition-all duration-500`}
      style={{ '--glow': skillSet.glowColor }}
    >
      {/* Corner glow */}
      <div 
        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl -mr-12 -mt-12 opacity-30 group-hover:opacity-70 transition-opacity duration-700"
        style={{ background: `radial-gradient(circle, ${skillSet.glowColor} 0%, transparent 70%)` }}
      />
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className={`w-12 h-12 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-500`}
          style={{ boxShadow: `0 0 20px ${skillSet.glowColor}` }}>
          {skillSet.icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-100 font-poppins">{skillSet.category}</h3>
          <p className={`text-xs font-mono ${colors.text}`}>{skillSet.percentage}% Proficiency</p>
        </div>
      </div>
      
      {/* Main progress bar */}
      <div className="h-1.5 bg-white/5 rounded-full mb-6 relative z-10 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${colors.bar} shimmer-bar`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skillSet.percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
        />
      </div>
      
      {/* Individual skill bars */}
      <div className="space-y-4 relative z-10">
        {skillSet.items.map((item, id) => (
          <div key={id} className="group/item">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm text-slate-300 font-medium font-inter group-hover/item:text-slate-100 transition-colors">
                {item.name}
              </span>
              <span className={`text-xs font-mono ${colors.text} opacity-0 group-hover/item:opacity-100 transition-opacity`}>
                {item.level}%
              </span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${colors.bar} opacity-70`}
                initial={{ width: 0 }}
                animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: 0.5 + id * 0.1 + index * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom glow on hover */}
      <div 
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
        style={{ background: `radial-gradient(circle, ${skillSet.glowColor} 0%, transparent 70%)` }}
      />
    </motion.div>
  );
};

// Visual tech stack logos as badges
const techBadges = [
  { name: "React", bg: "bg-sky-500/10", text: "text-sky-400", border: "border-sky-500/20" },
  { name: "Tailwind", bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/20" },
  { name: "JavaScript", bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20" },
  { name: "Vite", bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
  { name: "Git", bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20" },
  { name: "Node.js", bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
  { name: "REST API", bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  { name: "Axios", bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" },
  // { name: "GSAP", bg: "bg-lime-500/10", text: "text-lime-400", border: "border-lime-500/20" },
  // { name: "Framer", bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20" },
  { name: "Vercel", bg: "bg-slate-500/10", text: "text-slate-400", border: "border-slate-500/20" },
  { name: "VS Code", bg: "bg-blue-500/10", text: "text-blue-300", border: "border-blue-400/20" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 section-divider relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16"
      >
        <span className="text-cyan-400 font-semibold tracking-widest uppercase text-xs mb-3 block font-mono">Technical Arsenal</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-100">
          Elevating <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow-cyan">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8" style={{ boxShadow: '0 0 20px rgba(34,211,238,0.5)' }} />
        <p className="text-slate-400 text-lg max-w-xl font-light">A curated stack of modern technologies I use to build exceptional digital products.</p>
      </motion.div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {skillsData.map((skillSet, index) => (
          <SkillCard key={index} skillSet={skillSet} index={index} />
        ))}
      </div>

      {/* Tech Badge Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-3xl p-8"
      >
        <p className="text-slate-500 text-xs tracking-widest uppercase font-mono mb-6 text-center">Full Tech Stack</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {techBadges.map((badge, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className={`px-4 py-2 rounded-xl border text-sm font-semibold font-mono cursor-default transition-all duration-200 ${badge.bg} ${badge.text} ${badge.border}`}
            >
              {badge.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
