import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Terminal, Code2, Server, Database, Wrench, GraduationCap, Hexagon, Component } from 'lucide-react'

const skillGroups = [
  {
    category: 'Core Languages',
    icon: <Terminal size={24} />,
    color: '#3B82F6',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    category: 'Frontend Engineering',
    icon: <Code2 size={24} />,
    color: '#14B8A6',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 70 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Redux Toolkit', level: 80 },
    ],
  },
  {
    category: 'Backend & APIs',
    icon: <Server size={24} />,
    color: '#10B981',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 90 },
      { name: 'REST APIs', level: 92 },
      { name: 'Microservices', level: 70 },
      { name: 'Flask', level: 65 },
    ],
  },
  {
    category: 'Database Architecture',
    icon: <Database size={24} />,
    color: '#E9A23B',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MySQL', level: 80 },
      { name: 'Redis', level: 65 },
    ],
  },
  {
    category: 'DevOps & Tooling',
    icon: <Wrench size={24} />,
    color: '#8B5CF6',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Vercel/Netlify', level: 92 },
      { name: 'Postman', level: 88 },
      { name: 'Webpack/Vite', level: 85 },
    ],
  },
  {
    category: 'Computer Science',
    icon: <GraduationCap size={24} />,
    color: '#F43F5E',
    skills: [
      { name: 'DSA', level: 85 },
      { name: 'OOP', level: 88 },
      { name: 'System Design', level: 75 },
      { name: 'Operating Systems', level: 80 },
      { name: 'Agile/Scrum', level: 90 },
    ],
  },
]

function CircularProgress({ name, level, color, delay, inView }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <div className="flex flex-col items-center gap-3 w-[84px]">
      <div className="relative w-[64px] h-[64px] flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-sm" viewBox="0 0 64 64">
           {/* Background Circle */}
           <circle cx="32" cy="32" r={radius} fill="none" stroke="#F2ECE4" strokeWidth="5" />
           {/* Progress Circle */}
           <motion.circle 
             cx="32" 
             cy="32" 
             r={radius} 
             fill="none" 
             stroke={color} 
             strokeWidth="5"
             strokeLinecap="round"
             strokeDasharray={circumference}
             initial={{ strokeDashoffset: circumference }}
             animate={inView ? { strokeDashoffset: circumference - (level / 100) * circumference } : {}}
             transition={{ duration: 1.5, delay, ease: "easeOut" }}
           />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
           <span className="font-bold text-[#222222] text-[11px]">{level}%</span>
        </div>
      </div>
      <span className="text-[11px] font-bold text-[#555555] text-center leading-tight min-h-[28px] flex items-center">{name}</span>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="relative py-12 md:py-16 bg-[#F9F9F9] border-y border-[#EEEEEE]">
      <div className="w-full max-w-[1300px] mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#E9A23B]" />
            <span className="text-[#E9A23B] text-xs font-bold tracking-[0.2em] uppercase">Technical Expertise</span>
            <div className="h-px w-8 bg-[#E9A23B]" />
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold text-[#222222] leading-tight text-center">
            My Technology <span className="text-[#E9A23B]">Arsenal</span>
          </h2>
          <p className="text-base mt-4 text-center max-w-3xl mx-auto text-[#555555] leading-relaxed">
            Comprehensive proficiency across the full stack. Specializing in highly performant JavaScript ecosystems, scalable API design, and modern DevOps practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="bg-white border border-[#EEEEEE] rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] transition-shadow relative"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: group.color, opacity: 0.8 }} />
              
              <div className="flex items-center justify-center gap-3 mb-8 pb-4 border-b border-[#EEEEEE]">
                <span className="leading-none text-[#222222]">{group.icon}</span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-[#222222] font-black text-xl leading-tight">{group.category}</h3>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-6">
                {group.skills.map((skill, si) => (
                  <CircularProgress
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    delay={gi * 0.1 + si * 0.1}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom: core MERN highlight */}
        <motion.div
          className="mt-16 bg-white border border-[#EEEEEE] shadow-sm rounded-xl p-8 md:p-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-[#555555] font-bold tracking-[0.2em] uppercase text-xs mb-6">Primary Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { label: 'MongoDB',   icon: <Database size={22} />, color: '#47A248' },
              { label: 'Express.js', icon: <Server size={22} />, color: '#222222' },
              { label: 'React.js',  icon: <Component size={22} />, color: '#61DAFB' },
              { label: 'Node.js',   icon: <Hexagon size={22} />, color: '#68A063' },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-3 px-6 py-3.5 rounded-lg bg-[#F9F9F9] border border-[#EEEEEE] shadow-sm">
                <span className="leading-none" style={{ color: s.color }}>{s.icon}</span>
                <span className="font-bold text-sm tracking-wide" style={{ color: s.color }}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
