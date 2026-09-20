import { motion } from 'framer-motion';
import { experiences } from '../data';
import { FiBriefcase, FiCalendar, FiStar } from 'react-icons/fi';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="section-watermark right-[-4%] md:right-6">02</div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="eyebrow mb-5">Work Experience</div>
          <h2 className="text-3xl md:text-[48px] font-semibold tracking-[-0.03em] text-ink-100 leading-[1.05] max-w-[820px]">
            Where I have{' '}
            <span className="underline-marker-strong">built things</span>.
          </h2>
          <p className="mt-5 text-base md:text-lg text-ink-400 font-medium max-w-[640px] leading-relaxed">
            Regulated financial platforms, product-grade front-ends, and
            internal AI tooling. I aim for steady engineering excellence and
            teammate mentorship.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 320 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="divider-thick max-w-[320px] mt-8"
          />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((group, gIdx) => (
            <motion.article
              key={group.company}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.75,
                delay: gIdx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card relative p-6 md:p-8 overflow-hidden"
            >
              <div
                aria-hidden
                className={`absolute top-0 left-0 w-1.5 h-full ${group.color}`}
              />
              <div
                aria-hidden
                className={`absolute top-0 left-0 w-40 h-40 rounded-full blur-3xl opacity-40 pointer-events-none ${
                  gIdx === 0
                    ? 'bg-sand/70 -translate-x-12 -translate-y-12'
                    : 'bg-accent-soft/40 -translate-x-14 -translate-y-14'
                }`}
              />
              <div className="pl-5 relative">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.06, y: -2 }}
                      transition={{ duration: 0.35 }}
                      className="shrink-0 w-12 h-12 icon-tile text-[17px]"
                    >
                      <FiBriefcase />
                    </motion.div>
                    <div>
                      <h3 className="text-[22px] md:text-3xl font-semibold tracking-[-0.015em] text-ink-100 leading-tight">
                        {group.company}
                      </h3>
                      <p className="text-[15px] md:text-base text-ink-400 mt-1 font-medium">
                        {group.summary}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-muted border border-sand/70 text-[12px] md:text-xs font-semibold text-accent-deep">
                    <FiStar size={12} />
                    {group.roles.length} role{group.roles.length > 1 ? 's' : ''}
                  </div>
                </div>

                <div className="space-y-7">
                  {group.roles.map((role, rIdx) => (
                    <motion.div
                      key={role.title + role.period}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.55, delay: rIdx * 0.1 }}
                      className="relative pl-6 border-l border-border before:content-[''] before:absolute before:-left-[7px] before:top-2.5 before:w-3 before:h-3 before:rounded-full before:bg-gradient-to-br before:from-accent-soft before:to-accent before:ring-2 before:ring-paper"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3.5">
                        <h4 className="text-lg md:text-xl font-semibold text-ink-100 tracking-[-0.005em]">
                          {role.title}
                        </h4>
                        <div className="inline-flex items-center gap-1.5 text-[12.5px] md:text-sm text-ink-400 font-medium">
                          <FiCalendar size={13} />
                          <span className="tabular-nums">{role.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {role.points.map((b, bIdx) => (
                          <motion.li
                            key={b}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ duration: 0.45, delay: bIdx * 0.04 }}
                            whileHover={{
                              x: 4,
                              transition: { duration: 0.18 },
                            }}
                            className="flex items-start gap-3 text-[14.5px] md:text-[15.5px] text-ink-200 leading-[1.78] font-medium group"
                          >
                            <span className="shrink-0 mt-2.5 w-[7px] h-[7px] rounded-full bg-gradient-to-br from-accent-soft to-accent group-hover:scale-125 transition-transform" />
                            <span className="flex-1">{b}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
