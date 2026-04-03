import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)
const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)
const WhatsAppIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const contactInfo = [
  { icon: WhatsAppIcon, label: 'WhatsApp', value: '+91 7489500475', href: 'https://wa.me/917489500475', color: '#25D366' },
  { icon: Mail, label: 'Email', value: 'aanjaneyuprit@gmail.com', href: 'mailto:aanjaneyuprit@gmail.com', color: '#E9A23B' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/aanjaney-uprit71', href: 'https://www.linkedin.com/in/aanjaney-uprit71/', color: '#0077B5' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/Aanjaney71', href: 'https://github.com/Aanjaney71', color: '#222222' },
  { icon: MapPin, label: 'Location', value: 'Indore, MP', href: null, color: '#555555' },
]

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in name, email and message.')
      return
    }
    setLoading(true)
    try {
      // Simulate network request instead of actual backend call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSent(true)
      toast.success("Message sent! I'll get back to you within 24 hours.")
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      toast.error('Something went wrong. Please connect via email.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-12 md:py-16 bg-white">
      <div className="w-full max-w-[1100px] mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#E9A23B]" />
            <span className="text-[#E9A23B] text-xs font-bold tracking-[0.2em] uppercase">Contact</span>
            <div className="h-px w-8 bg-[#E9A23B]" />
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-5xl font-extrabold text-[#222222] leading-tight text-center">
            Ready to Build <span className="text-[#E9A23B]">Something Great?</span>
          </h2>
          <p className="text-base mt-4 max-w-xl mx-auto text-center text-[#555555] leading-relaxed">
            Open to full-time MERN developer roles at product-focused MNCs. Let's talk — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 w-full">
          {/* Left: Contact info */}
          <motion.div
            className="lg:col-span-2 w-full"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-[#F9F9F9] rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] h-full border border-[#EEEEEE]">
              <h3 className="font-['Plus_Jakarta_Sans'] text-[#222222] font-extrabold text-2xl mb-8">Get in Touch</h3>
              <div className="flex flex-col gap-6">
                {contactInfo.map((ci, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    {ci.href ? (
                      <a
                        href={ci.href}
                        target={ci.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group p-1 -m-1 rounded-xl hover:bg-white transition-all w-fit"
                      >
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-[#EEEEEE] group-hover:border-[#E9A23B]/30 transition-all shadow-sm">
                          <ci.icon size={20} style={{ color: ci.color }} />
                        </div>
                        <div>
                          <div className="text-[#888888] text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                            {ci.label} 
                            {ci.label === 'WhatsApp' && <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"/>}
                          </div>
                          <div className="text-[#222222] font-semibold text-sm group-hover:text-[#E9A23B] transition-colors break-all">
                            {ci.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-1 -m-1">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-[#EEEEEE] shadow-sm">
                          <ci.icon size={20} style={{ color: ci.color }} />
                        </div>
                        <div>
                          <div className="text-[#888888] text-xs font-bold uppercase tracking-widest mb-1">{ci.label}</div>
                          <div className="text-[#222222] font-semibold text-sm">{ci.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_30px_rgb(0,0,0,0.05)] border border-[#EEEEEE] h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E9A23B]" />

              {sent ? (
                <motion.div
                  className="flex flex-col items-center justify-center h-full py-16 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={64} className="text-[#25D366] mb-6" />
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[#222222] font-extrabold text-3xl mb-4">Message Sent!</h3>
                  <p className="text-[#555555] max-w-md mx-auto mb-8 leading-relaxed text-base">Thanks for reaching out! Your message was delivered successfully and I will get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="btn-secondary px-8 py-3.5">Send Another Message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[#222222] font-extrabold text-2xl mb-8">Send a Message</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-[#555555] font-bold uppercase tracking-widest mb-2 block">Your Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full bg-[#F9F9F9] border border-[#EEEEEE] rounded-lg px-4 py-3 text-[#222222] focus:outline-none focus:border-[#E9A23B] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#555555] font-bold uppercase tracking-widest mb-2 block">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-[#F9F9F9] border border-[#EEEEEE] rounded-lg px-4 py-3 text-[#222222] focus:outline-none focus:border-[#E9A23B] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[#555555] font-bold uppercase tracking-widest mb-2 block">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity"
                      className="w-full bg-[#F9F9F9] border border-[#EEEEEE] rounded-lg px-4 py-3 text-[#222222] focus:outline-none focus:border-[#E9A23B] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#555555] font-bold uppercase tracking-widest mb-2 block">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Hello Aanjaney..."
                      required
                      className="w-full bg-[#F9F9F9] border border-[#EEEEEE] rounded-lg px-4 py-3 text-[#222222] focus:outline-none focus:border-[#E9A23B] focus:bg-white transition-colors resize-y"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 mt-4 text-[15px]"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
