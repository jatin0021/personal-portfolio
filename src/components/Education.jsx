import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Education = () => {
  const educationData = [
    { degree: "Master of Computer Applications (MCA)", inst: "Quantum University", color: "blue" },
    { degree: "Bachelor of Science (B.Sc)", inst: "MJPRU Bareilly", color: "purple" }
  ];

  return (
    <section id="education" className="py-24 border-t border-white/5 relative z-10 w-full overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
         <span className="text-pink-400 font-semibold tracking-widest uppercase text-sm mb-2 block font-poppins">Academic Background</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-100">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 drop-shadow-md">Education</span></h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full mb-16 shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <Tilt 
             key={index}
             tiltMaxAngleX={8}
             tiltMaxAngleY={8}
             scale={1.03}
             transitionSpeed={1000}
             perspective={1000}
             className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card p-10 flex flex-col items-start min-h-[220px] rounded-3xl group cursor-pointer relative overflow-hidden
                ${edu.color === 'blue' ? 'hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 'hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]'}
              `}
            >
              {/* Backglow element */}
              <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 
                 ${edu.color === 'blue' ? 'bg-blue-500/10 group-hover:bg-blue-500/20' : 'bg-purple-500/10 group-hover:bg-purple-500/20'}
              `}></div>

              <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:scale-110 shadow-lg
                ${edu.color === 'blue' ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white border border-blue-500/20' : 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white border border-purple-500/20'}
              `}>
                <GraduationCap size={32} />
              </div>
              <div className="relative z-10 w-full">
                <h3 className="text-2xl font-bold text-slate-100 mb-3 font-poppins">{edu.degree}</h3>
                <div className="flex items-center justify-between w-full">
                  <p className="text-slate-400 font-medium font-inter text-lg">{edu.inst}</p>
                  <Award className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${edu.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Education;
