import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, TrendingUp, CheckCircle2, MapPin } from 'lucide-react'

const experiences = [
  {
    role: 'Web Developer Intern',
    company: 'Fource Guru Pvt. Ltd.',
    location: 'Indore, Madhya Pradesh',
    duration: 'Jul 2024 – Aug 2024',
    type: 'Internship',
    bullets: [
      'Engineered responsive UIs using React.js, HTML5, and CSS3, reducing page load time by 30% via lazy loading, code splitting, and image optimization — directly improving user retention metrics.',
      'Collaborated with the backend team to integrate RESTful APIs, enabling seamless dynamic data rendering across 5+ production pages with zero downtime during deployment.',
      'Implemented SEO best practices including semantic HTML, structured meta tags, and sitemap generation, contributing to a 25% increase in organic engagement within 4 weeks.',
      'Participated in Agile sprints, daily standups, and code reviews — delivering all assigned features within sprint deadlines across a 2-month internship cycle.',
    ],
    tags: ['React.js', 'RESTful APIs', 'SEO', 'Agile', 'HTML5', 'CSS3', 'Lazy Loading'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="relative py-12 md:py-16 bg-[#F9F9F9]">
      <div className="w-full max-w-[1100px] mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#E9A23B]" />
            <span className="text-[#E9A23B] text-xs font-bold tracking-[0.2em] uppercase">Experience</span>
            <div className="h-px w-8 bg-[#E9A23B]" />
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold text-[#222222] leading-tight text-center">
            Where I've <span className="text-[#E9A23B]">Shipped Code</span>
          </h2>
          <p className="text-base text-[#555555] mt-4 max-w-xl mx-auto text-center leading-relaxed">
            Real-world experience building production systems with measurable business outcomes.
          </p>
        </motion.div>

        {/* Experience Card */}
        <div className="flex flex-col gap-10 items-center w-full">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="w-full bg-white border border-[#EEEEEE] shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E9A23B]" />
              
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10">
                  <span className="bg-[#E9A23B]/10 text-[#E9A23B] border border-[#E9A23B]/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase mb-4 tracking-[0.15em]">{exp.type}</span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[#222222] font-extrabold text-2xl md:text-3xl leading-snug mb-2">{exp.role}</h3>
                  <div className="text-[#555555] font-bold text-sm tracking-widest uppercase mb-6">{exp.company}</div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-8 w-full border-y border-[#EEEEEE] py-4">
                    <div className="flex items-center gap-3">
                       <Calendar size={18} strokeWidth={1.5} className="text-[#E9A23B]" />
                       <span className="text-sm font-semibold text-[#222222]">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <MapPin size={18} strokeWidth={1.5} className="text-[#E9A23B]" />
                       <span className="text-sm font-semibold text-[#555555]">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <div className="w-full max-w-3xl mx-auto mb-10">
                  <ul className="space-y-5">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-4 items-start text-left">
                        <CheckCircle2 size={20} strokeWidth={1.5} className="text-[#E9A23B] mt-1 flex-shrink-0" />
                        <span className="text-[#555555] text-base leading-relaxed" 
                          dangerouslySetInnerHTML={{
                            __html: b
                              .replace(/30%/g, '<strong class="text-[#222222] font-bold">30%</strong>')
                              .replace(/25%/g, '<strong class="text-[#222222] font-bold">25%</strong>')
                              .replace(/5\+/g, '<strong class="text-[#222222] font-bold">5+</strong>')
                          }} 
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {exp.tags.map(t => (
                    <span key={t} className="bg-[#F9F9F9] border border-[#EEEEEE] text-[#555555] rounded-md px-3 py-1.5 text-xs font-semibold tracking-wide">{t}</span>
                  ))}
                </div>

                {/* Impact indicator */}
                <div className="pt-8 border-t border-[#EEEEEE] flex flex-wrap items-center justify-center gap-6">
                  <div className="flex items-center justify-center gap-3 bg-[#F9F9F9] px-6 py-3 rounded-xl border border-[#EEEEEE] shadow-sm w-full sm:w-auto">
                    <TrendingUp size={20} className="text-[#25D366]" />
                    <span className="text-sm font-bold text-[#222222]">30% faster loads</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-[#F9F9F9] px-6 py-3 rounded-xl border border-[#EEEEEE] shadow-sm w-full sm:w-auto">
                    <TrendingUp size={20} className="text-[#25D366]" />
                    <span className="text-sm font-bold text-[#222222]">25% more engagement</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* End marker */}
          <motion.div
            className="flex items-center justify-center gap-6 w-full mt-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            <div className="h-px w-16 sm:w-24 bg-[#DDDDDD]" />
            <div className="flex items-center gap-3 bg-white border border-[#EEEEEE] text-[#222222] font-bold px-6 py-3 rounded-full text-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              Open to Opportunities
            </div>
            <div className="h-px w-16 sm:w-24 bg-[#DDDDDD]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
