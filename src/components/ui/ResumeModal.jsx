// components/ui/ResumeModal.jsx
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';

const RESUME_PATH = '/Vishwas_Portfolio/resume.pdf';

export function ResumeModal({ isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 sm:inset-8 z-50 flex flex-col rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(15,15,25,0.98) 0%, rgba(20,20,35,0.98) 100%)',
              border: '1px solid rgba(108,99,255,0.25)',
              boxShadow: '0 25px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(108,99,255,0.1)',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Resume Viewer"
          >
            {/* Header bar */}
            <div
              className="flex-shrink-0 flex items-center justify-between px-5 py-4"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(108,99,255,0.08)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.3), rgba(34,211,238,0.15))' }}>
                  <FileText size={16} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Vishwas Gupta — Resume</p>
                  <p className="text-gray-500 text-xs">Data Engineer & AI Developer</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Download button */}
                <a
                  href={RESUME_PATH}
                  download="Vishwas_Gupta_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #6c63ff, #22d3ee)',
                    boxShadow: '0 4px 15px rgba(108,99,255,0.35)',
                  }}
                  aria-label="Download resume as PDF"
                >
                  <Download size={14} />
                  Download PDF
                </a>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Close resume viewer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden bg-gray-950/50">
              <iframe
                src={`${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Vishwas Gupta Resume"
                className="w-full h-full border-0"
                style={{ minHeight: 0 }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
