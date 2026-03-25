import React from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import ResumeViewer from './components/ResumeViewer'

export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#FFFFFF',
            color: '#222222',
            border: '1px solid #EEEEEE',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
          },
          success: { iconTheme: { primary: '#25D366', secondary: '#FFFFFF' } },
          error: { iconTheme: { primary: '#E9A23B', secondary: '#FFFFFF' } },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <ResumeViewer />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
