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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% -10%, rgba(234,179,8,0.18) 0, transparent 40%), radial-gradient(circle at 90% 10%, rgba(202,138,4,0.12) 0, transparent 45%), radial-gradient(circle at 50% 100%, rgba(245,158,11,0.08) 0, transparent 55%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="absolute top-0 left-0 w-full h-[6px]"
          style={{
            background:
              'linear-gradient(90deg, #ca8a04 0%, #eab308 25%, #13182a 50%, #eab308 75%, #ca8a04 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ca8a04 1px, transparent 1px), linear-gradient(to bottom, #ca8a04 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>

      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 8 }}
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
