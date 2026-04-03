import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Technology – Electronics & Communication Engineering',
    institution: 'Rewa Engineering College (RGPV Affiliated)',
    location: 'Rewa, Madhya Pradesh',
    duration: '2021 – 2025',
    grade: 'CGPA: 6.8 / 10.0',
  },
]

const certifications = [
  { name: 'Problem Solving (Intermediate)', issuer: 'HackerRank', type: 'Algorithm Design' },
  { name: 'Problem Solving (Basic)', issuer: 'HackerRank', type: 'Programming Logic' },
  { name: 'JavaScript (Basic)', issuer: 'HackerRank', type: 'Web Development' },
  { name: 'Python (Basic)', issuer: 'HackerRank', type: 'Software Engineering' },
  { name: 'SQL (Basic)', issuer: 'HackerRank', type: 'Database Management' },
  { name: 'CSS (Basic)', issuer: 'HackerRank', type: 'Frontend Styling' },
  { name: 'Full Stack MERN Development', issuer: 'Udemy', type: 'Comprehensive Bootcamp' },
  { name: 'Generative AI Fundamentals', issuer: 'Google', type: 'Cloud & AI' },
]

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="education" className="relative py-12 md:py-16 bg-white">
      <div className="w-full max-w-[1100px] mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#E9A23B]" />
            <span className="text-[#E9A23B] text-xs font-bold tracking-[0.2em] uppercase">Academic Background</span>
            <div className="h-px w-8 bg-[#E9A23B]" />
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold text-[#222222] leading-tight text-center">
            Education & <span className="text-[#E9A23B]">Credentials</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16 items-center w-full">
          {/* Degree Card */}
          <motion.div
            className="w-full max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {education.map((edu, i) => (
              <div key={i} className="bg-[#F9F9F9] border border-[#EEEEEE] rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative overflow-hidden transition-shadow">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E9A23B]" />
                <div className="flex flex-col items-center text-center">
                  <GraduationCap size={44} strokeWidth={1.5} className="text-[#E9A23B] mx-auto mb-6" />
                  <h4 className="font-['Plus_Jakarta_Sans'] text-[#222222] font-black text-2xl md:text-3xl leading-snug mb-3 max-w-2xl mx-auto">
                    {edu.degree}
                  </h4>
                  <div className="text-[#E9A23B] font-bold text-sm tracking-[0.2em] uppercase mb-8">{edu.institution}</div>
                  
                  <div className="h-px w-full max-w-[200px] bg-[#E9A23B]/30 mb-8" />

                  <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 w-full">
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-[#888888] font-bold uppercase tracking-wider mb-2">Timeframe</div>
                      <div className="flex items-center gap-2 text-sm font-bold text-[#222222]">
                        <Calendar size={18} strokeWidth={1.5} className="text-[#E9A23B]" />
                        {edu.duration}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-[#888888] font-bold uppercase tracking-wider mb-2">Performance</div>
                      <div className="text-sm font-bold text-[#222222] bg-white border border-[#EEEEEE] rounded-md px-4 py-1.5 shadow-sm">
                        {edu.grade}
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                       <div className="text-xs text-[#888888] font-bold uppercase tracking-wider mb-2">Location</div>
                       <div className="flex items-center gap-2 text-sm font-bold text-[#555555]">
                         <MapPin size={18} strokeWidth={1.5} className="text-[#E9A23B]" />
                         {edu.location}
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="w-full max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-10">
              <Award size={36} strokeWidth={1.5} className="text-[#E9A23B] mx-auto mb-4" />
              <h3 className="font-['Plus_Jakarta_Sans'] text-[#222222] font-black text-2xl md:text-3xl leading-snug">Industry Certifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-[#EEEEEE] rounded-xl p-5 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex items-center gap-4 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#F9F9F9] border border-[#EEEEEE] flex items-center justify-center flex-shrink-0 text-[#E9A23B]">
                    <Award size={22} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[#222222] text-sm font-bold leading-snug mb-1">{cert.name}</div>
                    <div className="flex flex-wrap gap-2 items-center">
                       <span className="text-[#555555] text-xs font-semibold bg-[#F9F9F9] px-2 py-0.5 rounded">{cert.issuer}</span>
                       <span className="text-[#E9A23B] text-[10px] uppercase tracking-wider font-bold">{cert.type}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
               className="mt-10 mx-auto bg-[#F9F9F9] border border-[#EEEEEE] rounded-xl p-6 text-center shadow-sm w-full"
               initial={{ opacity: 0 }}
               animate={inView ? { opacity: 1 } : {}}
               transition={{ delay: 0.8 }}
            >
               <span className="text-[#222222] font-semibold text-base md:text-lg">
                 <span className="text-[#E9A23B] font-black mr-2 text-xl">100+</span> 
                 DSA Problems Solved across LeetCode &amp; HackerRank
               </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
