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
  FiCloud,
  FiCode,
  FiZap,
  FiBox,
} from 'react-icons/fi';
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiJest,
  SiCypress,
  SiPostgresql,
  SiHtml5,
  SiCss,
  SiOpenjdk,
  SiSpring,
  SiExpress,
  SiGooglecloud,
  SiFirebase,
  SiJenkins,
  SiCircleci,
  SiGithubactions,
  SiFormik,
  SiStyledcomponents,
  SiReactquery,
  SiTestinglibrary,
} from 'react-icons/si';

const GITHUB_URL = 'https://github.com/bing0i';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ppttuyen/';

const marqueeItems = [
  { label: 'React', Icon: SiReact, tone: 'bg-sand' },
  { label: 'Node.js', Icon: SiNodedotjs, tone: 'bg-paper' },
  { label: 'TypeScript', Icon: SiTypescript, tone: 'bg-sand' },
  { label: 'AWS', Icon: FiCloud, tone: 'bg-paper' },
  { label: 'Tailwind', Icon: SiTailwindcss, tone: 'bg-sand' },
  { label: 'Next.js', Icon: SiNextdotjs, tone: 'bg-paper' },
  { label: 'GraphQL', Icon: SiGraphql, tone: 'bg-sand' },
  { label: 'Docker', Icon: SiDocker, tone: 'bg-paper' },
  { label: 'Kubernetes', Icon: SiKubernetes, tone: 'bg-sand' },
  { label: 'Jest', Icon: SiJest, tone: 'bg-paper' },
  { label: 'Cypress', Icon: SiCypress, tone: 'bg-sand' },
  { label: 'Playwright', Icon: SiTestinglibrary, tone: 'bg-paper' },
  { label: 'PostgreSQL', Icon: SiPostgresql, tone: 'bg-sand' },
  { label: 'HTML5', Icon: SiHtml5, tone: 'bg-paper' },
  { label: 'CSS', Icon: SiCss, tone: 'bg-sand' },
  { label: 'Java', Icon: SiOpenjdk, tone: 'bg-paper' },
  { label: 'Spring', Icon: SiSpring, tone: 'bg-sand' },
  { label: 'Express', Icon: SiExpress, tone: 'bg-paper' },
  { label: 'Formik', Icon: SiFormik, tone: 'bg-sand' },
  { label: 'Styled Components', Icon: SiStyledcomponents, tone: 'bg-paper' },
  { label: 'GCP', Icon: SiGooglecloud, tone: 'bg-sand' },
  { label: 'Firebase', Icon: SiFirebase, tone: 'bg-paper' },
  { label: 'Jenkins', Icon: SiJenkins, tone: 'bg-sand' },
  { label: 'CircleCI', Icon: SiCircleci, tone: 'bg-paper' },
  { label: 'GitHub Actions', Icon: SiGithubactions, tone: 'bg-sand' },
  { label: 'Harness', Icon: FiBox, tone: 'bg-paper' },
  { label: 'React Query', Icon: SiReactquery, tone: 'bg-sand' },
  { label: 'React Native', Icon: SiReact, tone: 'bg-paper' },
  { label: 'GraphQL', Icon: FiCode, tone: 'bg-sand' },
  { label: 'SQL', Icon: FiZap, tone: 'bg-paper' },
  { label: 'JSP', Icon: SiHtml5, tone: 'bg-sand' },
] as const;

export default function Hero() {
  const [firstThree, last] = [
    personal.introParagraphs.slice(0, 3),
    personal.introParagraphs[3],
  ];

  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-36 pb-28"
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

      <div className="relative mx-auto w-full max-w-5xl px-6 z-10">
        <motion.div
          {...stagger(0)}
          className="mb-4 flex items-center justify-between gap-4 flex-wrap"
        >
          <span className="eyebrow">RESUME</span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border-[2.5px] border-ink-50 bg-paper text-ink-50 font-black text-xs md:text-sm shadow-[3px_3px_0_0_#05070f] tabular-nums">
            5+ years experience
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18, skewX: -4 }}
          animate={{ opacity: 1, y: 0, skewX: 0 }}
          transition={{ delay: 0.55, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <h1 className="text-[32px] md:text-[44px] lg:text-[52px] font-black tracking-[-0.03em] text-ink-50 leading-[1.05]">
            {personal.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.9, duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="mb-8"
        >
          <div className="divider-big" />
        </motion.div>

        <div className="space-y-6 mb-10 max-w-[820px]">
          {firstThree.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20, skewX: -4 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-6 border-l-[4px] border-ink-50 text-[16.5px] md:text-lg text-ink-200 leading-[1.85] font-semibold"
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20, skewX: -2 }}
            whileInView={{ opacity: 1, x: 0, skewX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-4 md:p-5 rounded-2xl border-[3px] border-ink-50 bg-sand shadow-[6px_6px_0_0_#05070f]"
          >
            <div className="flex items-center gap-3 relative">
              <span className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-lg bg-ink-50 text-sand text-[18px] md:text-[20px] flex items-center justify-center border-[2.5px] border-ink-50 shadow-[3px_3px_0_0_#05070f]">
                ⚡
              </span>
              <div className="flex-1 text-[15.5px] md:text-[17px] font-black text-ink-50 leading-[1.45] tracking-[-0.01em] relative">
                {last}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...stagger(3)}
          className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] md:text-[15px] text-ink-300 font-black mb-10"
        >
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 hover:text-ink-50 transition-colors group"
          >
            <span className="w-10 h-10 rounded-lg bg-paper border-2 border-ink-50 text-accent-deep flex items-center justify-center shadow-[3px_3px_0_0_#05070f] group-hover:bg-sand transition-colors">
              <FiMail size={15} />
            </span>
            {personal.email}
          </a>
          <a
            href={`tel:${personal.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 hover:text-ink-50 transition-colors group"
          >
            <span className="w-10 h-10 rounded-lg bg-paper border-2 border-ink-50 text-accent-deep flex items-center justify-center shadow-[3px_3px_0_0_#05070f] group-hover:bg-sand transition-colors">
              <FiPhone size={15} />
            </span>
            {personal.phone}
          </a>
          <span className="inline-flex items-center gap-2">
            <span className="w-10 h-10 rounded-lg bg-paper border-2 border-ink-50 text-accent-deep flex items-center justify-center shadow-[3px_3px_0_0_#05070f]">
              <FiMapPin size={15} />
            </span>
            {personal.location}
          </span>
        </motion.div>

        <motion.div
          {...stagger(4)}
          className="flex flex-wrap gap-3 items-center"
        >
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

      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 w-full overflow-hidden border-t-[3px] border-b-[3px] border-ink-50 bg-paper"
      >
        <div
          className="flex w-max animate-marqueeX will-change-transform items-center py-3 whitespace-nowrap"
          style={{ animation: 'marqueeX 52s linear infinite' }}
        >
          {[
            ...marqueeItems,
            ...marqueeItems,
            ...marqueeItems,
            ...marqueeItems,
          ].map((t, i) => {
            const Comp = t.Icon;
            return (
              <div
                key={i}
                className="inline-flex items-center gap-3 shrink-0 px-6"
              >
                <span
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-black tracking-[0.08em] text-[12px] md:text-[13px] border-[2.5px] border-ink-50 shadow-[4px_4px_0_0_#05070f] text-ink-50 ${t.tone}`}
                >
                  <Comp size={16} />
                  {t.label}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-ink-50 shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { GITHUB_URL, LINKEDIN_URL };
