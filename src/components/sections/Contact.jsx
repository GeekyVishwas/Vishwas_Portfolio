// components/sections/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionHeader } from '../ui/SectionHeader';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'vishwasgupta666@gmail.com', href: 'mailto:vishwasgupta666@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91-7860745246', href: 'tel:+917860745246' },
  { icon: MapPin, label: 'Current Location', value: 'Vadodara, Gujarat, India', href: null },
  { icon: MapPin, label: 'Permanent Location', value: 'Gorakhpur, Uttar Pradesh, India', href: null },
  { icon: FaGithub, label: 'GitHub', value: 'GeekyVishwas', href: 'https://github.com/GeekyVishwas' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'vishwasgupta07', href: 'https://linkedin.com/in/vishwasgupta07' },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Get credentials from environment variables
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId || botToken.includes('your_bot_token_here')) {
      alert('Telegram credentials are not configured! Please check your .env file.');
      setStatus(null);
      return;
    }

    const messageToTelegram = `
🔥 <b>New Contact Form Submission</b>
      
<b>Name:</b> ${form.name}
<b>Email:</b> ${form.email}
<b>Phone:</b> ${form.phone || 'N/A'}
<b>Subject:</b> ${form.subject || 'N/A'}
      
<b>Message:</b>
${form.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          chat_id: chatId,
          text: messageToTelegram,
          parse_mode: 'HTML',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send the message. Please try again later.');
      setStatus(null);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 blob blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/8 blob blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-max">
        <SectionHeader
          tag="Let's Connect"
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Let's build something <span className="gradient-text">amazing</span> together
              </h3>

              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-primary-500/30 transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-cyan-400/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary-500/30 transition-all duration-200">
                    <Icon size={16} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-gray-300 text-sm font-medium hover:text-primary-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-7 rounded-2xl glass border border-white/5 space-y-5"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name <span className="text-primary-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:bg-primary-500/5 transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address <span className="text-primary-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:bg-primary-500/5 transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject <span className="text-primary-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:bg-primary-500/5 transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Contact Number <span className="text-gray-500 text-xs font-normal ml-1">(Optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:bg-primary-500/5 transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message <span className="text-primary-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/50 focus:bg-primary-500/5 transition-all duration-200 text-sm resize-none"
                />
              </div>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                >
                  <CheckCircle size={15} />
                  Your message has been sent directly! I will get back to you soon.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-cyan-400 text-white font-semibold text-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
