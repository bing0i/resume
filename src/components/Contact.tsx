import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiArrowUp,
  FiSend,
} from 'react-icons/fi';
import { personal } from '../data';

const GITHUB_URL = 'https://github.com/bing0i';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ppttuyen/';

export default function Contact() {
  const contactCards = [
    {
      icon: <FiMail size={18} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <FiPhone size={18} />,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <FiMapPin size={18} />,
      label: 'Location',
      value: personal.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 border-t-[3px] border-ink-50"
    >
      <div className="absolute -right-8 md:right-6 top-16 pointer-events-none select-none opacity-[0.05] font-black leading-none text-big-stroke text-[200px] md:text-[340px]">
        06
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="eyebrow mb-4">Contact</div>
          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] text-ink-50 leading-[0.95] mb-4">
            Say hi.
            <br />
            <span className="bg-sand px-3 border-2 border-ink-50 shadow-[5px_5px_0_0_#05070f] inline-block -skew-x-[2deg]">
              Let us build something.
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 320 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="divider-slim max-w-[320px] mt-5"
          />
          <p className="mt-5 text-base md:text-lg font-bold text-ink-300 max-w-2xl leading-relaxed">
            My inbox is always open, I reply within a day. Fastest way to reach me is email,
            but a LinkedIn message works as well.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, skewX: -3 }}
          whileInView={{ opacity: 1, y: 0, skewX: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative p-6 md:p-10 lg:p-14 rounded-3xl border-[3px] border-ink-50 bg-paper shadow-[14px_14px_0_0_#05070f] overflow-hidden hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[18px_18px_0_0_#05070f] transition-all"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #05070f 1px, transparent 1px), linear-gradient(to bottom, #05070f 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div aria-hidden className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-sand/70 blur-2xl" />
          <div aria-hidden className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-sand/40 blur-3xl" />

          <div className="relative grid md:grid-cols-[auto,1fr] gap-6 md:gap-10 items-start mb-10">
            <motion.div
              whileHover={{ rotate: [0, -5, 4, -2, 0], scale: 1.08, transition: { duration: 0.7 } }}
              className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl bg-ink-50 text-sand flex items-center justify-center border-[3px] border-ink-50 shadow-[6px_6px_0_0_#d4a017]"
            >
              <FiSend size={26} />
            </motion.div>
            <div>
              <h3 className="text-2xl md:text-4xl font-black tracking-[-0.02em] text-ink-50 leading-[1.05] mb-3">
                Ready when you are.
              </h3>
              <p className="text-base md:text-lg text-ink-300 leading-relaxed max-w-2xl font-semibold">
                Roles, freelance, consulting, or a coffee chat in Ho Chi Minh City,
                send it my way.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10 relative">
            {contactCards.map((c, i) => {
              const inner = (
                <div className="h-full p-5 md:p-6 rounded-2xl bg-paper border-[3px] border-ink-50 shadow-[6px_6px_0_0_#05070f] hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#05070f] transition-all group">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -8, 6, -2, 0], transition: { duration: 0.6 } }}
                      className="w-11 h-11 rounded-xl bg-ink-50 text-sand flex items-center justify-center border-[2.5px] border-ink-50 shadow-[3px_3px_0_0_#d4a017]"
                    >
                      {c.icon}
                    </motion.div>
                    <span className="text-xs uppercase tracking-[0.2em] text-ink-400 font-black">
                      {c.label}
                    </span>
                  </div>
                  <div className="text-[15px] md:text-[16px] font-black text-ink-200 break-all leading-snug group-hover:text-ink-50 transition-colors">
                    {c.value}
                  </div>
                </div>
              );
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3, x: -3, transition: { duration: 0.22 } }}
                >
                  {c.href ? <a href={c.href} className="block h-full">{inner}</a> : inner}
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3 relative">
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ y: -4, x: -4 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-ink-50 text-sand font-black border-[3px] border-ink-50 shadow-[8px_8px_0_0_#d4a017] hover:shadow-[12px_12px_0_0_#d4a017] transition-all"
            >
              <FiMail size={16} />
              Email me
            </motion.a>
            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, x: -4 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-paper text-ink-50 font-black border-[3px] border-ink-50 shadow-[8px_8px_0_0_#05070f] hover:bg-sand hover:shadow-[12px_12px_0_0_#05070f] transition-all"
            >
              <FiLinkedin size={16} />
              LinkedIn
            </motion.a>
            <motion.a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, x: -4 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-paper text-ink-50 font-black border-[3px] border-ink-50 shadow-[8px_8px_0_0_#05070f] hover:bg-sand hover:shadow-[12px_12px_0_0_#05070f] transition-all"
            >
              <FiGithub size={16} />
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-10 md:py-12 border-t-[3px] border-ink-50 bg-ink-50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-sm">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-xl bg-sand text-ink-50 flex items-center justify-center border-[3px] border-paper shadow-[4px_4px_0_0_#d4a017] overflow-hidden">
              <img
                src="./profile.png"
                alt={personal.name}
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
            </div>
            <span className="text-sand/90 font-semibold leading-snug">
              <span className="font-black text-sand block">{personal.name}</span>
              <span className="text-xs uppercase tracking-[0.14em] text-sand/70 font-black">
                {personal.title}
              </span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex items-center gap-3 flex-wrap justify-center"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-lg bg-paper text-ink-50 border-[2.5px] border-ink-50 flex items-center justify-center shadow-[3px_3px_0_0_#d4a017] hover:bg-sand hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#d4a017] transition-all"
            >
              <FiGithub size={15} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-lg bg-paper text-ink-50 border-[2.5px] border-ink-50 flex items-center justify-center shadow-[3px_3px_0_0_#d4a017] hover:bg-sand hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#d4a017] transition-all"
            >
              <FiLinkedin size={15} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-lg bg-paper text-ink-50 border-[2.5px] border-ink-50 flex items-center justify-center shadow-[3px_3px_0_0_#d4a017] hover:bg-sand hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#d4a017] transition-all"
            >
              <FiMail size={15} />
            </a>
            <span className="text-sand/70 font-black tabular-nums pl-3 border-l-[2px] border-sand/30 ml-1">
              © {new Date().getFullYear()}
            </span>
            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -3, x: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sand text-ink-50 font-black border-[2.5px] border-ink-50 shadow-[4px_4px_0_0_#d4a017] hover:shadow-[6px_6px_0_0_#d4a017] transition-all"
            >
              Back to top
              <FiArrowUp size={13} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
