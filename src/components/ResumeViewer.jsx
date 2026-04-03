import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText } from 'lucide-react'

export default function ResumeViewer() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="resume" className="relative py-12 md:py-16 bg-[#F9F9F9] border-y border-[#EEEEEE]">
      <div className="w-full max-w-[1300px] mx-auto px-4 md:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#E9A23B]" />
            <span className="text-[#E9A23B] text-xs font-bold tracking-[0.2em] uppercase">Curriculum Vitae</span>
            <div className="h-px w-8 bg-[#E9A23B]" />
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold text-[#222222] leading-tight text-center">
            Professional <span className="text-[#E9A23B]">Resume</span>
          </h2>
          <p className="text-base mt-4 max-w-xl mx-auto text-center text-[#555555] leading-relaxed">
            A comprehensive overview of my academic background, technical competencies, and professional experience.
          </p>
        </motion.div>

        {/* Resume Container */}
        <motion.div
          className="bg-white rounded-2xl shadow-[0_4px_30px_rgb(0,0,0,0.04)] border border-[#EEEEEE] overflow-hidden max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Top Bar */}
          <div className="bg-[#222222] px-6 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3 text-white">
              <FileText size={24} className="text-[#E9A23B]" />
              <span className="font-bold text-base tracking-wide z-10 break-all">Aanjaney_Uprit_Resume.pdf</span>
            </div>
            <a 
              href="/Aanjaney_Uprit_Resume.pdf" 
              download 
              className="bg-[#E9A23B] hover:bg-[#d49132] text-white px-6 py-3 rounded-full text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <Download size={18} className="flex-shrink-0" />
              Download PDF
            </a>
          </div>

          {/* Iframe Viewer */}
          <div className="w-full bg-[#F9F9F9] p-4 sm:p-8 border-t border-[#333333]">
            <div className="w-full h-[75vh] md:h-[90vh] bg-white shadow-xl mx-auto relative rounded-xl overflow-hidden border border-[#DDDDDD] flex items-center justify-center">
               <iframe 
                  src="/Aanjaney_Uprit_Resume.pdf#view=FitV" 
                  className="w-full h-full border-none" 
                  title="Aanjaney Uprit Professional Resume"
               />
               <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
