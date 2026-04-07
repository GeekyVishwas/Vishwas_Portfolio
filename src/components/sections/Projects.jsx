// components/sections/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Lock } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { allProjects, categories } from '../../data/projects';

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onClick={() => project.github && window.open(project.github, '_blank')}
      className={`project-card relative group rounded-2xl glass border border-white/5 overflow-hidden hover-lift ${project.github ? 'cursor-pointer' : ''}`}
      aria-label={project.title}
    >
      {/* Card header / visual */}
      <div className={`relative h-44 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
        {/* Icon */}
        <span className="text-6xl z-10 group-hover:scale-110 transition-transform duration-300">
          {project.icon}
        </span>

        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />

        {/* Overlay on hover */}
        <div className="project-overlay rounded-t-2xl">
          <p className="text-white text-sm text-center leading-relaxed line-clamp-4">
            {project.description}
          </p>
          <div className="flex gap-3 mt-4">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub — ${project.title}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={14} /> GitHub
              </a>
            ) : (
              <span className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 text-white/70 text-sm">
                <Lock size={12} /> Confidential
              </span>
            )}
          </div>
        </div>

        {/* Type badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
            project.type === 'professional'
              ? 'bg-white/20 text-white'
              : 'bg-black/30 text-white'
          }`}>
            {project.type === 'professional' ? '🏢 Pro' : '🛠️ Personal'}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading font-bold text-white text-base leading-snug line-clamp-2">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded text-xs font-medium bg-white/5 text-gray-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-3 pt-3 border-t border-white/5">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="flex items-center gap-1.5 text-gray-400 hover:text-primary-400 text-xs transition-colors font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={13} /> View Code
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-gray-600 text-xs">
              <Lock size={12} /> Internal Project
            </span>
          )}
          <span className="ml-auto px-2 py-0.5 rounded-full bg-gray-800/50 text-gray-500 text-xs">
            {project.category}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeFilter === 'All'
    ? allProjects
    : activeFilter === 'Professional' || activeFilter === 'Personal'
      ? allProjects.filter(p => p.type === activeFilter.toLowerCase())
      : allProjects.filter(p => p.category === activeFilter);

  const getFilterCount = (cat) => {
    if (cat === 'All') return allProjects.length;
    if (cat === 'Professional' || cat === 'Personal') {
      return allProjects.filter(p => p.type === cat.toLowerCase()).length;
    }
    return allProjects.filter(p => p.category === cat).length;
  };

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/3 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="container-max">
        <SectionHeader
          tag="My Work"
          title="Projects"
          subtitle="From enterprise-grade data pipelines to AI computer vision — here's what I've built."
        />

        {/* Filter tabs */}
        <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveFilter(cat); setShowAll(false); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-primary-500 to-cyan-400 text-white shadow-lg shadow-primary-500/30'
                  : 'glass text-gray-400 hover:text-white border border-white/5 hover:border-primary-500/30'
              }`}
              aria-pressed={activeFilter === cat}
            >
              {cat}
              <span className="ml-2 text-xs opacity-70">
                ({getFilterCount(cat)})
              </span>
            </button>
          ))}
        </ScrollReveal>

        {/* Professional projects heading */}
        {activeFilter === 'All' && (
          <ScrollReveal className="mb-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary-500/30" />
              <span className="text-sm font-semibold text-primary-400 px-3">🏢 Professional Work (BDO India)</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary-500/30" />
            </div>
          </ScrollReveal>
        )}

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <AnimatePresence>
            {displayed.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more */}
        {filtered.length > 6 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="px-6 py-3 rounded-xl glass border border-primary-500/30 text-primary-400 hover:bg-primary-500/10 font-medium text-sm transition-all duration-200 hover:scale-105"
            >
              {showAll ? '↑ Show Less' : `↓ Show All ${filtered.length} Projects`}
            </button>
          </div>
        )}

        {/* Note about professional projects */}
        <ScrollReveal className="mt-10">
          <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 text-center">
            <p className="text-yellow-400/80 text-sm">
              🔒 Professional projects are internal to BDO India and have no public links. Personal projects are open-source on GitHub.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
