import { motion } from 'framer-motion';
import { skillGroups } from '../data';

const catIcons: Record<string, string> = {
  Languages: '<>',
  'Frameworks and Libraries': '[]',
  Testing: '✓',
  'DevOps and Cloud': '☁',
  'AI, Data and Tooling': '✦',
};

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
      className="relative py-24 md:py-32 border-t-[3px] border-ink-50 bg-gradient-to-b from-transparent via-sand/15 to-transparent"
    >
      <div className="absolute -left-6 md:left-6 top-16 pointer-events-none select-none opacity-[0.05] font-black leading-none text-big-stroke text-[200px] md:text-[340px]">
        03
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="eyebrow mb-4">Skills and Tooling</div>
          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] text-ink-50 leading-[0.95] mb-4">
            <span className="bg-sand px-3 border-2 border-ink-50 shadow-[5px_5px_0_0_#05070f] inline-block -skew-x-[2deg] mr-2">
              My toolkit.
            </span>
            <br />
            What I reach for.
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 320 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="divider-slim max-w-[320px] mt-5"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {skillGroups.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, skewY: -2, y: 18 }}
              whileInView={{ opacity: 1, skewY: 0, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.65,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-5 md:p-6 rounded-2xl border-[3px] border-ink-50 bg-paper shadow-[10px_10px_0_0_#05070f] hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[16px_16px_0_0_#05070f] transition-all group"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{
                    rotate: [0, -8, 6, -3, 0],
                    scale: 1.1,
                    transition: { duration: 0.6 },
                  }}
                  className="shrink-0 w-12 h-12 rounded-xl bg-ink-50 text-sand flex items-center justify-center border-[3px] border-ink-50 font-black text-xl shadow-[4px_4px_0_0_#d4a017]"
                >
                  {catIcons[cat.category] ?? '·'}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-black tracking-[-0.02em] text-ink-50 group-hover:text-accent-deep transition-colors">
                  {cat.category}
                </h3>
                <span className="ml-auto px-3 py-1 rounded-lg border-2 border-ink-50 bg-sand text-ink-50 font-black text-xs shadow-[2px_2px_0_0_#05070f]">
                  {cat.items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((s, sIdx) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: sIdx * 0.03 }}
                    whileHover={{ y: -3, x: -3, rotate: -2, scale: 1.05 }}
                    className="px-3.5 py-2 rounded-lg chip text-xs md:text-[13px] whitespace-nowrap"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22, skewX: -4 }}
          whileInView={{ opacity: 1, y: 0, skewX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative p-5 md:p-7 rounded-2xl border-[3px] border-ink-50 bg-ink-50 shadow-[14px_14px_0_0_#d4a017] overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #fde047 1px, transparent 1px), linear-gradient(to bottom, #fde047 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative flex flex-col md:flex-row md:items-start gap-5">
            <div className="shrink-0 flex items-start gap-4 md:flex-col md:gap-2 md:items-start md:border-r-[3px] md:border-sand/40 md:pr-6">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
                className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-sand text-ink-50 flex items-center justify-center border-[3px] border-ink-50 font-black text-3xl shadow-[5px_5px_0_0_#d4a017]"
              >
                ✦
              </motion.div>
              <div className="flex-1 md:flex-initial">
                <h3 className="text-xl md:text-2xl font-black tracking-[-0.02em] text-sand leading-tight">
                  CUSTONBD
                </h3>
                <p className="text-sm font-bold text-sand/70 mt-0.5">
                  AI-powered internal engineering toolkit
                </p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[15px] md:text-[16px] font-bold text-sand/85 leading-[1.7] mb-4">
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
                    transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
                    whileHover={{ y: -3, x: -3, scale: 1.05 }}
                    className="px-3 py-1.5 rounded-lg bg-sand text-ink-50 font-black text-xs md:text-sm border-[2.5px] border-ink-50 shadow-[3px_3px_0_0_#d4a017]"
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
