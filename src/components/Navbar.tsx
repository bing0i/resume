import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { personal } from '../data';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 26);
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const atBottom = scrollY + viewportH >= docH - 60;

      if (atBottom) {
        setActive('#contact');
        return;
      }

      let bestId = '#home';
      let bestScore = Infinity;
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const score = Math.abs(rect.top - 160);
        if (rect.bottom > 160 && score < bestScore) {
          bestScore = score;
          bestId = l.href;
        }
      }
      setActive(bestId);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between gap-3 px-4 md:px-6 py-3 rounded-2xl bg-paper/85 backdrop-blur-md transition-all ${
            scrolled
              ? 'border border-border shadow-paper'
              : 'border border-transparent'
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0 min-w-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-sand/80 to-accent-soft/40 opacity-80 blur-[1px]" />
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-border shadow-paper">
                <img
                  src="./profile.png"
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              </div>
            </div>
            <div className="hidden sm:block leading-tight min-w-0">
              <div className="text-[10.5px] text-accent-deep font-semibold uppercase tracking-[0.2em]">
                {personal.name.split(' ')[1].toUpperCase()}.DEV
              </div>
              <div className="text-[14.5px] font-semibold text-ink-100 truncate">
                {personal.name}
              </div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center px-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`pill-link ${active === l.href ? 'is-active' : ''}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97, y: 0 }}
            className="hidden md:inline-flex items-center gap-2 primary-button text-sm"
          >
            Get in touch
            <FiArrowRight size={14} />
          </motion.a>

          <div className="hidden sm:block md:hidden lg:hidden mx-2">
            {active && (
              <span className="px-3 py-1.5 rounded-full bg-accent-muted border border-sand/70 text-[11px] font-semibold text-accent-deep">
                {links.find((l) => l.href === active)?.label ?? ''}
              </span>
            )}
          </div>

          <button
            className="lg:hidden ml-2 p-2.5 rounded-xl border border-border text-ink-200 bg-paper hover:bg-accent-muted hover:text-accent-deep hover:border-sand/70 transition-all"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden mt-3 bg-paper border border-border rounded-2xl overflow-hidden shadow-paper"
            >
              <div className="p-2 flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      active === l.href
                        ? 'pill-link is-active !block !px-4 !py-2.5'
                        : 'text-ink-300 hover:text-ink-100 hover:bg-accent-muted'
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 primary-button justify-center text-sm"
                >
                  Get in touch
                  <FiArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
