import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import EducationAndAwards from './components/EducationAndAwards';
import Contact, { Footer } from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream text-ink-100 overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 18% -12%, rgba(253, 230, 138, 0.5) 0, transparent 44%), radial-gradient(circle at 92% 0%, rgba(251, 191, 36, 0.18) 0, transparent 50%), radial-gradient(circle at 50% 110%, rgba(245, 158, 11, 0.1) 0, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.05) 1px, transparent 0)',
            backgroundSize: '22px 22px',
            maskImage:
              'radial-gradient(ellipse at 50% 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0) 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 50% 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0) 75%)',
          }}
        />
      </div>

      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        <Experience />
        <Skills />
        <EducationAndAwards />
        <Contact />
        <Footer />
      </motion.main>
    </div>
  );
}
