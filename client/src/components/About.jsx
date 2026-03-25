import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, MapPin, GraduationCap, Code2 } from 'lucide-react'

const highlights = [
  { label: '30%', sub: 'Page Load Reduction' },
  { label: '25%', sub: 'Engagement Increase' },
  { label: '3', sub: 'Production Apps' },
  { label: '6', sub: 'Certifications' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" className="relative py-12 md:py-16 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#E9A23B]" />
            <span className="text-[#E9A23B] text-xs font-bold tracking-[0.2em] uppercase">Professional Profile</span>
            <div className="h-px w-8 bg-[#E9A23B]" />
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold text-[#222222] leading-tight text-center mx-auto">
            The Engineer Behind <span className="text-[#E9A23B]">the Code</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Summary text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col lg:pr-8"
          >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-full bg-[#F9F9F9] flex items-center justify-center border border-[#EEEEEE] shadow-sm flex-shrink-0">
                  <User size={28} className="text-[#E9A23B]" />
                </div>
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[#222222] font-extrabold text-2xl mb-1">Aanjaney Uprit</h3>
                  <div className="text-[#E9A23B] font-bold text-xs tracking-widest uppercase mt-1">Software Development Engineer</div>
                </div>
              </div>

              <p className="text-[#555555] leading-relaxed mb-6 text-base">
                As a passionate Software Development Engineer with a focus on the MERN stack, I specialize in architecting highly scalable, performant web applications. My foundation in Electronics &amp; Communication Engineering (2025 Graduate) provides a strong analytical approach to solving complex architectural challenges.
              </p>
              <p className="text-[#555555] leading-relaxed mb-8 text-base">
                During my professional tenure, I have consistently delivered measurable business impact, including executing a <strong className="text-[#222222]">30% reduction in page load times</strong> and driving a <strong className="text-[#222222]">25% increase in user engagement</strong> through strategic UI engineering and robust backend optimizations. I am dedicated to writing clean, maintainable code and building products that offer seamless user experiences.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-2 pt-6 border-t border-[#EEEEEE]">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#222222]">
                  <MapPin size={18} className="text-[#E9A23B]" />
                  Indore, MP
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#222222]">
                  <GraduationCap size={18} className="text-[#E9A23B]" />
                  B.Tech ECE (2025)
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#222222]">
                  <Code2 size={18} className="text-[#E9A23B]" />
                  Full-Stack
                </div>
              </div>
          </motion.div>

          {/* Right: Highlight stats grid */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-[#EEEEEE] shadow-sm rounded-xl p-6 text-center hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-black text-[#222222] mb-2">{h.label}</div>
                  <div className="text-xs text-[#555555] font-bold tracking-wide uppercase">{h.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Bottom full-width narrative card */}
            <motion.div
              className="bg-[#F9F9F9] border border-[#EEEEEE] rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#E9A23B]" />
                <div className="text-xs text-[#E9A23B] uppercase tracking-[0.15em] font-bold">Career Objective</div>
              </div>
              <p className="text-[#555555] font-medium text-base md:text-lg leading-relaxed mb-6">
                To secure a Software Engineering role at an industry-leading organization where I can leverage my expertise in full-stack architecture to drive product innovation and deliver exceptional digital solutions.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['Google', 'Microsoft', 'Amazon', 'Atlassian', 'Adobe', 'Goldman Sachs'].map(co => (
                  <span key={co} className="bg-white text-[#555555] border border-[#EEEEEE] rounded-md px-3 py-1.5 text-xs font-bold tracking-wide shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    {co}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
