import { motion } from 'framer-motion';
import { experiences } from '../data';
import { FiBriefcase, FiCalendar, FiStar } from 'react-icons/fi';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 border-t-[3px] border-ink-50"
    >
      <div className="absolute -right-8 md:right-6 top-16 pointer-events-none select-none opacity-[0.05] font-black leading-none text-big-stroke text-[200px] md:text-[340px]">
        02
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="eyebrow mb-4">Work Experience</div>
          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] text-ink-50 leading-[0.95] mb-4">
            Where I have
            <br />
            <span className="bg-sand px-3 border-2 border-ink-50 shadow-[5px_5px_0_0_#05070f] inline-block -skew-x-[2deg]">
              built things.
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

        <div className="space-y-8">
          {experiences.map((group, gIdx) => (
            <motion.div
              key={group.company}
              initial={{ opacity: 0, x: -26, skewX: -4 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.85,
                delay: gIdx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative p-6 md:p-8 rounded-2xl border-[3px] border-ink-50 bg-paper shadow-[12px_12px_0_0_#05070f] hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[18px_18px_0_0_#05070f] transition-all"
            >
              <div
                aria-hidden
                className={`absolute top-0 left-0 w-2 h-full rounded-l-xl ${
                  group.color
                }`}
              />
              <div className="pl-4">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{
                        rotate: [0, -6, 4, -2, 0],
                        scale: 1.08,
                        transition: { duration: 0.7 },
                      }}
                      className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-sand border-[3px] border-ink-50 text-ink-50 flex items-center justify-center shadow-[4px_4px_0_0_#05070f]"
                    >
                      <FiBriefcase size={20} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-[-0.02em] text-ink-50 leading-tight">
                        {group.company}
                      </h3>
                      <p className="text-[15px] md:text-base font-bold text-ink-400 mt-1">
                        {group.summary}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-ink-50 bg-ink-50 text-sand font-black text-xs md:text-sm shadow-[4px_4px_0_0_#d4a017]">
                    <FiStar />
                    {group.roles.length} role{group.roles.length > 1 ? 's' : ''}
                  </div>
                </div>

                <div className="space-y-6">
                  {group.roles.map((role, rIdx) => (
                    <motion.div
                      key={role.title + role.period}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: rIdx * 0.1 }}
                      className="relative pl-5 border-l-[3px] border-ink-50 before:content-[''] before:absolute before:-left-[7px] before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-accent before:border-2 before:border-ink-50"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                        <h4 className="text-lg md:text-xl font-black text-ink-50 tracking-[-0.01em]">
                          {role.title}
                        </h4>
                        <div className="inline-flex items-center gap-1.5 text-[12px] md:text-sm font-black text-ink-400">
                          <FiCalendar />
                          <span className="tabular-nums">{role.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {role.points.map((b, bIdx) => (
                          <motion.li
                            key={b}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ duration: 0.45, delay: bIdx * 0.04 }}
                            whileHover={{
                              x: 6,
                              transition: { duration: 0.18 },
                            }}
                            className="flex items-start gap-3 text-[14.5px] md:text-[15.5px] text-ink-200 leading-[1.75] font-semibold group"
                          >
                            <span className="shrink-0 mt-2 w-2.5 h-2.5 rounded-full bg-ink-50 border-2 border-ink-50 group-hover:bg-sand group-hover:scale-150 transition-all" />
                            <span className="flex-1">{b}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
