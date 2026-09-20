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
      icon: <FiMail size={16} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <FiPhone size={16} />,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <FiMapPin size={16} />,
      label: 'Location',
      value: personal.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="section-watermark right-[-4%] md:right-6">06</div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="eyebrow mb-5">Contact</div>
          <h2 className="text-3xl md:text-[48px] font-semibold tracking-[-0.03em] text-ink-100 leading-[1.05] max-w-[820px]">
            Say hi.{' '}
            <span className="underline-marker-strong">
              Let us build something
            </span>
            .
          </h2>
          <p className="mt-5 text-base md:text-lg text-ink-400 font-medium max-w-[640px] leading-relaxed">
            My inbox is always open, I reply within a day. Fastest way to reach
            me is email, but a LinkedIn message works as well.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 320 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="divider-thick max-w-[320px] mt-8"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative card p-6 md:p-10 lg:p-14 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.28] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.25) 1px, transparent 0)',
              backgroundSize: '20px 20px',
            }}
          />
          <div
            aria-hidden
            className="absolute -right-14 -top-14 w-60 h-60 rounded-full bg-gradient-to-br from-sand/70 to-accent-soft/35 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-gradient-to-br from-accent-soft/40 to-sand/30 blur-3xl"
          />

          <div className="relative grid md:grid-cols-[auto,1fr] gap-6 md:gap-10 items-start mb-10">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl icon-tile text-2xl shadow-card"
            >
              <FiSend />
            </motion.div>
            <div>
              <h3 className="text-2xl md:text-[34px] font-semibold tracking-[-0.015em] text-ink-100 leading-[1.05] mb-3">
                Ready when you are.
              </h3>
              <p className="text-base md:text-lg text-ink-400 leading-relaxed max-w-2xl font-medium">
                Roles, freelance, consulting, or a coffee chat in Ho Chi Minh
                City, send it my way.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10 relative">
            {contactCards.map((c, i) => {
              const inner = (
                <div className="h-full p-5 md:p-6 rounded-2xl bg-paper border border-border group transition-all hover:border-sand/70 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.08, y: -1 }}
                      transition={{ duration: 0.3 }}
                      className="w-11 h-11 icon-tile text-[15px]"
                    >
                      {c.icon}
                    </motion.div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-ink-400 font-semibold">
                      {c.label}
                    </span>
                  </div>
                  <div className="text-[15px] md:text-[16px] font-medium text-ink-200 break-all leading-snug group-hover:text-ink-100 transition-colors">
                    {c.value}
                  </div>
                </div>
              );
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -2, transition: { duration: 0.22 } }}
                >
                  {c.href ? (
                    <a href={c.href} className="block h-full">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3 relative">
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="primary-button text-sm"
            >
              <FiMail size={14} />
              Email me
            </motion.a>
            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="ghost-button text-sm"
            >
              <FiLinkedin size={14} />
              LinkedIn
            </motion.a>
            <motion.a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="ghost-button text-sm"
            >
              <FiGithub size={14} />
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
    <footer className="py-10 md:py-14 border-t border-border bg-gradient-to-b from-transparent to-sand/20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="divider-hairline mb-10" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3"
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
            <span className="text-ink-200 font-medium leading-snug">
              <span className="font-semibold text-ink-100 block">
                {personal.name}
              </span>
              <span className="text-[10.5px] uppercase tracking-[0.16em] text-accent-deep font-semibold">
                {personal.title}
              </span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-paper text-ink-300 border border-border flex items-center justify-center hover:border-sand/70 hover:text-accent-deep hover:bg-accent-muted hover:-translate-y-0.5 transition-all text-[14px]"
            >
              <FiGithub />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-paper text-ink-300 border border-border flex items-center justify-center hover:border-sand/70 hover:text-accent-deep hover:bg-accent-muted hover:-translate-y-0.5 transition-all text-[14px]"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-xl bg-paper text-ink-300 border border-border flex items-center justify-center hover:border-sand/70 hover:text-accent-deep hover:bg-accent-muted hover:-translate-y-0.5 transition-all text-[14px]"
            >
              <FiMail />
            </a>
            <span className="text-ink-400 font-semibold tabular-nums pl-3 border-l border-border ml-1">
              © {new Date().getFullYear()}
            </span>
            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Back to top"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl ghost-button text-sm"
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
