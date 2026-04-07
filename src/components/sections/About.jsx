// components/sections/About.jsx
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionHeader } from '../ui/SectionHeader';
import { timeline, resumeData } from '../../data/resume';
import { Award, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-max">
        <SectionHeader
          tag="Who I Am"
          title="About Me"
          subtitle="A data engineer who turns complex data challenges into elegant, scalable solutions."
        />

        {/* Top grid: bio + highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Bio */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white">
                Hi, I'm <span className="gradient-text">Vishwas Gupta</span> 👋
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm an <strong className="text-white">Associate Consultant — Data Engineer & AI Developer</strong> at BDO India Service Pvt. Ltd., where I build end-to-end data pipelines, AI-powered automation, and cloud analytics solutions that drive real business impact.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With expertise across <strong className="text-primary-400">Microsoft Fabric, Azure, Python, PySpark, and SQL</strong>, I've delivered production-grade systems from Medallion Architecture pipelines to Copilot Studio AI agents and YOLO-based computer vision.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I'm also currently pursuing an <strong className="text-cyan-400">MBA in Analytics & Data Science</strong> at Manipal University Jaipur — combining academic rigor with hands-on industry experience.
              </p>

              {/* Info pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: MapPin, text: 'Vadodara, Gujarat (Current)' },
                  { icon: MapPin, text: 'Gorakhpur, UP (Permanent)' },
                  { icon: Briefcase, text: 'BDO India — April 2024' },
                  { icon: GraduationCap, text: 'MBA — Manipal University' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm text-gray-300">
                    <Icon size={14} className="text-primary-400" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Achievement cards */}
          <ScrollReveal direction="right">
            <div className="space-y-4">
              {/* SPOT Award card */}
              <div className="p-5 rounded-2xl glass border border-yellow-500/20 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-xl flex-shrink-0 shadow-lg shadow-yellow-500/30">
                    ⭐
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white mb-1">SPOT Award — 2 Consecutive Quarters</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Recognized for outstanding performance, proactive project ownership, and consistent delivery of high-impact solutions at BDO India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certification cards */}
              {resumeData.certifications.map((cert) => (
                <a
                  key={cert.code}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl glass border border-primary-500/20 hover-lift group"
                  aria-label={`View ${cert.name} certification`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center text-xl flex-shrink-0 shadow-lg shadow-primary-500/30">
                      {cert.badge}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-heading font-bold text-white text-sm group-hover:text-primary-400 transition-colors">{cert.name}</h4>
                        <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">Active</span>
                      </div>
                      <p className="text-gray-500 text-xs">{cert.issuer} · {cert.code}</p>
                      <p className="text-gray-400 text-xs mt-1">{cert.detail}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Journey timeline */}
        <ScrollReveal>
          <h3 className="text-2xl font-heading font-bold text-white text-center mb-10">
            My <span className="gradient-text">Journey</span>
          </h3>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-cyan-400 to-primary-500 opacity-30 hidden sm:block" aria-hidden="true" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="relative timeline-item">
                <div className="flex gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-lg shadow-lg z-10`}>
                    {item.icon}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-primary-400 font-semibold bg-primary-500/10 px-2 py-0.5 rounded">{item.year}</span>
                      <h4 className="font-heading font-bold text-white text-base">{item.title}</h4>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{item.org}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
