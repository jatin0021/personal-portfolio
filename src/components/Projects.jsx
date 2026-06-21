import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Star } from 'lucide-react';

const projectsData = [
  {
    num: "01",
    title: "World Info Web App",
    subtitle: "Global Data Explorer",
    tech: ["React.js", "Tailwind CSS", "Axios", "React Router", "Vercel"],
    desc: "A comprehensive country information application integrating public APIs to display detailed global data. Features search functionality, regional filtering, dynamic sorting, and detailed routing views for individual countries.",
    github: "https://github.com/jatin0021/WorldInfo-react",
    live: "https://world-info-react.vercel.app/",
    accent: "blue",
    tags: ["Public API", "Filter & Search", "Responsive"],
    featured: true,
    svgIndex: 0,
  },
  {
    num: "02",
    title: "Fin CRM Dashboard",
    subtitle: "Financial Management",
    tech: ["React.js", "Tailwind CSS", "Vite", "Chart.js"],
    desc: "A professional Financial CRM designed for trading management. Features a clean, responsive Dashboard UI, streamlined onboarding flows, secure wallet integration views, and a dedicated KYC screen.",
    github: "#",
    live: "#",
    accent: "indigo",
    tags: ["Dashboard", "Charts", "KYC Flow"],
    featured: true,
    svgIndex: 1,
  },
  {
    num: "03",
    title: "Tech Store",
    subtitle: "E-Commerce Platform",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "Vercel"],
    desc: "A fully-featured tech e-commerce storefront with product listings, category filtering, a shopping cart, and a clean checkout flow. Built with a modern UI that showcases gadgets and electronics in a premium layout.",
    github: "https://github.com/jatin0021/Tech-Store",
    live: "https://tech-store-swart-three.vercel.app",
    accent: "emerald",
    tags: ["E-Commerce", "Shopping Cart", "Products"],
    featured: true,
    svgIndex: 3,
  },
  {
    num: "04",
    title: "CRUD App with Axios",
    subtitle: "REST API Integration",
    tech: ["React.js", "Axios", "JavaScript", "CSS", "Vercel"],
    desc: "A clean full-stack CRUD application demonstrating Create, Read, Update, and Delete operations using Axios for HTTP requests. Integrates with a live REST API, showcasing real-world data management patterns with form validation and state management.",
    github: "https://github.com/jatin0021/CRUD-Axios",
    live: "https://crud-using-axios.vercel.app",
    accent: "rose",
    tags: ["CRUD", "REST API", "Axios"],
    featured: false,
    svgIndex: 4,
  },
  {
    num: "05",
    title: "Delta Exchange UI",
    subtitle: "Crypto Trading Platform",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    desc: "A pixel-perfect UI clone of the Delta Exchange crypto derivatives platform. Features real-time trading views, order book displays, candlestick chart layouts, and a professional dark-themed trading terminal experience.",
    github: "https://github.com/jatin0021/delta-exchange",
    live: "#",
    accent: "amber",
    tags: ["Trading", "Crypto", "Dark Theme"],
    featured: false,
    svgIndex: 5,
  },
  {
    num: "06",
    title: "Exness Partners Portal",
    subtitle: "Affiliate & Partner Dashboard",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    desc: "A comprehensive partner/affiliate management portal inspired by the Exness broker platform. Includes multi-level dashboard views, partner analytics, commission tracking tables, and referral management flows with a polished enterprise design.",
    github: "https://github.com/jatin0021/exness-partners",
    live: "#",
    accent: "teal",
    tags: ["Dashboard", "Affiliate", "Analytics"],
    featured: false,
    svgIndex: 6,
  },
  {
    num: "07",
    title: "Portfolio Website",
    subtitle: "Personal Brand",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite", "MongoDB"],
    desc: "A professional developer portfolio featuring modern design, scroll animations, smooth interactions, and a MongoDB Atlas-connected contact form. Built with performance and clean aesthetics in mind.",
    github: "https://github.com/jatin0021/personal-portfolio",
    live: "#",
    accent: "violet",
    tags: ["Animations", "Portfolio", "MongoDB"],
    featured: false,
    svgIndex: 2,
  }
];

