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
        className="relative py-24 md:py-32 border-t border-border"
      >
        <div className="section-watermark right-[-4%] md:right-6">04</div>

        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="eyebrow mb-5">Education</div>
            <h2 className="text-3xl md:text-[48px] font-semibold tracking-[-0.03em] text-ink-100 leading-[1.05] max-w-[820px]">
              Learned.{' '}
              <span className="underline-marker-strong">The fundamentals</span>.
            </h2>
            <p className="mt-5 text-base md:text-lg text-ink-400 font-medium max-w-[640px] leading-relaxed">
              Formal foundations in computer science and a postgraduate focus on
              information systems to pair engineering discipline with business
              context.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 320 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="divider-thick max-w-[320px] mt-8"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {education.map((ed, i) => (
              <motion.article
                key={ed.school}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group card relative p-6 md:p-7 overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute left-[-12%] top-[-12%] w-56 h-56 rounded-full bg-sand/50 blur-3xl opacity-50 pointer-events-none group-hover:opacity-80 transition-opacity"
                />
                <div className="flex items-start gap-4 mb-4 relative">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-12 h-12 icon-tile text-[17px]"
                  >
                    <FiBookOpen />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.01em] text-ink-100 leading-snug group-hover:text-accent-deep transition-colors">
                      {ed.school}
                    </h3>
                    <div className="text-sm text-ink-400 mt-1 font-medium">
                      {ed.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 relative">
                  <div className="text-[16px] font-medium text-ink-200 leading-snug">
                    {ed.degree}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-muted border border-sand/70 text-xs font-semibold text-accent-deep tabular-nums">
                    {ed.period}
                  </div>
                  {ed.detail && (
                    <div className="pt-3">
                      <span className="chip">{ed.detail}</span>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="awards"
        className="relative py-24 md:py-32 border-t border-border bg-gradient-to-b from-transparent via-sand/12 to-transparent"
      >
        <div className="section-watermark left-[-6%] md:left-6">05</div>

        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="eyebrow mb-5">Awards and Certifications</div>
            <h2 className="text-3xl md:text-[48px] font-semibold tracking-[-0.03em] text-ink-100 leading-[1.05] max-w-[820px]">
              Proof.{' '}
              <span className="underline-marker-strong">Recognition</span>.
            </h2>
            <p className="mt-5 text-base md:text-lg text-ink-400 font-medium max-w-[640px] leading-relaxed">
              Internal recognition for shipping and industry certifications for
              the depth that keeps platforms reliable.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 320 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="divider-thick max-w-[320px] mt-8"
            />
          </motion.div>

          <div className="space-y-14">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-ink-400 font-semibold mb-5"
              >
                <span className="inline-block w-10 h-0.5 bg-gradient-to-r from-accent to-accent-soft rounded-full" />
                NAB Awards and Programs
              </motion.h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {nabAwards.map((a, i) => (
                  <motion.article
                    key={a.name}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -3, transition: { duration: 0.22 } }}
                    className={`group relative p-5 md:p-6 rounded-2xl overflow-hidden border ${
                      a.highlight
                        ? 'bg-gradient-to-br from-sand/80 via-sand/50 to-paper border-sand/80 shadow-card'
                        : 'bg-paper border-border card'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ duration: 0.3 }}
                        className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border ${
                          a.highlight
                            ? 'bg-ink-100 text-sand border-ink-200/70'
                            : 'icon-tile text-[14px]'
                        }`}
                      >
                        <FiAward size={a.highlight ? 15 : 14} />
                      </motion.div>
                      <div className="text-xs text-ink-400 font-semibold tabular-nums ml-auto">
                        {a.date}
                      </div>
                    </div>
                    <h4 className="text-[15px] md:text-[15.5px] font-semibold leading-snug text-ink-100 group-hover:text-accent-deep transition-colors">
                      {a.name}
                    </h4>
                  </motion.article>
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-ink-400 font-semibold mb-5"
              >
                <span className="inline-block w-10 h-0.5 bg-gradient-to-r from-ink-300 to-ink-500 rounded-full" />
                Industry Certifications
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55 }}
                className="card p-4 md:p-5"
              >
                <ul className="divide-y divide-border/90">
                  {otherCerts.map((c, i) => (
                    <motion.li
                      key={c.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ x: 6, transition: { duration: 0.2 } }}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 py-4 first:pt-1.5 last:pb-1.5 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <motion.div
                          whileHover={{ scale: 1.12, y: -1 }}
                          transition={{ duration: 0.3 }}
                          className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border ${
                            c.highlight
                              ? 'icon-tile text-[13px]'
                              : 'bg-paper border-border text-ink-400 group-hover:border-sand/70 group-hover:text-accent-deep group-hover:bg-accent-muted transition-colors'
                          }`}
                        >
                          <FiAward size={13} />
                        </motion.div>
                        <span className="text-[15px] md:text-[16px] font-medium text-ink-200 leading-snug group-hover:text-ink-100 transition-colors truncate">
                          {c.name}
                        </span>
                      </div>
                      <span className="text-sm text-ink-400 shrink-0 tabular-nums sm:pl-4">
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
