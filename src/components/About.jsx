import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Zap, ArrowUpRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const highlights = [
    { icon: <Code size={24} />, title: "Component Architecture", desc: "Building scalable, reusable React systems." },
    { icon: <Server size={24} />, title: "API Integration", desc: "Seamless REST APIs & Axios standard flows." },
    { icon: <Layout size={24} />, title: "Responsive UI", desc: "Mobile-first SaaS designs with Tailwind." },
    { icon: <Zap size={24} />, title: "Optimization", desc: "Tuning performance & 60fps animations." },
  ];

  const stats = [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Projects Built", value: 15, suffix: "+" },
    { label: "Code Commits", value: 500, suffix: "+" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 md:flex justify-between items-end"
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-100 tracking-tight">
            Crafting scalable <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">digital experiences</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-8 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-inter font-light">
            I'm a passionate Frontend Developer turning complex problems into beautiful, intuitive interfaces. 
            With a strong foundation in modern JavaScript and React.js, I thrive on delivering highly animated, performance-driven web applications.
          </p>
        </div>

        <div className="mt-12 md:mt-0 flex gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-4xl font-bold text-slate-100 font-poppins">
                {inView ? <CountUp end={stat.value} duration={2.5} /> : '0'}
                <span className="text-cyan-400">{stat.suffix}</span>
              </span>
              <span className="text-sm tracking-wider text-slate-500 uppercase mt-2 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {highlights.map((item, index) => (
          <Tilt 
            key={index}
            tiltMaxAngleX={10} 
            tiltMaxAngleY={10} 
            perspective={1000} 
            transitionSpeed={1000} 
            scale={1.02}
            className="h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 flex flex-col items-start h-full group cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-400/0 group-hover:from-blue-500/10 group-hover:to-cyan-400/10 transition-colors duration-500" />
              
              <div className="w-14 h-14 rounded-xl bg-[#0a0f1c]/80 border border-white/5 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-500 relative z-10">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-3 font-poppins relative z-10">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-inter relative z-10">{item.desc}</p>
              
              <div className="mt-auto pt-6 w-full flex justify-end opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ArrowUpRight size={20} className="text-cyan-400" />
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default About;
