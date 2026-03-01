import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    { degree: "Master of Computer Applications (MCA)", inst: "Quantum University" },
    { degree: "Bachelor of Science (B.Sc)", inst: "MJPRU Bareilly" }
  ];

  return (
    <section id="education" className="py-20 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter text-slate-100">My <span className="text-purple-500">Education</span></h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass-card p-8 flex items-start gap-6 group hover:border-purple-500/30 transition-colors"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{edu.degree}</h3>
              <p className="text-slate-400 font-medium">{edu.inst}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
