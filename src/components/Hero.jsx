import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)
const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const handleExploreProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={ref} className="relative pt-16 md:pt-24 pb-12 lg:pb-16 overflow-hidden bg-white flex flex-col items-center justify-center min-h-[85vh]">
      <motion.div style={{ opacity }} className="w-full max-w-[1300px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="w-full flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-[#E9A23B] font-bold text-sm md:text-base uppercase tracking-widest w-full mb-3">
              Hi There,
            </p>
            <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-tight tracking-tight w-full mb-4 text-[#222222]">
              I am Aanjaney Uprit<span className="text-[#E9A23B]">.</span>
            </h1>
            <h2 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl md:text-3xl font-extrabold text-[#555555] w-full mb-6 leading-snug">
              Full-Stack Software Engineer
            </h2>
            <p className="text-base md:text-lg text-[#555555] leading-relaxed mb-8 max-w-xl text-center lg:text-left">
              A software engineer specializing in building high-performance, pixel-perfect, production-ready web applications using React, Node.js, and MongoDB.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full mb-8">
              <button onClick={handleExploreProjects} className="btn-primary w-full sm:w-auto px-8 py-3.5">
                Explore Projects
              </button>
              <a href="/Aanjaney_Uprit_Resume.pdf" download className="btn-secondary w-full sm:w-auto justify-center px-8 py-3.5">
                Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
               <a href="https://github.com/Aanjaney71" target="_blank" rel="noopener noreferrer" className="text-[#555555] hover:text-[#E9A23B] transition-colors p-2" aria-label="GitHub">
                 <GithubIcon size={26} />
               </a>
               <a href="https://www.linkedin.com/in/aanjaney-uprit71/" target="_blank" rel="noopener noreferrer" className="text-[#555555] hover:text-[#0077B5] transition-colors p-2" aria-label="LinkedIn">
                 <LinkedinIcon size={26} />
               </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            style={{ y: yImage }}
            className="w-full flex justify-center lg:justify-end relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 dribbble-pattern -z-10 rounded-full md:rounded-[40px] transform -rotate-3 scale-[1.05]" />
            
            <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[460px] lg:h-[460px] bg-[#F2ECE4] rounded-full sm:rounded-[40px] overflow-hidden shadow-2xl shadow-orange-900/15 ring-8 ring-white mx-auto lg:mr-0">
              <img 
                src="/images/aanjaney_formal_profile.png" 
                alt="Aanjaney Uprit — Full-Stack Software Engineer" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 items-center justify-center bg-[#F2ECE4] flex-col" style={{ display: 'none' }}>
                <span className="text-6xl mb-4">👨‍💻</span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
