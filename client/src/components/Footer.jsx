import React from 'react'

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)
const MailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-5.36-6.429l10.737 8.706 10.738-8.706h-21.475zm20.114 14.5h-18.754l5.63-6.958 3.747 3.037 3.747-3.038 5.63 6.959zm-4.992-6.959l4.616-5.705v9.447l-4.616-3.742z"/>
  </svg>
)
const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#111111] border-t-4 border-[#E9A23B] text-[#F9F9F9] pt-16 pb-8 px-6">
      <div className="w-full max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          {/* Left info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-white mb-4">
              Aanjaney<span className="text-[#E9A23B]">.</span>
            </h2>
            <p className="text-[#888888] text-sm md:text-base leading-relaxed max-w-sm mb-8">
              Engineer. Architect. Developer.<br />
              Building scalable, high-performance web applications that drive real business results.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/Aanjaney71" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#FFFFFF] transition-colors" aria-label="GitHub">
                <GithubIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/aanjaney-uprit71/" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#0077B5] transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={24} />
              </a>
              <a href="mailto:aanjaneyuprit@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#E9A23B] transition-colors" aria-label="Email">
                <MailIcon size={24} />
              </a>
              <a href="https://wa.me/917489500475" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon size={24} />
              </a>
            </div>
          </div>

          {/* Right navigational / links (Optional empty or used for quick navigation) */}
          <div className="flex flex-col items-center md:items-end justify-center md:justify-start">
             <div className="flex flex-col items-center md:items-end gap-3 text-sm font-semibold tracking-wide text-[#888888]">
               <a href="#about" className="hover:text-white transition-colors">About</a>
               <a href="#experience" className="hover:text-white transition-colors">Experience</a>
               <a href="#projects" className="hover:text-white transition-colors">Projects</a>
               <a href="#contact" className="hover:text-white transition-colors">Contact</a>
             </div>
          </div>

        </div>
        
        {/* Bottom copyright line */}
        <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#888888] text-xs sm:text-sm font-semibold">
            © {currentYear} Aanjaney Uprit. All rights reserved.
          </p>
          <p className="text-[#888888] text-xs sm:text-sm font-semibold flex items-center gap-1.5">
            Designed &amp; Built with <span className="text-[#E9A23B] animate-pulse">💛</span> in India
          </p>
        </div>
      </div>
    </footer>
  )
}
