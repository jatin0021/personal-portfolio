import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Zap, ArrowUpRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const highlights = [
    { 
      icon: <Code size={22} />, 
      title: "Component Architecture", 
      desc: "Building scalable, reusable React systems with clean DRY principles.",
      color: "cyan",
      bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", glow: "rgba(34,211,238,0.3)"
    },
    { 
      icon: <Server size={22} />, 
      title: "API Integration", 
      desc: "Seamless REST APIs & Axios standard flows with clean error handling.",
      color: "blue",
      bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", glow: "rgba(59,130,246,0.3)"
    },
    { 
      icon: <Layout size={22} />, 
      title: "Responsive UI", 
      desc: "Mobile-first SaaS designs with Tailwind, pixel-perfect across all screens.",
      color: "purple",
      bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", glow: "rgba(168,85,247,0.3)"
    },
    { 
      icon: <Zap size={22} />, 
      title: "Performance", 
      desc: "Tuning for 60fps animations, lazy loading & optimal Core Web Vitals.",
      color: "amber",
      bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", glow: "rgba(245,158,11,0.3)"
    },
  ];

  const stats = [
    { label: "Years Experience", value: 2, suffix: "+", desc: "Professional dev" },
    { label: "Projects Built", value: 15, suffix: "+", desc: "React apps shipped" },
    { label: "Code Commits", value: 500, suffix: "+", desc: "GitHub contributions" },
    { label: "Technologies Used", value: 10, suffix: "+", desc: "Tools & frameworks" },
  ];

  return (
    <section id="about" className="py-24 section-divider relative overflow-hidden" ref={ref}>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16"
      >
        <span className="text-blue-400 font-semibold tracking-widest uppercase text-xs mb-3 block font-mono">Who I Am</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-100 tracking-tight">
          Crafting scalable{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            digital experiences
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-8" style={{ boxShadow: '0 0 20px rgba(34,211,238,0.5)' }} />
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-light">
          I'm a passionate <span className="text-slate-200 font-medium">Frontend Developer</span> turning complex problems into beautiful, intuitive interfaces. 
          With a strong foundation in modern JavaScript and React.js, I thrive on delivering 
          highly animated, performance-driven web applications.
        </p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, type: "spring" }}
            className="glass-card rounded-2xl p-5 text-center group hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-3xl font-black text-slate-100 font-poppins mb-1">
              {inView ? (
                <CountUp end={stat.value} duration={2.5} />
              ) : '0'}
              <span className="text-cyan-400">{stat.suffix}</span>
            </div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">{stat.label}</div>
            <div className="text-xs text-slate-600 mt-1 font-mono">{stat.desc}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {highlights.map((item, index) => (
          <Tilt 
            key={index}
            tiltMaxAngleX={10} 
            tiltMaxAngleY={10} 
            perspective={1000} 
            transitionSpeed={1200} 
            scale={1.02}
            className="h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.12 }}
              className="glass-card card-shine p-7 flex flex-col items-start h-full group cursor-default relative overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${item.glow.replace('0.3', '0.08')}, transparent 70%)` }}
              />
              
              {/* Icon */}
              <div 
                className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} ${item.text} flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500 relative z-10`}
                style={{ boxShadow: `0 0 0 0 ${item.glow}` }}
              >
                {item.icon}
              </div>
              
              <h3 className="text-base font-bold text-slate-200 mb-2 font-poppins relative z-10">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light relative z-10 flex-1">{item.desc}</p>
              
              {/* Arrow - slides in on hover */}
              <div className="mt-5 flex justify-end w-full opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-400 relative z-10">
                <div className={`w-7 h-7 rounded-lg ${item.bg} ${item.text} flex items-center justify-center`}>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default About;
