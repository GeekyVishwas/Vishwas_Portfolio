// components/sections/Testimonials.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionHeader } from '../ui/SectionHeader';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Partner — BDO India',
    role: 'Partner',
    text: 'Vishwas is a part of Copilot project. Copilot project included Chat AI-Driven Management which aimed at 1) appointment scheduling features including reminders 2) Order processing & fulfilment having AI-assisted order creation, tracking and updates and also having automated approvals and stock allocation processing. 3) Complaint handling & service request using AI for case classification, prioritization and resolution. Vishwas played an integral part in this project in developing AI agent. It involved R&D and he ensured development was completed well before the timeline of the webinar to showcase BDO capabilities.',
    avatar: '👨‍💼',
    rating: 5,
  },
  {
    name: 'Project Manager & Partner — BDO India',
    role: 'Project Leadership',
    text: 'I would like to commend Vishwas for his outstanding performance in handling agent development and managing multiple microsoft interactions for issues we are facing in copilot development. Vishwas has consistently demonstrated commitment and hard work.',
    avatar: '👩‍💼',
    rating: 5,
  }
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/3 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="container-max">
        <SectionHeader
          tag="What They Say"
          title="Testimonials"
          subtitle="Feedback from colleagues and managers at BDO India."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-2xl glass border border-primary-500/20 text-center"
              >
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/30">
                  <Quote size={20} className="text-white" />
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>

                <div className="flex flex-col items-center gap-2">
                  <div className="text-3xl">{testimonials[current].avatar}</div>
                  <StarRating count={testimonials[current].rating} />
                  <div className="font-heading font-bold text-white">{testimonials[current].name}</div>
                  <div className="text-gray-500 text-sm">{testimonials[current].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    i === current
                      ? 'bg-gradient-to-r from-primary-500 to-cyan-400 w-6'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
