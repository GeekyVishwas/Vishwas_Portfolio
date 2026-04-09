// App.jsx — Main app component
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { useVisitorAnalytics } from './hooks/useVisitorAnalytics';
import { AnimatedCursor } from './components/ui/AnimatedCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Resume } from './components/sections/Resume';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { ResumeModal } from './components/ui/ResumeModal';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [resumeOpen, setResumeOpen] = useState(false);
  useVisitorAnalytics(); // Ping Telegram with visitor details on mount

  return (
    <div className={isDark ? 'dark' : 'light'}>
      {/* Custom animated cursor (desktop only) */}
      <AnimatedCursor />

      {/* Sticky navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Page content */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume onOpenResume={() => setResumeOpen(true)} />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Resume popup modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Scroll arrows */}
      <ScrollButtons />
    </div>
  );
}

function ScrollButtons() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToTop}
        className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 hover:scale-110 transition-transform duration-200"
        aria-label="Scroll to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </motion.button>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.1 }}
        onClick={scrollToBottom}
        className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 hover:scale-110 transition-transform duration-200"
        aria-label="Scroll to bottom"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.button>
    </div>
  );
}

export default App;
