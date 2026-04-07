// components/sections/Resume.jsx
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionHeader } from '../ui/SectionHeader';
import { resumeData } from '../../data/resume';
import { Download, ExternalLink, Award, GraduationCap, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Resume() {
  const { name, title, contact, summary, experience, education, certifications, achievements, skills } = resumeData;

  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/3 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="container-max">
        <SectionHeader
          tag="My Resume"
          title="Curriculum Vitae"
          subtitle="A snapshot of my professional journey, skills, and achievements."
        />

        {/* Download CTA */}
        <ScrollReveal className="flex justify-center mb-12">
          <a
            href="https://geekyvishwas.github.io/Vishwas_Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-cyan-400 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-xl shadow-primary-500/30"
            aria-label="View full resume"
          >
            <ExternalLink size={16} />
            View Full Portfolio
          </a>
        </ScrollReveal>

        {/* Resume card */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto rounded-2xl glass border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="p-8 bg-gradient-to-br from-primary-500/20 to-cyan-400/10 border-b border-white/5">
              <h2 className="text-3xl font-heading font-black text-white mb-1">{name}</h2>
              <p className="text-primary-400 font-medium mb-4">{title}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400">
                <a href={`tel:${contact.phone}`} className="flex items-center gap-1.5 hover:text-primary-400 transition-colors">
                  <Phone size={13} /> {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 hover:text-primary-400 transition-colors">
                  <Mail size={13} /> {contact.email}
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary-400 transition-colors">
                  <FaLinkedin size={13} /> LinkedIn
                </a>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary-400 transition-colors">
                  <FaGithub size={13} /> GitHub
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> {contact.location}
                </span>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Summary */}
              <div>
                <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <div className="w-4 h-px bg-primary-500" />
                  Professional Summary
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{summary}</p>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-4 h-px bg-primary-500" />
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: '⭐', label: '2× SPOT Award', sub: 'Consecutive quarters', color: 'from-yellow-500/20 to-orange-500/10 border-yellow-500/20' },
                    { icon: '☁️', label: 'Azure AI-102', sub: 'Microsoft Certified', color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/20' },
                    { icon: '🤖', label: 'IBM AI Dev', sub: 'Specialization Cert', color: 'from-primary-500/20 to-violet-500/10 border-primary-500/20' },
                  ].map(item => (
                    <div key={item.label} className={`p-4 rounded-xl bg-gradient-to-br ${item.color} border text-center`}>
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-white text-sm">{item.label}</div>
                      <div className="text-gray-400 text-xs mt-1">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-4 h-px bg-primary-500" />
                  Technical Skills
                </h3>
                <div className="space-y-3">
                  {Object.entries(skills).map(([cat, val]) => (
                    <div key={cat} className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                      <span className="text-gray-400 font-medium">{cat}:</span>
                      <span className="sm:col-span-2 text-gray-300">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-4 h-px bg-primary-500" />
                  Work Experience
                </h3>
                {experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <h4 className="font-heading font-bold text-white">{exp.company}</h4>
                        <p className="text-primary-400 text-sm">{exp.role}</p>
                      </div>
                      <div className="text-right text-gray-500 text-sm flex-shrink-0">
                        <div>{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2 text-sm text-gray-400">
                          <span className="text-primary-500 mt-1 flex-shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div>
                <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-4 h-px bg-primary-500" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h4 className="font-semibold text-white text-sm">{edu.degree}</h4>
                        <p className="text-gray-400 text-sm">{edu.specialization}</p>
                        <p className="text-gray-500 text-xs">{edu.institution}</p>
                      </div>
                      <span className="text-gray-500 text-sm flex-shrink-0">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-sm font-semibold text-primary-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-4 h-px bg-primary-500" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <a
                      key={i}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-500/5 transition-colors group"
                      aria-label={`View ${cert.name}`}
                    >
                      <span className="text-xl">{cert.badge}</span>
                      <div>
                        <p className="font-semibold text-white text-sm group-hover:text-primary-400 transition-colors">{cert.name}</p>
                        <p className="text-gray-500 text-xs">{cert.issuer} · {cert.code}</p>
                      </div>
                      <ExternalLink size={12} className="ml-auto text-gray-600 group-hover:text-primary-400 mt-1 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
