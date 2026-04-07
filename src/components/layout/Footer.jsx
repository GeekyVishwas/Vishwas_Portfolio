// components/layout/Footer.jsx
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const quickLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/GeekyVishwas', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/vishwasgupta07', label: 'LinkedIn' },
  { icon: MdEmail, href: 'mailto:vishwasgupta666@gmail.com', label: 'Email' },
];

export function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-heading font-bold text-lg gradient-text">Vishwas Gupta</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Data Engineer & AI Developer building intelligent solutions with Microsoft Fabric, Azure, and Python.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-500 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Connect</h3>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500 mx-1" /> by Vishwas Gupta &copy; {new Date().getFullYear()}
          </p>

        </div>
      </div>
    </footer>
  );
}
