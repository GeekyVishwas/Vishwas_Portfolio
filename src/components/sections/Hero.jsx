// components/sections/Hero.jsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Download, ArrowDown, ExternalLink, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* ── Animated background blobs ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 blob blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/15 blob blur-3xl opacity-50" style={{animationDelay:'2s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 12}s`,
              animationDelay: `${Math.random() * 8}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(108,99,255,1) 1px, transparent 1px), linear-gradient(to right, rgba(108,99,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center container-max px-4 pt-24 pb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 text-primary-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-heading font-black leading-none mb-6"
        >
          <span className="block text-white text-glow">Vishwas</span>
          <span className="block gradient-text">Gupta</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl text-gray-400 font-medium mb-6 h-8"
        >
          <Typewriter
            options={{
              strings: [
                'Data Engineer 🚀',
                'AI Developer 🤖',
                'Azure Specialist ☁️',
                'ML Enthusiast 🧠',
                'Problem Solver 💡',
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </motion.div>

        {/* Short bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building <span className="text-primary-400 font-medium">intelligent data pipelines</span> and{' '}
          <span className="text-cyan-400 font-medium">AI-powered solutions</span> at BDO India.
          2+ years of production experience with Microsoft Fabric, Azure, Python & PySpark.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-cyan-400 text-white font-semibold text-base hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-primary-500/30"
            aria-label="View my work"
          >
            <ExternalLink size={16} />
            View Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-primary-500/30 text-white font-semibold text-base hover:bg-primary-500/10 hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="Contact me"
          >
            <Mail size={16} />
            Contact Me
          </button>
          <a
            href="https://drive.google.com/file/d/1kdH6CogzhZLPYvaoyUm0pH6DtWBOFeM1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-gray-400 hover:text-white font-semibold text-base transition-all duration-200"
            aria-label="View resume on Google Drive"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/GeekyVishwas', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/vishwasgupta07', label: 'LinkedIn' },
            { icon: MdEmail, href: 'mailto:vishwasgupta666@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/40 hover:scale-110 transition-all duration-200 border border-white/5"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 mb-8"
        >
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '8+', label: 'Production Projects' },
            { value: '2x', label: 'SPOT Award' },
            { value: 'AI-102', label: 'Azure Certified' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-black gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-primary-400 transition-colors duration-200 group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
