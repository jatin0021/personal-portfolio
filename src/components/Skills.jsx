import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = [
  {
    category: "Frontend Core",
    icon: "⚛️",
    percentage: 75,
    color: "blue",
    items: [
      { name: "React.js", level: 70 },
      { name: "HTML5", level: 82 },
      { name: "CSS3", level: 75 },
      { name: "Tailwind CSS", level: 76 }
    ]
  },
  {
    category: "API & Data",
    icon: "🔗",
    percentage: 75,
    color: "indigo",
    items: [
      { name: "REST API", level: 75 },
      { name: "Axios", level: 72 },
      { name: "JSON/XML", level: 80 }
    ]
  },
  {
    category: "Ecosystem & Tools",
    icon: "🛠️",
    percentage: 70,
    color: "violet",
    items: [
      { name: "Git & GitHub", level: 70 },
      { name: "Vite", level: 68 },
      { name: "VS Code", level: 75 },
      { name: "Vercel", level: 65 }
    ]
  },
  {
    category: "CMS & Web Dev",
    icon: "🖥️",
    percentage: 65,
    color: "emerald",
    items: [
      { name: "WordPress", level: 80 },
      { name: "Shopify", level: 40 },
      { name: "Theme Customization", level: 75 },
      { name: "Plugin Integration", level: 72 }
    ]
  },
];

const colorMap = {
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-600',   border: 'border-blue-100',   bar: 'bg-blue-600' },
  indigo:  { bg: 'bg-indigo-50',  text: 'text-indigo-600', border: 'border-indigo-100', bar: 'bg-indigo-600' },
  violet:  { bg: 'bg-violet-50',  text: 'text-violet-600', border: 'border-violet-100', bar: 'bg-violet-600' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600',border: 'border-emerald-100',bar: 'bg-emerald-600' },
};

const SkillCard = ({ skillSet, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const colors = colorMap[skillSet.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="glass-card rounded-2xl p-6 cursor-default"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center text-lg`}>
          {skillSet.icon}
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-800 font-poppins">{skillSet.category}</h3>
          <p className={`text-xs font-mono ${colors.text}`}>{skillSet.percentage}% Proficiency</p>
        </div>
      </div>

      {/* Main progress bar */}
      <div className="h-1.5 bg-slate-100 rounded-full mb-5 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colors.bar}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skillSet.percentage}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: "easeOut" }}
        />
      </div>

      {/* Individual skill bars */}
      <div className="space-y-3">
        {skillSet.items.map((item, id) => (
          <div key={id}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-slate-600 font-medium">{item.name}</span>
              <span className={`text-xs font-mono ${colors.text}`}>{item.level}%</span>
            </div>
            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${colors.bar} opacity-70`}
                initial={{ width: 0 }}
                animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                transition={{ duration: 1.0, delay: 0.4 + id * 0.08 + index * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const techBadges = [
  { name: "React",       bg: "bg-sky-50",     text: "text-sky-700",     border: "border-sky-200" },
  { name: "Tailwind",    bg: "bg-teal-50",    text: "text-teal-700",    border: "border-teal-200" },
  { name: "JavaScript",  bg: "bg-yellow-50",  text: "text-yellow-700",  border: "border-yellow-200" },
  { name: "Vite",        bg: "bg-purple-50",  text: "text-purple-700",  border: "border-purple-200" },
  { name: "Git",         bg: "bg-orange-50",  text: "text-orange-700",  border: "border-orange-200" },
  { name: "WordPress",   bg: "bg-blue-50",    text: "text-blue-700",    border: "border-blue-200" },
  { name: "Shopify",     bg: "bg-green-50",   text: "text-green-700",   border: "border-green-200" },
  { name: "REST API",    bg: "bg-blue-50",    text: "text-blue-700",    border: "border-blue-200" },
  { name: "Axios",       bg: "bg-indigo-50",  text: "text-indigo-700",  border: "border-indigo-200" },
  { name: "Vercel",      bg: "bg-slate-50",   text: "text-slate-700",   border: "border-slate-200" },
  { name: "VS Code",     bg: "bg-blue-50",    text: "text-blue-600",    border: "border-blue-100" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 section-divider relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14"
      >
        <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-3 block font-mono">Technical Arsenal</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-5 font-poppins text-slate-900">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded-full mb-7" />
        <p className="text-slate-500 text-lg max-w-xl font-light">A curated stack of modern technologies I use to build great digital products.</p>
      </motion.div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {skillsData.map((skillSet, index) => (
          <SkillCard key={index} skillSet={skillSet} index={index} />
        ))}
      </div>

      {/* Tech Badge Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-2xl p-7"
      >
        <p className="text-slate-400 text-xs tracking-widest uppercase font-mono mb-5 text-center">Full Tech Stack</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {techBadges.map((badge, i) => (
            <span
              key={i}
              className={`px-4 py-2 rounded-lg border text-xs font-semibold font-mono cursor-default ${badge.bg} ${badge.text} ${badge.border}`}
            >
              {badge.name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
