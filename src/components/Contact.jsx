import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Sparkles, AlertCircle } from 'lucide-react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Custom Ripple state
  const [ripple, setRipple] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      await axios.post(`${API_URL}/api/contact`, formData, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 10000,
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(
        err.response?.data?.message ||
          'Failed to send message. Please try again or email me directly.'
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleButtonRipple = (e) => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative z-10 w-full overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center md:text-left"
      >
        <span className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-2 block font-poppins">Connect</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-slate-100">Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-md">Something Epic</span></h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-16 mx-auto md:mx-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        <motion.div 
          className="lg:col-span-2 space-y-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-slate-400 text-lg leading-relaxed font-inter font-light">
            I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to connect, I'm always ready to chat!
          </p>
          
          <div className="space-y-6">
            <a
              href="mailto:jatinchauhan457@gmail.com"
              onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:jatinchauhan457@gmail.com'; }}
              className="flex items-center gap-6 text-slate-300 hover:text-cyan-400 group transition-all duration-300 w-fit cursor-pointer"
            >
              <div className="w-14 h-14 bg-slate-800/80 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 border border-transparent shadow-lg transition-all duration-300 group-hover:scale-110">
                <Mail size={24} className="group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </div>
              <div>
                <span className="block text-sm text-slate-500 font-medium mb-1">Email directly</span>
                <span className="font-semibold text-lg font-poppins tracking-wide">jatinchauhan457@gmail.com</span>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/jatin-kumar-bb958a294/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-slate-300 hover:text-blue-500 group transition-all duration-300 w-fit">
              <div className="w-14 h-14 bg-slate-800/80 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-400/30 border border-transparent shadow-lg transition-all duration-300 group-hover:scale-110">
                <Linkedin size={24} className="group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              </div>
              <div>
                <span className="block text-sm text-slate-500 font-medium mb-1">Professional network</span>
                <span className="font-semibold text-lg font-poppins tracking-wide">LinkedIn Profile</span>
              </div>
            </a>
            
            <a href="https://github.com/jatin0021" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-slate-300 hover:text-white group transition-all duration-300 w-fit">
              <div className="w-14 h-14 bg-slate-800/80 rounded-2xl flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 border border-transparent shadow-lg transition-all duration-300 group-hover:scale-110">
                <Github size={24} className="group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <div>
                <span className="block text-sm text-slate-500 font-medium mb-1">Source & Repos</span>
                <span className="font-semibold text-lg font-poppins tracking-wide">GitHub Profile</span>
              </div>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-3 glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Abstract Form Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -z-10 animate-pulse" style={{animationDuration: '6s'}}></div>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Floating Label Input Group */}
              <div className="relative group/input">
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="peer w-full bg-slate-900/40 border-b-2 border-slate-700 px-0 py-4 text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors font-inter placeholder-transparent bg-transparent"
                  placeholder="John Doe"
                />
                <label htmlFor="name" className="absolute left-0 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-cyan-400 peer-focus:text-xs font-medium cursor-text">
                  Your Name
                </label>
              </div>

              <div className="relative group/input">
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="peer w-full bg-slate-900/40 border-b-2 border-slate-700 px-0 py-4 text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors font-inter placeholder-transparent bg-transparent"
                  placeholder="john@example.com"
                />
                <label htmlFor="email" className="absolute left-0 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-cyan-400 peer-focus:text-xs font-medium cursor-text">
                  Your Email
                </label>
              </div>
            </div>
            
            <div className="relative group/input mt-8">
              <textarea 
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="peer w-full bg-slate-900/40 border-b-2 border-slate-700 px-0 py-4 text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors font-inter placeholder-transparent bg-transparent resize-none leading-relaxed"
                placeholder="I'd like to discuss a project..."
              />
              <label htmlFor="message" className="absolute left-0 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-cyan-400 peer-focus:text-xs font-medium cursor-text">
                Your Message
              </label>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              onMouseDown={handleButtonRipple}
              className="magnetic-btn w-full bg-slate-100 text-[#0a0f1c] hover:bg-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 group overflow-hidden relative"
            >
              {/* Ripple Effect */}
              {ripple && (
                 <span className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping z-0" style={{ transform: 'scale(1.5)', animationDuration: '600ms' }}></span>
              )}
              
              <span className="relative z-10 flex items-center gap-3">
                {isSubmitting ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                      <Sparkles size={20} className="text-cyan-600" />
                    </motion.div>
                    Sending Protocol...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </span>
            </button>
            
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full bg-green-500/10 border border-green-500/30 text-green-400 py-4 px-6 rounded-xl flex items-center justify-center gap-3 mt-4"
                >
                  <Sparkles size={18} />
                  <span className="font-medium">Message launched successfully! I'll be in touch soon. 🚀</span>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full bg-red-500/10 border border-red-500/30 text-red-400 py-4 px-6 rounded-xl flex items-center justify-center gap-3 mt-4"
                >
                  <AlertCircle size={18} />
                  <span className="font-medium">{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
