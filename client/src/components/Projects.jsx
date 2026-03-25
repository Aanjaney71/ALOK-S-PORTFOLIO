import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, ArrowRight, CarFront, Building2, CloudSun } from 'lucide-react'

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const projects = [
  {
    id: 1,
    title: 'NexGen Self-Drive',
    subtitle: 'Full-Stack MERN Car Rental Platform',
    live: 'Jan 2026',
    icon: <CarFront size={24} className="text-[#E9A23B]" />,
    description: 'A premium self-drive car rental platform with end-to-end booking flow, WhatsApp API integration, and blazing-fast performance.',
    bullets: [
      '3-step intuitive booking flow with real-time availability checking and WhatsApp Business API for instant booking confirmations',
      'Implemented lazy loading & code-splitting, achieving sub-2s load time and a +35 Lighthouse Performance score improvement',
      'MongoDB Atlas backend with Express REST APIs, JWT-secured admin dashboard, and full inventory CRUD operations',
    ],
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'WhatsApp API', 'Tailwind', 'JWT'],
    liveUrl: 'https://rental-cars-one-sepia.vercel.app',
    sourceUrl: 'https://github.com/Aanjaney71/RentalCars',
    featured: true,
  },
  {
    id: 2,
    title: 'Shree Bhargava & Associates',
    subtitle: 'Luxury Architecture Portfolio',
    live: 'Feb 2026',
    icon: <Building2 size={24} className="text-[#E9A23B]" />,
    description: 'An immersive luxury architecture portfolio with cinematic animations, filterable project gallery, and direct client lead generation.',
    bullets: [
      'Built with React + Framer Motion + Tailwind for immersive page transitions and scroll-triggered reveal animations',
      'Filterable project gallery with 20+ architectural projects, 95+ Lighthouse Accessibility score, WCAG 2.1 compliant',
      'Direct client lead generation form with email integration — replaced static brochure with dynamic interactive showcase',
    ],
    tags: ['React.js', 'Framer Motion', 'Tailwind CSS', 'EmailJS', 'SEO', 'WCAG'],
    liveUrl: 'https://bharggava.vercel.app',
    sourceUrl: 'https://github.com/Aanjaney71/BHARGGAVA',
    featured: false,
  },
  {
    id: 3,
    title: 'AtmosSphere',
    subtitle: 'Real-Time Weather Dashboard',
    live: 'Mar 2026',
    icon: <CloudSun size={24} className="text-[#E9A23B]" />,
    description: 'A glassmorphic real-time weather dashboard with dynamic theming, geolocation, and intelligent API state management.',
    bullets: [
      'OpenWeatherMap API integration with geolocation, debounced search, and smart caching — handling 50+ concurrent APIs',
      'Dynamic weather-based theming (sunny/rainy/stormy) with smooth CSS transitions and Glassmorphic UI design system',
      'Responsive React app with 7-day forecasts, UV index, air quality data, and unit toggle (°C/°F)',
    ],
    tags: ['React.js', 'OpenWeatherMap API', 'Tailwind CSS', 'Geolocation', 'Glassmorphism', 'Vercel'],
    liveUrl: 'https://weather-web-liart-ten.vercel.app/',
    sourceUrl: 'https://github.com/Aanjaney71/WEATHER-WEB',
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="bg-white border border-[#EEEEEE] rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-300 overflow-hidden relative group flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E9A23B] z-20" />

      {/* Live Preview Iframe */}
      <div className="relative h-56 bg-[#FAFAFA] overflow-hidden border-b border-[#EEEEEE]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <iframe 
            src={project.liveUrl} 
            style={{ width: '1280px', height: '800px', transform: 'scale(0.35)', transformOrigin: 'top left' }}
            className="border-none absolute top-0 left-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            title={`${project.title} live preview`}
            loading="lazy"
            tabIndex="-1"
            aria-hidden="true"
          />
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-[#E9A23B] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md">
              Featured
            </span>
          </div>
        )}

        {/* Live date */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="bg-white/95 backdrop-blur-sm border border-[#EEEEEE] text-[#555555] text-xs font-bold px-3 py-1.5 rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
            Live · {project.live}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-[#222222] font-extrabold text-xl md:text-2xl leading-tight mb-2">
              {project.title}
            </h3>
            <p className="text-[#E9A23B] font-bold text-xs tracking-widest uppercase">
              {project.subtitle}
            </p>
          </div>
          <span className="flex-shrink-0 bg-[#F9F9F9] w-12 h-12 rounded-full flex items-center justify-center border border-[#EEEEEE]">
             {project.icon}
          </span>
        </div>

        <p className="text-[#555555] text-base leading-relaxed mb-6 mt-2">
          {project.description}
        </p>

        {/* Bullets */}
        <ul className="space-y-4 mb-8">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-left">
              <ArrowRight size={16} className="text-[#E9A23B] flex-shrink-0 mt-1" />
              <span className="text-[#555555] text-[15px] leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>

        {/* Bottom Area (Pushed to bottom) */}
        <div className="mt-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(t => (
              <span key={t} className="bg-[#F2ECE4] text-[#555555] rounded-md px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase">
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#EEEEEE]">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3 px-6 text-sm flex-1 justify-center rounded-lg shadow-sm"
            >
              <ExternalLink size={16} />
              Visit Live Demo
            </a>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-3 px-6 text-sm flex-1 justify-center rounded-lg"
            >
              <GithubIcon size={16} />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="projects" className="relative py-12 md:py-16 bg-white">
      <div className="w-full max-w-[1300px] mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#E9A23B]" />
            <span className="text-[#E9A23B] text-xs font-bold tracking-[0.2em] uppercase">Projects</span>
            <div className="h-px w-8 bg-[#E9A23B]" />
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold text-[#222222] leading-tight text-center">
            Things I've <span className="text-[#E9A23B]">Built & Shipped</span>
          </h2>
          <p className="text-base mt-4 max-w-2xl mx-auto text-center text-[#555555] leading-relaxed">
            3 live production MERN applications — explore the actual deployed websites below. Built from scratch with real-time APIs, animated UX, and end-to-end deployment.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://github.com/Aanjaney71"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex px-8 py-3.5 shadow-sm"
          >
            <GithubIcon size={18} />
            View Complete GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
