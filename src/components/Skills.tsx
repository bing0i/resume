import { motion } from 'framer-motion';
import { skillGroups } from '../data';
import { FiCpu, FiLayers, FiCheckCircle, FiCloud, FiZap } from 'react-icons/fi';

const calloutHighlights = [
  'RAG',
  'LLM Ops',
  'Knowledge Graph',
  '70+ Skills',
  '50+ Users',
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 border-t border-border bg-gradient-to-b from-transparent via-sand/12 to-transparent"
    >
      <div className="section-watermark left-[-6%] md:left-6">03</div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="eyebrow mb-5">Skills and Tooling</div>
          <h2 className="text-3xl md:text-[48px] font-semibold tracking-[-0.03em] text-ink-100 leading-[1.05] max-w-[820px]">
            <span className="underline-marker-strong">My toolkit</span> – what I
            reach for.
          </h2>
          <p className="mt-5 text-base md:text-lg text-ink-400 font-medium max-w-[640px] leading-relaxed">
            Frontend depth, full-stack range, and production infra so teams ship
            with confidence. I keep learning surfaces and always pair tooling
            with measurable outcomes.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 320 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="divider-thick max-w-[320px] mt-8"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {skillGroups.map((cat, i) => {
            const Icon =
              [FiCpu, FiLayers, FiCheckCircle, FiCloud, FiZap][i] ?? FiZap;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card p-5 md:p-6 group relative overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute right-[-20%] top-[-20%] w-56 h-56 rounded-full bg-sand/60 blur-3xl opacity-60 pointer-events-none group-hover:opacity-90 transition-opacity"
                />
                <div className="flex items-center gap-3 mb-5 relative">
                  <motion.div
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-12 h-12 icon-tile text-[17px]"
                  >
                    <Icon />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.01em] text-ink-100 group-hover:text-accent-deep transition-colors">
                    {cat.category}
                  </h3>
                  <span className="ml-auto px-3 py-1 rounded-full bg-accent-muted border border-sand/70 text-[11px] font-semibold text-accent-deep">
                    {cat.items.length}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5 relative">
                  {cat.items.map((s, sIdx) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: sIdx * 0.03 }}
                      whileHover={{ y: -2 }}
                      className="chip"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative card p-6 md:p-8 bg-gradient-to-br from-ink-100 via-ink-50 to-ink-100 text-sand overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(253,230,138,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(253,230,138,0.5) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            aria-hidden
            className="absolute -right-14 -top-14 w-64 h-64 rounded-full bg-gradient-to-br from-sand/50 to-accent-soft/20 blur-3xl pointer-events-none"
          />
          <div className="relative flex flex-col md:flex-row md:items-start gap-6">
            <div className="shrink-0 flex items-start gap-4 md:flex-col md:gap-3 md:items-start md:border-r md:border-sand/20 md:pr-7">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 14,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
                className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-sand to-accent-soft text-ink-100 flex items-center justify-center shadow-pop text-2xl"
              >
                <FiZap />
              </motion.div>
              <div className="flex-1 md:flex-initial">
                <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.01em] leading-tight">
                  CUSTONBD
                </h3>
                <p className="text-sm text-sand/70 mt-1 font-medium">
                  AI-powered internal engineering toolkit
                </p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[15px] md:text-[16px] font-medium text-sand/85 leading-[1.75] mb-4">
                A self-built assistant my team actually uses every day. I
                connected documentation, Confluence, and Slack knowledge into a
                central RAG-based search, then layered in runbooks, migration
                scripts, and LLM-assisted triage.
              </p>
              <div className="flex flex-wrap gap-2">
                {calloutHighlights.map((h, i) => (
                  <motion.span
                    key={h}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.12 + i * 0.06 }}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1.5 rounded-full bg-sand text-ink-100 font-semibold text-xs md:text-sm border border-sand/70 shadow-card"
                  >
                    {h}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
