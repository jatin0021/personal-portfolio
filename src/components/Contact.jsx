import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, AlertCircle, CheckCircle } from 'lucide-react';
import axios from 'axios';

/**
 * Contact form — delivers submissions directly to your email using Web3Forms.
 * Completely free, no database needed, and works natively on Vercel.
 *
 * To set up:
 *   1. Get a free Access Key from: https://web3forms.com/ (takes 10 seconds)
 *   2. Add it to your Vercel/local env as: VITE_WEB3FORMS_KEY=your_key_here
 */
const WEB3FORMS_API = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    if (!ACCESS_KEY) {
      setSubmitStatus('error');
      setErrorMessage('Web3Forms Access Key is missing. Please add VITE_WEB3FORMS_KEY to your environment variables.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        WEB3FORMS_API,
        {
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission - Portfolio',
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(response.data.message || 'Unexpected response from Web3Forms.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(
        err.response?.data?.message ||
        err.message ||
        'Failed to send message. Please try again or email me directly.'
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 7000);
    }
  };

  const inputClass =
    'w-full border border-slate-200 bg-slate-50 focus:bg-white rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500';

  return (
    <section id="contact" className="py-24 section-divider relative z-10 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14 text-center md:text-left"
      >
        <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-2 block font-mono">Connect</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-5 font-poppins text-slate-900">
          Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Together</span>
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto md:mx-0" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

        {/* Left: Info */}
        <motion.div
          className="lg:col-span-2 space-y-8"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-slate-500 text-base leading-relaxed font-light">
            I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to connect, I'm always ready to chat!
          </p>

          <div className="space-y-5">
            {[
              {
                href: "mailto:jatinchauhan457@gmail.com",
                icon: <Mail size={20} />,
                label: "Email directly",
                value: "jatinchauhan457@gmail.com",
              },
              {
                href: "https://www.linkedin.com/in/jatin-kumar-bb958a294/",
                icon: <Linkedin size={20} />,
                label: "Professional network",
                value: "LinkedIn Profile",
                external: true,
              },
              {
                href: "https://github.com/jatin0021",
                icon: <Github size={20} />,
                label: "Source & Repos",
                value: "GitHub Profile",
                external: true,
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 text-slate-700 hover:text-blue-600 group w-fit"
              >
                <div className="w-11 h-11 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:border-blue-300 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-medium mb-0.5">{item.label}</span>
                  <span className="font-semibold text-sm font-poppins">{item.value}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          className="lg:col-span-3 glass-card p-7 md:p-10 rounded-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >


          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-600 mb-1.5 font-mono uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder="enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-600 mb-1.5 font-mono uppercase tracking-wide">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-600 mb-1.5 font-mono uppercase tracking-wide">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none leading-relaxed`}
                placeholder="enter your message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-3 disabled:opacity-60 shadow-sm shadow-blue-200"
            >
              {isSubmitting ? (
                <>
                  <div
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    style={{ animation: 'spin 0.8s linear infinite' }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={17} />
                </>
              )}
            </button>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 py-3 px-5 rounded-xl text-sm font-medium"
                >
                  <CheckCircle size={17} />
                  Message received! I'll get back to you soon. 🎉
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 py-3 px-5 rounded-xl text-sm font-medium"
                >
                  <AlertCircle size={17} />
                  {errorMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default Contact;
