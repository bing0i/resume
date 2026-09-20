import { motion } from 'framer-motion';
import { personal } from '../data';
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiArrowDown,
  FiDownload,
  FiZap,
} from 'react-icons/fi';

const GITHUB_URL = 'https://github.com/bing0i';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ppttuyen/';

const stackHighlights = [
  'React',
  'TypeScript',
  'Node.js',
  'AWS',
  'Next.js',
  'Testing',
  'DevOps',
  'AI / LLM Ops',
];

const statPills = [
  { label: '6+ years', value: 'Frontend · Full-stack' },
  { label: 'NAB Vietnam', value: 'Banking · regulated' },
  { label: '50+ users', value: 'Internal tooling · CUSTONBD' },
];

export default function Hero() {
  const [firstThree, last] = [
    personal.introParagraphs.slice(0, 3),
    personal.introParagraphs[3],
  ];

  const staggerIn = (i: number, base = 0.35) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: base + i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-36 pb-24"
    >
      <div className="section-watermark -left-10 md:left-6">01</div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-[-10%] md:right-[-2%] top-[18%] w-[360px] md:w-[520px] h-[360px] md:h-[520px] rounded-full blur-3xl opacity-70"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(253, 230, 138, 0.8), rgba(251, 191, 36, 0.28) 40%, transparent 68%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 z-10">
        <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-14 lg:gap-20 items-start">
          <div>
            <motion.div {...staggerIn(0, 0.3)} className="mb-8">
              <span className="eyebrow">Portfolio · 2026</span>
            </motion.div>

            <div className="mb-10">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.32,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-semibold tracking-[-0.04em] text-ink-100 leading-[1.02]"
              >
                <span className="block text-[44px] md:text-[68px] lg:text-[80px] text-ink-300 font-medium mb-2">
                  Senior
                </span>
                <motion.span
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0 0 0)' }}
                  transition={{
                    delay: 0.6,
                    duration: 1,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="block text-[60px] md:text-[96px] lg:text-[116px] font-semibold"
                >
                  <span className="inline-block align-baseline">
                    <span className="underline-marker-strong">Software</span>
                  </span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.92,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block text-[40px] md:text-[60px] lg:text-[72px] mt-3 font-medium"
                >
                  Engineer
                  <span className="cursor-blink" />
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              {...staggerIn(1, 0.55)}
              className="text-[17px] md:text-[20px] text-ink-200 leading-[1.55] font-medium max-w-[640px]"
            >
              Based in{' '}
              <span className="font-semibold text-ink-100">
                Ho Chi Minh City, Vietnam
              </span>
              . I design and ship{' '}
              <span className="underline-marker font-semibold text-ink-100">
                production-grade interfaces
              </span>{' '}
              for regulated banking and AI platforms.
            </motion.p>

            <motion.div
              {...staggerIn(2, 0.65)}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {statPills.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full bg-paper border border-border shadow-card"
                >
                  <span className="px-2.5 py-0.5 rounded-full bg-accent-muted text-[11px] font-semibold text-accent-deep border border-sand/70">
                    {s.label}
                  </span>
                  <span className="text-sm text-ink-200 font-medium">
                    {s.value}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...staggerIn(3, 0.75)}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-400 font-medium"
            >
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 hover:text-ink-100 transition-colors group"
              >
                <span className="w-9 h-9 rounded-xl icon-tile text-[15px]">
                  <FiMail />
                </span>
                <span className="tabular-nums">{personal.email}</span>
              </a>
              <span className="inline-flex items-center gap-2">
                <span className="w-9 h-9 rounded-xl icon-tile text-[15px]">
                  <FiPhone />
                </span>
                <span className="tabular-nums">{personal.phone}</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-9 h-9 rounded-xl icon-tile text-[15px]">
                  <FiMapPin />
                </span>
                {personal.location}
              </span>
            </motion.div>
          </div>

          <div className="relative lg:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.85,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card p-6 md:p-7 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.35] pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.22) 1px, transparent 0)',
                  backgroundSize: '16px 16px',
                  maskImage:
                    'radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0) 85%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse at 50% 0%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0) 85%)',
                }}
              />
              <div className="relative flex items-center gap-3 mb-5">
                <div className="icon-tile w-10 h-10 text-base">
                  <FiZap />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-accent-deep font-semibold">
                    Tech Radar
                  </div>
                  <div className="text-sm text-ink-400 font-medium">
                    What I ship with today
                  </div>
                </div>
              </div>

              <div className="relative flex flex-wrap gap-2 mb-6">
                {stackHighlights.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.95 + i * 0.05,
                    }}
                    whileHover={{ y: -2 }}
                    className="chip"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <div className="relative divider-thick mb-6" />

              <div className="relative flex flex-wrap gap-3 items-center">
                <motion.a
                  href="#experience"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  className="primary-button text-sm"
                >
                  See my experience
                  <FiArrowDown size={14} />
                </motion.a>
                <motion.a
                  href="./cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  className="ghost-button text-sm"
                >
                  <FiDownload size={14} />
                  Download CV
                </motion.a>
                <div className="flex items-center gap-2 ml-1">
                  <motion.a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    whileHover={{ y: -2, rotate: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-10 h-10 rounded-xl bg-paper border border-border text-ink-200 flex items-center justify-center hover:border-sand/70 hover:text-accent-deep hover:bg-accent-muted transition-all text-[15px]"
                  >
                    <FiGithub />
                  </motion.a>
                  <motion.a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    whileHover={{ y: -2, rotate: 2 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-10 h-10 rounded-xl bg-paper border border-border text-ink-200 flex items-center justify-center hover:border-sand/70 hover:text-accent-deep hover:bg-accent-muted transition-all text-[15px]"
                  >
                    <FiLinkedin />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 card p-5 md:p-6 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-br from-sand/70 to-accent-soft/40 blur-3xl"
              />
              <div className="relative flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 icon-tile-dark text-lg">
                  <FiZap />
                </div>
                <div className="text-[15px] md:text-[16px] leading-[1.7] text-ink-100 font-medium">
                  <span className="underline-marker">{last}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{
            delay: 1.15,
            duration: 1.1,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="mt-20 max-w-5xl"
        >
          <div className="divider-thick" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 max-w-3xl space-y-5 prose-readable"
        >
          {firstThree.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-5 border-l-2 border-sand/70"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { GITHUB_URL, LINKEDIN_URL };
