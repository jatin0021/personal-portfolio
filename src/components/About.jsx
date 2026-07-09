import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Zap, ArrowUpRight } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const highlights = [
    {
      icon: <Code size={20} />,
      title: "Component Architecture",
      desc: "Building scalable, reusable React systems with clean DRY principles.",
      accent: "blue",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
    },
    {
      icon: <Server size={20} />,
      title: "API Integration",
      desc: "Seamless REST APIs & Axios standard flows with clean error handling.",
      accent: "indigo",
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-100",
    },
    {
      icon: <Layout size={20} />,
      title: "Responsive UI",
      desc: "Mobile-first designs with Tailwind, pixel-perfect across all screens.",
      accent: "violet",
      bg: "bg-violet-50",
      text: "text-violet-600",
      border: "border-violet-100",
    },
    {
      icon: <Zap size={20} />,
      title: "Performance",
      desc: "Optimizing for fast load times, lazy loading & great Core Web Vitals.",
      accent: "amber",
      bg: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-100",
    },
  ];

  const stats = [
    { label: "Years Experience", value: 1, suffix: "+", desc: "Professional dev" },
    { label: "Projects Built", value: 15, suffix: "+", desc: "React apps shipped" },
    { label: "Code Commits", value: 300, suffix: "+", desc: "GitHub contributions" },
    { label: "Technologies", value: 10, suffix: "+", desc: "Tools & frameworks" },
  ];

  return (
    <section id="about" className="py-24 section-divider relative overflow-hidden" ref={ref}>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14"
      >
        <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-3 block font-mono">Who I Am</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-5 font-poppins text-slate-900 tracking-tight">
          Crafting scalable{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            digital experiences
          </span>
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded-full mb-7" />
        <p className="text-slate-500 text-lg leading-relaxed max-w-2xl font-light">
          I'm a passionate <span className="text-slate-800 font-medium">Frontend Developer</span> with experience in building responsive and scalable web applications using <span className="text-blue-600 font-medium">React.js, Tailwind CSS, JavaScript, WordPress, and Shopify</span>. I specialize in API integration, component-based architecture, and performance optimization to deliver production-ready frontend applications.
        </p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-5 text-center"
          >
            <div className="text-3xl font-black text-slate-900 font-poppins mb-1">
              {inView ? (
                <CountUp end={stat.value} duration={2.2} />
              ) : '0'}
              <span className="text-blue-600">{stat.suffix}</span>
            </div>
            <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">{stat.label}</div>
            <div className="text-xs text-slate-400 mt-1 font-mono">{stat.desc}</div>
          </div>
        ))}
      </motion.div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
            className="glass-card p-6 flex flex-col items-start group cursor-default"
          >
            {/* Icon */}
            <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} ${item.text} flex items-center justify-center mb-4`}>
              {item.icon}
            </div>

            <h3 className="text-sm font-bold text-slate-800 mb-2 font-poppins">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light flex-1">{item.desc}</p>

            <div className={`mt-4 ${item.text} opacity-60 group-hover:opacity-100`}>
              <ArrowUpRight size={16} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
