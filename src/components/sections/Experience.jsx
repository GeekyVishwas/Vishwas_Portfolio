// components/sections/Experience.jsx
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionHeader } from '../ui/SectionHeader';
import { resumeData } from '../../data/resume';
import { CheckCircle2, Calendar, MapPin } from 'lucide-react';

const workItems = [
  {
    icon: '🔍',
    title: 'Fraud Detection — Data Analytics',
    tech: ['Python', 'SQL', 'SSMS', 'Pandas', 'Anomaly Detection'],
    desc: 'Built a fraud transaction detection model performing EDA, feature engineering, and anomaly detection to identify suspicious financial patterns. Delivered actionable insights enabling business stakeholders to take preventive action.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: '🏗️',
    title: 'Enterprise Data Pipeline — MS Fabric (Medallion Architecture)',
    tech: ['MS Fabric', 'PySpark', 'Azure SQL DB', 'Terraform', 'Octopus Deploy'],
    desc: 'Engineered a full end-to-end data pipeline ingesting from Azure SQL DB, transforming through Bronze, Silver, and Gold Lakehouses via PySpark Notebooks. Automated infra provisioning with Terraform and Octopus Deploy.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🔄',
    title: 'API-Driven Data Ingestion — MS Fabric',
    tech: ['REST APIs', 'Python', 'Power Automate', 'MS Fabric'],
    desc: 'Developed automated data ingestion workflows consuming REST APIs with custom pagination logic. Implemented failure alerting via Power Automate and structured exception handling.',
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: '🤖',
    title: 'AI Conversational Agent — Copilot Studio',
    tech: ['Copilot Studio', 'Power Automate', 'Canvas App', 'Model-Driven App'],
    desc: 'Architected and deployed a production-grade end-to-end AI agent covering appointment creation, order booking, invoice search/download, task creation, and case management across Power Apps interfaces.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: '👁️',
    title: 'Computer Vision — Wall Detection & Measurement',
    tech: ['YOLO', 'Python', 'FastAPI', 'OpenCV'],
    desc: 'Developed an object detection solution using YOLO to classify company-owned walls from images. Implemented spatial measurement logic for height/width computation, exposed via FastAPI endpoint.',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: '🎙️',
    title: 'Cross-Platform Audio Recorder Application',
    tech: ['Python', 'Audio Processing', 'Localization'],
    desc: 'Built a meeting audio recorder app capturing both-participant audio with pause/resume functionality, delivered in 4 languages for broad organizational accessibility.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: '💬',
    title: 'Conversational Data Agent — MS Fabric',
    tech: ['Microsoft Fabric', 'SQL', 'NLP', 'Data Agent'],
    desc: 'Developed an intelligent Data Agent enabling natural language querying of Lakehouse tables. Trained using curated SQL query sets to surface business insights for non-technical stakeholders.',
    color: 'from-primary-500 to-cyan-400',
  },
  {
    icon: '📱',
    title: 'React Native Mobile App — Support',
    tech: ['React Native', 'JavaScript', 'Mobile Development'],
    desc: 'Collaborated on a React Native mobile application, delivering functional support, debugging, and integration assistance to the core development team.',
    color: 'from-cyan-500 to-sky-500',
  },
];

export function Experience() {
  const exp = resumeData.experience[0];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" aria-hidden="true" />

      <div className="container-max">
        <SectionHeader
          tag="Work History"
          title="Experience"
          subtitle="Real-world enterprise impact across data engineering, AI, and cloud analytics."
        />

        {/* Company card */}
        <ScrollReveal className="mb-12">
          <div className="p-6 rounded-2xl glass border border-primary-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Company logo placeholder */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center text-3xl font-heading font-black text-white shadow-lg shadow-primary-500/30 flex-shrink-0">
              B
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-heading font-bold text-white">{exp.company}</h3>
              <p className="text-primary-400 font-medium">{exp.role}</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <Calendar size={13} className="text-primary-500" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <MapPin size={13} className="text-primary-500" />
                  {exp.location}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20">
                🟢 Current
              </span>
              <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-semibold border border-yellow-500/20 text-center">
                ⭐ 2× SPOT Award
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Work items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {workItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="p-5 rounded-2xl glass border border-white/5 hover-lift group h-full">
                <div className="flex gap-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm leading-snug mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