const accentMap = {
  blue:    { gradFrom: '#dbeafe', gradTo: '#eff6ff', text: 'text-blue-600',    border: 'border-blue-200',    badge: 'bg-blue-100 text-blue-700',    btnBg: 'bg-blue-600 hover:bg-blue-700',    svgFill: '#3b82f6', stripBg: '#3b82f6', dot: 'bg-blue-500' },
  indigo:  { gradFrom: '#e0e7ff', gradTo: '#eef2ff', text: 'text-indigo-600',  border: 'border-indigo-200',  badge: 'bg-indigo-100 text-indigo-700', btnBg: 'bg-indigo-600 hover:bg-indigo-700', svgFill: '#6366f1', stripBg: '#6366f1', dot: 'bg-indigo-500' },
  violet:  { gradFrom: '#ede9fe', gradTo: '#f5f3ff', text: 'text-violet-600',  border: 'border-violet-200',  badge: 'bg-violet-100 text-violet-700', btnBg: 'bg-violet-600 hover:bg-violet-700', svgFill: '#7c3aed', stripBg: '#7c3aed', dot: 'bg-violet-500' },
  emerald: { gradFrom: '#d1fae5', gradTo: '#ecfdf5', text: 'text-emerald-600', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700',btnBg: 'bg-emerald-600 hover:bg-emerald-700',svgFill: '#10b981', stripBg: '#10b981', dot: 'bg-emerald-500' },
  rose:    { gradFrom: '#ffe4e6', gradTo: '#fff1f2', text: 'text-rose-600',    border: 'border-rose-200',    badge: 'bg-rose-100 text-rose-700',    btnBg: 'bg-rose-600 hover:bg-rose-700',    svgFill: '#f43f5e', stripBg: '#f43f5e', dot: 'bg-rose-500' },
  amber:   { gradFrom: '#fef3c7', gradTo: '#fffbeb', text: 'text-amber-600',   border: 'border-amber-200',   badge: 'bg-amber-100 text-amber-700',   btnBg: 'bg-amber-600 hover:bg-amber-700',   svgFill: '#f59e0b', stripBg: '#f59e0b', dot: 'bg-amber-500' },
  teal:    { gradFrom: '#ccfbf1', gradTo: '#f0fdfa', text: 'text-teal-600',    border: 'border-teal-200',    badge: 'bg-teal-100 text-teal-700',    btnBg: 'bg-teal-600 hover:bg-teal-700',    svgFill: '#14b8a6', stripBg: '#14b8a6', dot: 'bg-teal-500' },
};


const Projects = () => {
  return (
    <section id="projects" className="py-24 section-divider relative z-10 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14"
      >
        <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-3 block font-mono">Portfolio Showcase</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-5 font-poppins text-slate-900">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded-full" />
      </motion.div>

      {/* 3-column grid with generous gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 w-full">
        {projectsData.map((project, index) => {
          const c = accentMap[project.accent];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
              className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 overflow-hidden flex flex-col transition-shadow duration-300"
              style={{ transition: 'box-shadow 0.3s ease' }}
            >
              {/* Coloured top strip (4px) */}
              <div className="h-1 w-full" style={{ background: c.stripBg }} />

              {/* Illustration header */}
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                  minHeight: '200px',
                  background: `linear-gradient(135deg, ${c.gradFrom} 0%, ${c.gradTo} 100%)`,
                }}
              >
                {/* Large faded watermark number */}
                <span
                  className={`absolute -bottom-3 -right-2 text-[7rem] font-black font-poppins select-none pointer-events-none ${c.text}`}
                  style={{ opacity: 0.07, lineHeight: 1 }}
                >
                  {project.num}
                </span>

                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute top-3 left-3 flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-full shadow-sm">
                    <Star size={10} fill="currentColor" /> Featured
                  </span>
                )}

                {/* SVG Illustration */}
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  className="w-36 h-36 drop-shadow-sm"
                  stroke={c.svgFill}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  {project.svgIndex === 0 && (
                    <>
                      <circle cx="100" cy="100" r="80" fill={c.svgFill} fillOpacity="0.07" />
                      <ellipse cx="100" cy="100" rx="42" ry="80" strokeOpacity="0.6" />
                      <ellipse cx="100" cy="100" rx="80" ry="28" strokeOpacity="0.6" />
                      <line x1="100" y1="20" x2="100" y2="180" strokeOpacity="0.4" />
                      <line x1="20" y1="100" x2="180" y2="100" strokeOpacity="0.4" />
                      <circle cx="100" cy="100" r="8" fill={c.svgFill} fillOpacity="0.5" stroke="none" />
                    </>
                  )}
                  {project.svgIndex === 1 && (
                    <>
                      <rect x="20" y="30" width="160" height="140" rx="12" fill={c.svgFill} fillOpacity="0.07" />
                      <path d="M20 65 L180 65" strokeOpacity="0.6" />
                      <circle cx="42" cy="48" r="5" fill="#ef4444" stroke="none" />
                      <circle cx="60" cy="48" r="5" fill="#eab308" stroke="none" />
                      <circle cx="78" cy="48" r="5" fill="#22c55e" stroke="none" />
                      <rect x="35" y="82" width="55" height="68" rx="6" fill={c.svgFill} fillOpacity="0.12" stroke="none" />
                      <rect x="100" y="105" width="65" height="45" rx="6" fill={c.svgFill} fillOpacity="0.12" stroke="none" />
                      <path d="M35 130 Q60 110 90 118 T165 105" strokeOpacity="0.7" strokeWidth="2.5" />
                      <circle cx="165" cy="105" r="4" fill={c.svgFill} stroke="none" />
                    </>
                  )}
                  {project.svgIndex === 2 && (
                    <>
                      <rect x="25" y="25" width="150" height="150" rx="20" fill={c.svgFill} fillOpacity="0.07" />
                      <circle cx="100" cy="80" r="30" fill={c.svgFill} fillOpacity="0.12" strokeOpacity="0.6" />
                      <path d="M70 120 Q100 105 130 120" strokeOpacity="0.7" strokeWidth="2" />
                      <rect x="60" y="130" width="80" height="10" rx="5" fill={c.svgFill} fillOpacity="0.12" stroke="none" />
                      <rect x="75" y="148" width="50" height="7" rx="3.5" fill={c.svgFill} fillOpacity="0.08" stroke="none" />
                      <circle cx="140" cy="40" r="18" fill={c.svgFill} fillOpacity="0.15" strokeOpacity="0.5" />
                      <path d="M133 40 L138 45 L148 35" strokeOpacity="0.8" strokeWidth="2" fill="none" />
                    </>
                  )}
                  {project.svgIndex === 3 && (
                    <>
                      <rect x="20" y="20" width="160" height="160" rx="18" fill={c.svgFill} fillOpacity="0.06" />
                      <path d="M65 80 L55 55 Q52 48 60 48 L140 48 Q148 48 145 55 L135 80 Z" fill={c.svgFill} fillOpacity="0.15" strokeOpacity="0.7" strokeWidth="1.5" />
                      <path d="M65 80 L60 148 Q59 156 67 156 L133 156 Q141 156 140 148 L135 80 Z" fill={c.svgFill} fillOpacity="0.1" strokeOpacity="0.6" />
                      <path d="M82 80 Q82 62 100 62 Q118 62 118 80" fill="none" strokeOpacity="0.8" strokeWidth="2" />
                      <circle cx="82" cy="80" r="4" fill={c.svgFill} fillOpacity="0.6" stroke="none" />
                      <circle cx="118" cy="80" r="4" fill={c.svgFill} fillOpacity="0.6" stroke="none" />
                      <rect x="78" y="108" width="44" height="12" rx="6" fill={c.svgFill} fillOpacity="0.2" stroke="none" />
                      <rect x="85" y="126" width="30" height="8" rx="4" fill={c.svgFill} fillOpacity="0.12" stroke="none" />
                    </>
                  )}
                  {project.svgIndex === 4 && (
                    <>
                      <rect x="20" y="20" width="160" height="160" rx="18" fill={c.svgFill} fillOpacity="0.06" />
                      <ellipse cx="100" cy="55" rx="40" ry="12" fill={c.svgFill} fillOpacity="0.15" strokeOpacity="0.7" />
                      <rect x="60" y="55" width="80" height="32" fill={c.svgFill} fillOpacity="0.08" stroke="none" />
                      <ellipse cx="100" cy="87" rx="40" ry="12" fill={c.svgFill} fillOpacity="0.15" strokeOpacity="0.7" />
                      <rect x="60" y="87" width="80" height="32" fill={c.svgFill} fillOpacity="0.06" stroke="none" />
                      <ellipse cx="100" cy="119" rx="40" ry="12" fill={c.svgFill} fillOpacity="0.15" strokeOpacity="0.7" />
                      <path d="M60 55 L60 119" strokeOpacity="0.4" />
                      <path d="M140 55 L140 119" strokeOpacity="0.4" />
                      <line x1="75" y1="71" x2="125" y2="71" strokeOpacity="0.3" strokeDasharray="6 4" />
                      <line x1="75" y1="103" x2="125" y2="103" strokeOpacity="0.3" strokeDasharray="6 4" />
                      <circle cx="148" cy="148" r="20" fill={c.svgFill} fillOpacity="0.15" strokeOpacity="0.5" />
                      <path d="M140 148 L145 153 L157 141" fill="none" strokeOpacity="0.9" strokeWidth="2" />
                    </>
                  )}
                  {project.svgIndex === 5 && (
                    <>
                      <rect x="20" y="20" width="160" height="160" rx="18" fill={c.svgFill} fillOpacity="0.06" />
                      <line x1="35" y1="160" x2="175" y2="160" strokeOpacity="0.25" />
                      <line x1="50" y1="110" x2="50" y2="75" strokeOpacity="0.5" />
                      <rect x="44" y="90" width="12" height="20" rx="2" fill={c.svgFill} fillOpacity="0.6" stroke="none" />
                      <line x1="73" y1="130" x2="73" y2="80" strokeOpacity="0.5" />
                      <rect x="67" y="100" width="12" height="30" rx="2" fill="#ef4444" fillOpacity="0.5" stroke="none" />
                      <line x1="96" y1="100" x2="96" y2="55" strokeOpacity="0.5" />
                      <rect x="90" y="68" width="12" height="32" rx="2" fill={c.svgFill} fillOpacity="0.6" stroke="none" />
                      <line x1="119" y1="120" x2="119" y2="75" strokeOpacity="0.5" />
                      <rect x="113" y="90" width="12" height="30" rx="2" fill="#ef4444" fillOpacity="0.5" stroke="none" />
                      <line x1="142" y1="90" x2="142" y2="45" strokeOpacity="0.5" />
                      <rect x="136" y="58" width="12" height="32" rx="2" fill={c.svgFill} fillOpacity="0.6" stroke="none" />
                      <path d="M44 135 Q73 120 96 95 Q119 80 142 55" fill="none" strokeOpacity="0.6" strokeWidth="2" strokeDasharray="5 3" />
                    </>
                  )}
                  {project.svgIndex === 6 && (
                    <>
                      <rect x="20" y="20" width="160" height="160" rx="18" fill={c.svgFill} fillOpacity="0.06" />
                      <circle cx="100" cy="100" r="22" fill={c.svgFill} fillOpacity="0.18" strokeOpacity="0.7" strokeWidth="2" />
                      <circle cx="100" cy="100" r="10" fill={c.svgFill} fillOpacity="0.5" stroke="none" />
                      <circle cx="50" cy="60" r="14" fill={c.svgFill} fillOpacity="0.12" strokeOpacity="0.5" />
                      <circle cx="150" cy="60" r="14" fill={c.svgFill} fillOpacity="0.12" strokeOpacity="0.5" />
                      <circle cx="45" cy="145" r="14" fill={c.svgFill} fillOpacity="0.12" strokeOpacity="0.5" />
                      <circle cx="155" cy="145" r="14" fill={c.svgFill} fillOpacity="0.12" strokeOpacity="0.5" />
                      <line x1="100" y1="78" x2="58" y2="68" strokeOpacity="0.35" strokeDasharray="4 3" />
                      <line x1="100" y1="78" x2="142" y2="68" strokeOpacity="0.35" strokeDasharray="4 3" />
                      <line x1="100" y1="122" x2="55" y2="135" strokeOpacity="0.35" strokeDasharray="4 3" />
                      <line x1="100" y1="122" x2="145" y2="135" strokeOpacity="0.35" strokeDasharray="4 3" />
                      <rect x="70" y="148" width="8" height="18" rx="2" fill={c.svgFill} fillOpacity="0.3" stroke="none" />
                      <rect x="82" y="140" width="8" height="26" rx="2" fill={c.svgFill} fillOpacity="0.4" stroke="none" />
                      <rect x="94" y="145" width="8" height="21" rx="2" fill={c.svgFill} fillOpacity="0.3" stroke="none" />
                      <rect x="106" y="135" width="8" height="31" rx="2" fill={c.svgFill} fillOpacity="0.5" stroke="none" />
                      <rect x="118" y="142" width="8" height="24" rx="2" fill={c.svgFill} fillOpacity="0.35" stroke="none" />
                    </>
                  )}
                </svg>
              </div>

              {/* Divider line with accent colour */}
              <div className="h-px w-full" style={{ background: `linear-gradient(to right, ${c.stripBg}55, transparent)` }} />

              {/* Content body */}
              <div className="flex flex-col flex-1 p-6">

                {/* Subtitle + title */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                    <p className={`text-xs font-semibold font-mono tracking-widest uppercase ${c.text}`}>{project.subtitle}</p>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-poppins leading-snug">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {project.desc}
                </p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, t) => (
                    <span
                      key={t}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border font-mono ${c.badge} ${c.border}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 flex-1 text-sm font-semibold text-white ${c.btnBg} py-2.5 rounded-xl shadow-sm transition-all duration-200`}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 py-2.5 rounded-xl transition-all duration-200"
                  >
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
