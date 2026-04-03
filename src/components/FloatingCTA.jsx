import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, X, MessageCircle } from 'lucide-react'

export default function FloatingCTA() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-white border border-[#EEEEEE] shadow-2xl rounded-xl p-4 w-56"
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ duration: 0.18 }}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-[#222222] font-bold text-sm">Schedule a Call</span>
              <button
                onClick={() => setOpen(false)}
                className="text-[#AAAAAA] hover:text-[#555555] transition-colors ml-2"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>
            <p className="text-[#555555] text-xs mb-3 leading-5">
              Let's discuss your project or opportunity. 30-min free consultation.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://calendly.com/aanjaneyuprit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2 px-4 text-xs justify-center rounded-lg"
                style={{ background: '#222222', boxShadow: 'none' }}
              >
                <Calendar size={12} />
                Book on Calendly
              </a>
              <a
                href="https://wa.me/917489500475?text=Hi%20Aanjaney%2C%20I%27d%20like%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-2 px-4 text-xs justify-center rounded-lg border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
              >
                <MessageCircle size={12} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl relative"
        style={{
          background: '#E9A23B',
          boxShadow: '0 0 30px rgba(233, 162, 59, 0.4)'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        aria-label="Schedule a call"
        aria-expanded={open}
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#E9A23B] opacity-20" />
        {open ? <X size={22} color="white" /> : <Calendar size={22} color="white" />}
      </motion.button>
    </div>
  )
}
