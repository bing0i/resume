import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const activeClass = (href: string) =>
    active === href
      ? 'bg-ink-50 text-sand border-2 border-ink-50 shadow-[5px_5px_0_0_#05070f] -translate-x-1 -translate-y-1'
      : 'bg-paper text-ink-200 border-2 border-ink-50 hover:bg-sand';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-5xl px-4">
        <nav
          className={`flex items-center justify-between gap-3 px-4 md:px-5 py-3 rounded-2xl bg-paper transition-all ${
            scrolled
              ? 'border-2 border-ink-50 shadow-[10px_10px_0_0_#05070f]'
              : 'border-2 border-ink-50/80 shadow-[6px_6px_0_0_rgba(5,7,15,0.85)]'
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: [0, -4, 3, 0], transition: { duration: 0.5 } }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-ink-50 -z-10 translate-x-0.5 translate-y-0.5" />
              <div className="w-11 h-11 rounded-2xl bg-paper border-2 border-ink-50 overflow-hidden">
                <img
                  src="./profile.png"
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              </div>
            </motion.div>
            <div className="hidden sm:block leading-tight">
              <div className="text-xs text-ink-500 font-black uppercase tracking-[0.18em]">
                {personal.name.split(' ')[1].toUpperCase()}.DEV
              </div>
              <div className="text-[15px] font-black text-ink-100 group-hover:text-accent-deep transition-colors">
                {personal.name}
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-black transition-all ${activeClass(
                  l.href
                )}`}
              >
                <AnimatePresence>
                  {active === l.href && (
                    <motion.span
                      layoutId="nav-underline"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                      className="absolute left-1.5 right-1.5 -bottom-2 h-1.5 rounded-full bg-accent"
                      style={{ transformOrigin: 'left center' }}
                    />
                  )}
                </AnimatePresence>
                {l.label}
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ y: -3, x: -3 }}
            whileTap={{ scale: 0.96, y: 0, x: 0 }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sand text-ink-50 font-black border-2 border-ink-50 shadow-[5px_5px_0_0_#05070f] hover:shadow-[8px_8px_0_0_#05070f] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            Hire me
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>

          <div className="md:hidden">
            {active && (
              <span className="px-3 py-2 rounded-lg bg-sand border-2 border-ink-50 text-[12px] font-black text-ink-50 shadow-[3px_3px_0_0_#05070f]">
                {links.find((l) => l.href === active)?.label ?? ''}
              </span>
            )}
          </div>

          <button
            className="md:hidden ml-2 p-2.5 rounded-xl border-2 border-ink-50 text-ink-50 bg-sand shadow-[4px_4px_0_0_#05070f] hover:bg-paper hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#05070f] transition-all"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
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
              initial={{ opacity: 0, y: -14, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -14, height: 0 }}
              transition={{ ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mt-3 bg-paper border-2 border-ink-50 rounded-2xl overflow-hidden shadow-[10px_10px_0_0_#05070f]"
            >
              <div className="p-2 flex flex-col gap-1.5">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-black transition-all ${activeClass(
                      l.href
                    )}`}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 px-4 py-3 rounded-xl bg-sand text-ink-50 font-black border-2 border-ink-50 shadow-[5px_5px_0_0_#05070f] text-center"
                >
                  Hire me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
