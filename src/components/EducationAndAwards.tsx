import { motion } from 'framer-motion';
import { education, certifications } from '../data';
import { FiAward, FiBookOpen } from 'react-icons/fi';

const nabAwards = certifications.filter((c) => c.name.startsWith('NAB'));
const otherCerts = certifications.filter((c) => !c.name.startsWith('NAB'));

export default function EducationAndAwards() {
  return (
    <>
      <section
        id="education"
        className="relative py-24 md:py-32 border-t-[3px] border-ink-50"
      >
        <div className="absolute -right-8 md:right-6 top-16 pointer-events-none select-none opacity-[0.05] font-black leading-none text-big-stroke text-[200px] md:text-[340px]">
          04
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div className="eyebrow mb-4">Education</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] text-ink-50 leading-[0.95] mb-4">
              <span className="bg-ink-50 text-sand px-3 border-2 border-ink-50 shadow-[5px_5px_0_0_#d4a017] inline-block -skew-x-[2deg] mr-2">
                Learned.
              </span>
              <br />
              The fundamentals.
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 320 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="divider-slim max-w-[320px] mt-5"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {education.map((ed, i) => (
              <motion.div
                key={ed.school}
                initial={{ opacity: 0, y: 24, skewY: -2 }}
                whileInView={{ opacity: 1, y: 0, skewY: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative p-6 md:p-7 rounded-2xl border-[3px] border-ink-50 bg-paper shadow-[10px_10px_0_0_#05070f] hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[16px_16px_0_0_#05070f] transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{
                      rotate: [0, -8, 6, -2, 0],
                      scale: 1.1,
                      transition: { duration: 0.7 },
                    }}
                    className="shrink-0 w-12 h-12 rounded-xl bg-sand border-[3px] border-ink-50 text-ink-50 flex items-center justify-center shadow-[4px_4px_0_0_#05070f]"
                  >
                    <FiBookOpen size={18} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-black tracking-[-0.01em] text-ink-50 leading-snug group-hover:text-accent-deep transition-colors">
                      {ed.school}
                    </h3>
                    <div className="text-sm font-black text-ink-400 mt-1">
                      {ed.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-[16px] font-black text-ink-200 leading-snug">
                    {ed.degree}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-ink-50 text-sand font-black text-xs border-2 border-ink-50 shadow-[3px_3px_0_0_#d4a017] tabular-nums">
                      {ed.period}
                    </div>
                    {ed.detail && (
                      <motion.div whileHover={{ scale: 1.05, x: 4 }}>
                        <span className="inline-block px-4 py-2 rounded-lg chip text-sm">
                          {ed.detail}
                        </span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="awards"
        className="relative py-24 md:py-32 border-t-[3px] border-ink-50 bg-gradient-to-b from-transparent via-sand/15 to-transparent"
      >
        <div className="absolute -left-6 md:left-6 top-16 pointer-events-none select-none opacity-[0.05] font-black leading-none text-big-stroke text-[200px] md:text-[340px]">
          05
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <div className="eyebrow mb-4">Awards and Certifications</div>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] text-ink-50 leading-[0.95] mb-4">
              Proof.
              <span className="bg-sand px-3 border-2 border-ink-50 shadow-[5px_5px_0_0_#05070f] inline-block -skew-x-[2deg] ml-2">
                Recognition.
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 320 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="divider-slim max-w-[320px] mt-5"
            />
          </motion.div>

          <div className="space-y-14">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-400 font-black mb-5"
              >
                <span className="inline-block w-10 h-1 bg-accent rounded-full" />
                NAB Awards and Programs
              </motion.h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {nabAwards.map((a, i) => (
                  <motion.div
                    key={a.name}
                    initial={{ opacity: 0, y: 20, skewY: -1 }}
                    whileInView={{ opacity: 1, y: 0, skewY: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -4,
                      x: -4,
                      transition: { duration: 0.22 },
                    }}
                    className={`group relative p-5 md:p-6 rounded-2xl overflow-hidden ${
                      a.highlight
                        ? 'bg-sand border-[3px] border-ink-50 shadow-[10px_10px_0_0_#05070f] hover:shadow-[14px_14px_0_0_#05070f]'
                        : 'bg-paper border-[3px] border-ink-50 shadow-[8px_8px_0_0_#05070f] hover:shadow-[12px_12px_0_0_#05070f]'
                    } transition-all`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{
                          rotate: [0, -10, 8, -3, 0],
                          scale: 1.1,
                          transition: { duration: 0.6 },
                        }}
                        className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border-[3px] border-ink-50 shadow-[3px_3px_0_0_#05070f] ${
                          a.highlight
                            ? 'bg-ink-50 text-sand'
                            : 'bg-sand text-ink-50'
                        }`}
                      >
                        <FiAward size={16} />
                      </motion.div>
                      <div className="text-xs text-ink-400 font-black tabular-nums ml-auto">
                        {a.date}
                      </div>
                    </div>
                    <h4
                      className={`text-[15px] md:text-base font-black leading-snug ${
                        a.highlight ? 'text-ink-50' : 'text-ink-50'
                      } group-hover:text-accent-deep transition-colors`}
                    >
                      {a.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-400 font-black mb-5"
              >
                <span className="inline-block w-10 h-1 bg-ink-300 rounded-full" />
                Industry Certifications
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55 }}
                className="p-4 md:p-5 rounded-2xl border-[3px] border-ink-50 bg-paper shadow-[10px_10px_0_0_#05070f]"
              >
                <ul className="divide-y-[2px] divide-ink-50/80">
                  {otherCerts.map((c, i) => (
                    <motion.li
                      key={c.name}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ x: 8, transition: { duration: 0.2 } }}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4 first:pt-1 last:pb-1 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <motion.div
                          whileHover={{
                            rotate: [0, -12, 10, -2, 0],
                            scale: 1.15,
                            transition: { duration: 0.6 },
                          }}
                          className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border-[2.5px] border-ink-50 shadow-[3px_3px_0_0_#05070f] ${
                            c.highlight
                              ? 'bg-sand text-ink-50'
                              : 'bg-paper text-ink-400 group-hover:bg-sand group-hover:text-ink-50 transition-colors'
                          }`}
                        >
                          <FiAward size={14} />
                        </motion.div>
                        <span className="text-[15px] md:text-[16px] font-black text-ink-200 leading-snug group-hover:text-ink-50 transition-colors truncate">
                          {c.name}
                        </span>
                      </div>
                      <span className="text-sm font-black text-ink-400 shrink-0 tabular-nums sm:pl-4">
                        {c.date}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
