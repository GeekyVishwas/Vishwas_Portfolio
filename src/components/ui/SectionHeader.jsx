// components/ui/SectionHeader.jsx
import { ScrollReveal } from './ScrollReveal';

export function SectionHeader({ tag, title, subtitle, light = false }) {
  return (
    <ScrollReveal className="text-center mb-16">
      <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-400 mb-3 font-mono">
        ✦ {tag} ✦
      </span>
      <h2 className={`text-4xl md:text-5xl font-heading font-bold mb-4 ${
        light
          ? 'text-gray-900'
          : 'text-white'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-gray-600' : 'text-gray-400'}`}>
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500 rounded" />
        <div className="w-2 h-2 rounded-full bg-primary-500" />
        <div className="h-px w-24 bg-gradient-to-r from-primary-500 to-cyan-400 rounded" />
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
        <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent rounded" />
      </div>
    </ScrollReveal>
  );
}
