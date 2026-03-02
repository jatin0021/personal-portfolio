import React from 'react';
import { motion } from 'framer-motion';

const DevIllustration = () => {
  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center select-none"
      animate={{ y: [-8, 8, -8] }}
      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
    >
      <svg
        viewBox="0 0 400 420"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_40px_rgba(34,211,238,0.35)]"
        aria-label="Animated developer illustration"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#164e63" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fcd9a8" />
            <stop offset="100%" stopColor="#f5b67b" />
          </linearGradient>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1c1917" />
            <stop offset="100%" stopColor="#292524" />
          </linearGradient>
          <linearGradient id="glowRing" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <clipPath id="screenClip">
            <rect x="110" y="80" width="180" height="120" rx="6" />
          </clipPath>
        </defs>

        {/* === AMBIENT BACKGROUND GLOW === */}
        <ellipse cx="200" cy="300" rx="160" ry="60" fill="url(#ambientGlow)" />

        {/* === ORBITING PARTICLES === */}
        <g opacity="0.7">
          {/* Orbit ring 1 */}
          <ellipse cx="200" cy="200" rx="170" ry="50" fill="none" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.3">
            <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite" />
          </ellipse>
          {/* Orbiting dot 1 */}
          <circle cx="370" cy="200" r="5" fill="#22d3ee" filter="url(#glow)">
            <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite" />
          </circle>

          {/* Orbit ring 2 */}
          <ellipse cx="200" cy="200" rx="185" ry="65" fill="none" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="6 10" opacity="0.2">
            <animateTransform attributeName="transform" type="rotate" from="45 200 200" to="-315 200 200" dur="28s" repeatCount="indefinite" />
          </ellipse>
          {/* Orbiting dot 2 */}
          <g transform="rotate(45, 200, 200)">
            <circle cx="385" cy="200" r="4" fill="#60a5fa" filter="url(#glow)">
              <animateTransform attributeName="transform" type="rotate" from="45 200 200" to="-315 200 200" dur="28s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>

        {/* === FLOATING CODE SNIPPETS === */}
        {/* Top-left snippet */}
        <g opacity="0">
          <animate attributeName="opacity" values="0;0.8;0.8;0" dur="6s" begin="0s" repeatCount="indefinite" />
          <rect x="20" y="100" width="80" height="40" rx="8" fill="#1e293b" stroke="#22d3ee" strokeWidth="0.8" strokeOpacity="0.6" />
          <text x="30" y="116" fill="#22d3ee" fontSize="7" fontFamily="monospace" opacity="0.9">{'const dev = {'}</text>
          <text x="30" y="128" fill="#60a5fa" fontSize="7" fontFamily="monospace" opacity="0.9">{'  name: "Jatin"'}</text>
        </g>

        {/* Top-right snippet */}
        <g opacity="0">
          <animate attributeName="opacity" values="0;0.8;0.8;0" dur="5s" begin="2s" repeatCount="indefinite" />
          <rect x="300" y="60" width="85" height="40" rx="8" fill="#1e293b" stroke="#60a5fa" strokeWidth="0.8" strokeOpacity="0.6" />
          <text x="310" y="76" fill="#a78bfa" fontSize="7" fontFamily="monospace">{'import React'}</text>
          <text x="310" y="88" fill="#22d3ee" fontSize="7" fontFamily="monospace">{'from "react"'}</text>
        </g>

        {/* Bottom-left snippet */}
        <g opacity="0">
          <animate attributeName="opacity" values="0;0.7;0.7;0" dur="7s" begin="1s" repeatCount="indefinite" />
          <rect x="15" y="300" width="80" height="30" rx="8" fill="#1e293b" stroke="#a78bfa" strokeWidth="0.8" strokeOpacity="0.6" />
          <text x="25" y="316" fill="#4ade80" fontSize="7" fontFamily="monospace">{'// Building'}</text>
          <text x="25" y="325" fill="#22d3ee" fontSize="7" fontFamily="monospace">{'// dreams ✨'}</text>
        </g>

        {/* === DESK === */}
        <rect x="60" y="280" width="280" height="18" rx="4" fill="url(#deskGrad)" />
        <rect x="60" y="295" width="280" height="6" rx="2" fill="#0f172a" opacity="0.5" />
        {/* Desk legs */}
        <rect x="90"  y="298" width="12" height="60" rx="3" fill="#1e293b" />
        <rect x="298" y="298" width="12" height="60" rx="3" fill="#1e293b" />
        <rect x="80"  y="352" width="240" height="8" rx="3" fill="#1e293b" />

        {/* === MONITOR === */}
        <rect x="105" y="70" width="190" height="135" rx="10" fill="#0f172a" stroke="#1e3a8a" strokeWidth="2" />
        <rect x="110" y="75" width="180" height="125" rx="7" fill="url(#screenGrad)" />

        {/* Monitor stand */}
        <rect x="188" y="200" width="24" height="16" rx="2" fill="#1e293b" />
        <rect x="170" y="213" width="60" height="8" rx="3" fill="#1e293b" />

        {/* === MONITOR SCREEN — CODE === */}
        <g clipPath="url(#screenClip)">
          {/* Screen background */}
          <rect x="110" y="75" width="180" height="125" fill="#0d1117" />
          {/* Line numbers column */}
          <rect x="110" y="75" width="18" height="125" fill="#161b22" />

          {/* Animated cursor/caret line */}
          <rect x="142" y="90" width="130" height="9" rx="2" fill="#1e3a8a" opacity="0.4">
            <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
          </rect>

          {/* Code lines */}
          <text x="132" y="88" fill="#7ee787" fontSize="7.5" fontFamily="monospace">import</text>
          <text x="162" y="88" fill="#e6edf3" fontSize="7.5" fontFamily="monospace">React</text>
          <text x="185" y="88" fill="#79c0ff" fontSize="7.5" fontFamily="monospace">from</text>
          <text x="205" y="88" fill="#a5d6ff" fontSize="7.5" fontFamily="monospace">'react'</text>

          <text x="132" y="101" fill="#ff7b72" fontSize="7.5" fontFamily="monospace">const</text>
          <text x="157" y="101" fill="#79c0ff" fontSize="7.5" fontFamily="monospace">App</text>
          <text x="173" y="101" fill="#e6edf3" fontSize="7.5" fontFamily="monospace">= () =&gt;</text>
          <text x="205" y="101" fill="#e6edf3" fontSize="7.5" fontFamily="monospace">{'{'}</text>

          <text x="132" y="114" fill="#ff7b72" fontSize="7.5" fontFamily="monospace">return</text>
          <text x="158" y="114" fill="#e6edf3" fontSize="7.5" fontFamily="monospace">{'('}</text>

          <text x="140" y="127" fill="#7ee787" fontSize="7.5" fontFamily="monospace">&lt;div</text>
          <text x="162" y="127" fill="#79c0ff" fontSize="7.5" fontFamily="monospace">className</text>
          <text x="207" y="127" fill="#e6edf3" fontSize="7.5" fontFamily="monospace">="app"</text>

          <text x="140" y="140" fill="#7ee787" fontSize="7.5" fontFamily="monospace">&lt;h1&gt;</text>
          <text x="163" y="140" fill="#a5d6ff" fontSize="7.5" fontFamily="monospace">Hello!</text>
          <text x="188" y="140" fill="#7ee787" fontSize="7.5" fontFamily="monospace">&lt;/h1&gt;</text>

          {/* Blinking cursor */}
          <rect x="142" y="149" width="6" height="9" rx="1" fill="#22d3ee">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </rect>

          {/* Line numbers */}
          <text x="113" y="88"  fill="#6e7681" fontSize="6" fontFamily="monospace">1</text>
          <text x="113" y="101" fill="#6e7681" fontSize="6" fontFamily="monospace">2</text>
          <text x="113" y="114" fill="#6e7681" fontSize="6" fontFamily="monospace">3</text>
          <text x="113" y="127" fill="#6e7681" fontSize="6" fontFamily="monospace">4</text>
          <text x="113" y="140" fill="#6e7681" fontSize="6" fontFamily="monospace">5</text>
          <text x="113" y="153" fill="#6e7681" fontSize="6" fontFamily="monospace">6</text>

          {/* Screen glow scanlines */}
          <rect x="110" y="75" width="180" height="2" fill="#22d3ee" opacity="0.03">
            <animateTransform attributeName="transform" type="translate" values="0,0;0,123;0,0" dur="4s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Monitor bezel glow */}
        <rect x="105" y="70" width="190" height="135" rx="10" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.3" filter="url(#glow)" />

        {/* === KEYBOARD === */}
        <rect x="135" y="272" width="130" height="14" rx="4" fill="#1e293b" />
        {/* Key rows */}
        {[145, 160, 173, 186, 199, 212, 225, 238, 251].map((x, i) => (
          <rect key={i} x={x} y="276" width="10" height="4" rx="1" fill="#0f172a" opacity="0.8" />
        ))}
        {[145, 158, 171, 184, 197, 210, 223, 236].map((x, i) => (
          <rect key={i} x={x} y="282" width="10" height="3" rx="1" fill="#0f172a" opacity="0.8" />
        ))}

        {/* === PERSON — BODY === */}
        {/* Chair back */}
        <rect x="172" y="230" width="56" height="55" rx="8" fill="#1e293b" />
        <rect x="178" y="235" width="44" height="45" rx="6" fill="#0f172a" />

        {/* Torso / Hoodie */}
        <rect x="164" y="238" width="72" height="50" rx="12" fill="url(#bodyGrad)" />
        {/* Hoodie centre seam */}
        <line x1="200" y1="248" x2="200" y2="285" stroke="#1e3a8a" strokeWidth="2" strokeOpacity="0.5" />
        {/* Hoodie pocket */}
        <rect x="185" y="268" width="30" height="16" rx="6" fill="#1e3a8a" opacity="0.6" />

        {/* Arms */}
        {/* Left arm */}
        <path d="M164 248 Q140 260 145 275" stroke="url(#bodyGrad)" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Left hand */}
        <ellipse cx="145" cy="277" rx="10" ry="8" fill="url(#skinGrad)" />

        {/* Right arm */}
        <path d="M236 248 Q260 260 255 275" stroke="url(#bodyGrad)" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Right hand */}
        <ellipse cx="255" cy="277" rx="10" ry="8" fill="url(#skinGrad)" />

        {/* Chair seat */}
        <rect x="158" y="284" width="84" height="12" rx="6" fill="#1e293b" />

        {/* === PERSON — HEAD === */}
        {/* Neck */}
        <rect x="192" y="216" width="16" height="24" rx="6" fill="url(#skinGrad)" />

        {/* Head */}
        <ellipse cx="200" cy="200" rx="38" ry="42" fill="url(#skinGrad)" />

        {/* === HAIR === */}
        {/* Main hair */}
        <ellipse cx="200" cy="172" rx="38" ry="22" fill="url(#hairGrad)" />
        {/* Hair spikes */}
        <path d="M168 178 Q162 155 172 158 Q166 148 178 155 Q170 138 185 148 Q182 132 196 145 Q198 128 204 145 Q214 130 216 148 Q228 136 226 155 Q236 148 232 162 Q240 155 236 175" fill="url(#hairGrad)" />
        {/* Side hair */}
        <ellipse cx="162" cy="193" rx="12" ry="18" fill="url(#hairGrad)" />
        <ellipse cx="238" cy="193" rx="12" ry="18" fill="url(#hairGrad)" />

        {/* === FACE === */}
        {/* Eyes */}
        <ellipse cx="186" cy="198" rx="8" ry="9" fill="#1c1917" />
        <ellipse cx="214" cy="198" rx="8" ry="9" fill="#1c1917" />
        {/* Eye shine */}
        <circle cx="189" cy="195" r="3" fill="white" opacity="0.9" />
        <circle cx="217" cy="195" r="3" fill="white" opacity="0.9" />
        {/* Pupils */}
        <circle cx="188" cy="197" r="4" fill="#0f172a" />
        <circle cx="216" cy="197" r="4" fill="#0f172a" />
        {/* Eye highlight dots */}
        <circle cx="190" cy="195" r="1.5" fill="white" />
        <circle cx="218" cy="195" r="1.5" fill="white" />

        {/* Eyebrows */}
        <path d="M178 188 Q186 184 194 188" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M206 188 Q214 184 222 188" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <path d="M197 205 Q200 210 203 205" stroke="#e0a070" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Smile */}
        <path d="M190 218 Q200 226 210 218" stroke="#c97b4a" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Ear details */}
        <ellipse cx="162" cy="203" rx="6" ry="8" fill="url(#skinGrad)" />
        <ellipse cx="162" cy="203" rx="3" ry="5" fill="#e0a070" opacity="0.5" />
        <ellipse cx="238" cy="203" rx="6" ry="8" fill="url(#skinGrad)" />
        <ellipse cx="238" cy="203" rx="3" ry="5" fill="#e0a070" opacity="0.5" />

        {/* === HEADPHONES === */}
        <path d="M164 193 Q164 158 200 158 Q236 158 236 193" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" fill="none" />
        {/* Headphone cups */}
        <rect x="155" y="190" width="18" height="22" rx="7" fill="#1e293b" />
        <rect x="227" y="190" width="18" height="22" rx="7" fill="#1e293b" />
        <rect x="158" y="193" width="12" height="16" rx="5" fill="#22d3ee" opacity="0.7" />
        <rect x="230" y="193" width="12" height="16" rx="5" fill="#22d3ee" opacity="0.7" />

        {/* === FLOATING PARTICLES === */}
        {/* Particle 1 */}
        <circle cx="80" cy="160" r="3" fill="#22d3ee" opacity="0.7">
          <animate attributeName="cy" values="160;140;160" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Particle 2 */}
        <circle cx="320" cy="220" r="4" fill="#60a5fa" opacity="0.6">
          <animate attributeName="cy" values="220;200;220" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.15;0.6" dur="4s" repeatCount="indefinite" />
        </circle>
        {/* Particle 3 */}
        <circle cx="50" cy="250" r="2.5" fill="#a78bfa" opacity="0.5">
          <animate attributeName="cy" values="250;235;250" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
        {/* Particle 4 */}
        <circle cx="350" cy="150" r="3" fill="#22d3ee" opacity="0.5">
          <animate attributeName="cy" values="150;130;150" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3.5s" repeatCount="indefinite" />
        </circle>

        {/* === SCREEN REFLECTION ON FACE === */}
        <ellipse cx="200" cy="196" rx="30" ry="28" fill="#22d3ee" opacity="0.03">
          <animate attributeName="opacity" values="0.02;0.06;0.02" dur="3s" repeatCount="indefinite" />
        </ellipse>

        {/* === STATUS BADGE === */}
        <g>
          <rect x="240" y="155" width="80" height="26" rx="8" fill="#1e293b" stroke="#22d3ee" strokeWidth="0.8" strokeOpacity="0.6" />
          <circle cx="253" cy="168" r="4" fill="#4ade80">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <text x="261" y="172" fill="#e2e8f0" fontSize="8" fontFamily="'Inter', sans-serif" fontWeight="600">Coding...</text>
        </g>
      </svg>
    </motion.div>
  );
};

export default DevIllustration;
