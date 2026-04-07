// components/sections/Skills.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeader } from '../ui/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { skillCategories, techStack } from '../../data/skills';

function SkillBar({ name, level, animated }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs font-mono text-primary-400">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: animated ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState('languages');
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const activeCategory = skillCategories.find(c => c.id === activeTab);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/3 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-max" ref={ref}>
        <SectionHeader
          tag="Expertise"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit for building enterprise-grade data and AI solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Tab sidebar */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="left">
              <div className="space-y-2">
                {skillCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 ${
                      activeTab === cat.id
                        ? 'bg-gradient-to-r from-primary-500/20 to-cyan-400/10 border border-primary-500/30 text-white'
                        : 'glass text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                    aria-pressed={activeTab === cat.id}
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <span className="font-medium text-sm">{cat.label}</span>
                    {activeTab === cat.id && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-400" />
                    )}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Skill bars */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl glass border border-white/5"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{activeCategory?.icon}</span>
                    <h3 className="font-heading font-bold text-white">{activeCategory?.label}</h3>
                  </div>
                  {activeCategory?.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} animated={inView} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </ScrollReveal>
          </div>
        </div>

        {/* Tech stack cloud */}
        <ScrollReveal className="mt-16">
          <h3 className="text-center text-lg font-heading font-semibold text-gray-400 mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="px-4 py-2 rounded-lg glass border border-white/5 text-sm font-medium text-gray-300 hover:text-white hover:border-primary-500/30 transition-all duration-200 cursor-default"
                style={{ '--tech-color': tech.color }}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
