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
} from 'react-icons/fi';

const GITHUB_URL = 'https://github.com/bing0i';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ppttuyen/';

const marqueeTags = [
  'REACT',
  'NODE.JS',
  'TYPESCRIPT',
  'AWS',
  'AI / LLM OPS',
  'BANKING / AML',
  'TAILWIND',
  'DESIGN SYSTEMS',
  'CUSTOMER ONBOARDING',
  'CDD / FATCA / CRSA',
  'NEXT.JS',
  'GRAPHQL',
  'DOCKER',
  'KUBERNETES',
  'JEST / CYPRESS',
];

export default function Hero() {
  const [firstThree, last] = [
    personal.introParagraphs.slice(0, 3),
    personal.introParagraphs[3],
  ];

  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.5 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-36 pb-24"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-[22%] right-[-6%] md:right-[2%] font-black select-none leading-none"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1.2 }}
      >
        <div className="text-[180px] md:text-[320px] text-ink-50/[0.06] text-big-stroke">
          01
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="pointer-events-none absolute left-0 top-[58%] w-full -z-0"
      >
        <div className="flex w-full whitespace-nowrap overflow-hidden">
          <div className="flex gap-10 pr-10 animate-marqueeX items-center py-2 border-y-2 border-ink-50 bg-sand/90">
            {[...marqueeTags, ...marqueeTags].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-10">
                <span className="font-black tracking-[0.14em] text-ink-50 text-sm md:text-base">
                  {t}
                </span>
                <span className="w-2 h-2 rounded-full bg-ink-50 shrink-0" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-5xl px-6 z-10">
        <motion.div {...stagger(0)} className="mb-6">
          <span className="eyebrow">
            Portfolio · 2026
          </span>
        </motion.div>

        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, skewX: -10, x: -40, scale: 1.05 }}
            animate={{ opacity: 1, skewX: 0, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-[0.86] tracking-[-0.05em] text-ink-50"
          >
            <span className="block text-[52px] md:text-[84px] lg:text-[100px] mb-3">
              Senior
            </span>
            <motion.span
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
              className="block text-[68px] md:text-[112px] lg:text-[136px] relative"
            >
              <span className="relative z-10 text-sand">
                <span className="relative z-20 text-ink-50 px-3 md:px-6 py-2">
                  Software
                </span>
              </span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, skewY: 3, y: 20 }}
              animate={{ opacity: 1, skewY: 0, y: 0 }}
              transition={{ delay: 0.72, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[48px] md:text-[72px] lg:text-[88px] mt-1"
            >
              <span className="underline-stroke">Engineer</span>
              <span className="cursor-blink" />
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1, duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="mt-6 mb-5"
          >
            <div className="divider-big" />
          </motion.div>

          <motion.p {...stagger(1)} className="text-[18px] md:text-[22px] lg:text-[26px] font-black text-ink-200 leading-[1.2] tracking-[-0.02em] max-w-[920px]">
            Based in{' '}
            <span className="bg-ink-50 text-sand px-3 py-0.5 -mx-1 rounded-lg relative inline-block">
              Ho Chi Minh City, Vietnam
            </span>
            . I design and ship{' '}
            <span className="bg-sand px-2 -mx-1 rounded border-2 border-ink-50 shadow-[3px_3px_0_0_#05070f] inline-block translate-y-[-2px] mx-1">
              production-grade interfaces
            </span>{' '}
            for regulated industries.
          </motion.p>
        </div>

        <motion.div {...stagger(2)} className="flex flex-wrap gap-2 mb-10">
          {[
            { label: 'Currently: NAB Vietnam', tone: 'bg-ink-50 text-sand border-ink-50' },
            { label: 'Focus: React · Node · AI tooling', tone: 'bg-paper text-ink-50 border-ink-50' },
            { label: 'Stack: 6 yrs · Frontend · Full-stack', tone: 'bg-sand text-ink-50 border-ink-50' },
          ].map((b, i) => (
            <span
              key={i}
              className={`px-4 py-2 rounded-lg font-black text-[13px] md:text-sm border-2 shadow-[4px_4px_0_0_#05070f] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#05070f] transition-all ${b.tone}`}
            >
              {b.label}
            </span>
          ))}
        </motion.div>

        <div className="space-y-6 mb-10 max-w-[820px]">
          {firstThree.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20, skewX: -4 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-6 border-l-[4px] border-ink-50 text-[16.5px] md:text-lg text-ink-200 leading-[1.85] font-semibold"
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -30, skewX: -6 }}
            whileInView={{ opacity: 1, x: 0, skewX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ skewX: -1, x: 6, transition: { duration: 0.25 } }}
            className="relative p-5 md:p-6 border-[3px] border-ink-50 bg-ink-50 shadow-[12px_12px_0_0_#d4a017] overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.09] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #fde047 1px, transparent 1px), linear-gradient(to bottom, #fde047 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="flex items-start gap-4 relative">
              <motion.span
                animate={{ rotate: [0, 6, -4, 2, -1, 0], scale: [1, 1.1, 1, 1.08, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2.4 }}
                className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-sand border-[3px] border-ink-50 text-[26px] md:text-[30px] flex items-center justify-center shadow-[4px_4px_0_0_#05070f]"
              >
                ⚡
              </motion.span>
              <div className="flex-1 text-[17px] md:text-xl font-black text-sand leading-[1.45] tracking-[-0.01em] relative">
                {last}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div {...stagger(3)} className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] md:text-[15px] text-ink-300 font-black mb-10">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 hover:text-ink-50 transition-colors group"
          >
            <span className="w-10 h-10 rounded-lg bg-paper border-2 border-ink-50 text-accent-deep flex items-center justify-center shadow-[3px_3px_0_0_#05070f] group-hover:bg-sand transition-colors">
              <FiMail size={15} />
            </span>
            {personal.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <span className="w-10 h-10 rounded-lg bg-paper border-2 border-ink-50 text-accent-deep flex items-center justify-center shadow-[3px_3px_0_0_#05070f]">
              <FiPhone size={15} />
            </span>
            {personal.phone}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-10 h-10 rounded-lg bg-paper border-2 border-ink-50 text-accent-deep flex items-center justify-center shadow-[3px_3px_0_0_#05070f]">
              <FiMapPin size={15} />
            </span>
            {personal.location}
          </span>
        </motion.div>

        <motion.div {...stagger(4)} className="flex flex-wrap gap-3 items-center">
          <motion.a
            href="#experience"
            whileHover={{ y: -4, x: -4 }}
            whileTap={{ scale: 0.96, y: 0, x: 0 }}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-ink-50 text-sand font-black border-2 border-ink-50 shadow-[8px_8px_0_0_#05070f] hover:shadow-[12px_12px_0_0_#05070f] transition-all"
          >
            See my experience
            <FiArrowDown />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ y: -4, x: -4 }}
            whileTap={{ scale: 0.96, y: 0, x: 0 }}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-sand text-ink-50 font-black border-2 border-ink-50 shadow-[8px_8px_0_0_#05070f] hover:shadow-[12px_12px_0_0_#05070f] transition-all"
          >
            Let's talk
          </motion.a>
          <motion.a
            href="./cv.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4, x: -4 }}
            whileTap={{ scale: 0.96, y: 0, x: 0 }}
            className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-paper text-ink-50 font-black border-2 border-ink-50 shadow-[8px_8px_0_0_#05070f] hover:shadow-[12px_12px_0_0_#05070f] transition-all"
          >
            <FiDownload />
            Download CV
          </motion.a>
          <div className="flex items-center gap-2 ml-1">
            <motion.a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -3, x: -3, rotate: -5 }}
              whileTap={{ scale: 0.94 }}
              className="w-12 h-12 rounded-xl bg-paper border-2 border-ink-50 text-ink-50 flex items-center justify-center shadow-[5px_5px_0_0_#05070f] hover:bg-sand hover:shadow-[8px_8px_0_0_#05070f] transition-all text-lg"
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -3, x: -3, rotate: 5 }}
              whileTap={{ scale: 0.94 }}
              className="w-12 h-12 rounded-xl bg-paper border-2 border-ink-50 text-ink-50 flex items-center justify-center shadow-[5px_5px_0_0_#05070f] hover:bg-sand hover:shadow-[8px_8px_0_0_#05070f] transition-all text-lg"
            >
              <FiLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { GITHUB_URL, LINKEDIN_URL };
