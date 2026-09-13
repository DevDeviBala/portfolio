import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-20">
      <div className="mx-auto max-w-wrap px-7">
        <div className="mb-12 max-w-[640px]">
          <span className="mb-3 block font-mono text-[0.78rem] text-text-faint">
            Experience
          </span>
          <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)]">
            Where this was built
          </h2>
        </div>

        <ol className="space-y-4">
          {experiences.map((exp, i) => (
            <li key={`${exp.company}-${exp.start}`} className="relative">
              {i < experiences.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-[7px] top-[44px] h-[calc(100%-16px)] w-px bg-line"
                />
              )}

              <div className="relative flex gap-5">
                <div className="pt-[26px]">
                  <span
                    aria-hidden
                    className={`inline-block h-3.5 w-3.5 rounded-sm border-2 border-ink ${
                      i === experiences.length - 1
                        ? 'bg-py-blue'
                        : 'bg-line'
                    }`}
                  />
                </div>

                <div className="flex-1 rounded border border-line bg-surface">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-line bg-surface-2 px-5 py-3 font-mono text-[0.74rem]">
                    <span className="text-text-muted">
                      {exp.start} — {exp.end}
                    </span>
                    {exp.timelineLabel && (
                      <>
                        <span className="text-text-faint">·</span>
                        <span className="text-text-faint">
                          {exp.timelineLabel}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="px-6 py-6">
                    <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-serif text-[1.25rem]">
                        {exp.role}
                      </span>
                    </div>
                    <span className="mb-5 block font-mono text-[0.82rem] text-py-blue-bright">
                      {exp.company}
                    </span>

                    <ul className="grid list-disc gap-2.5 pl-[18px] text-[0.94rem] text-text-muted marker:text-py-blue">
                      {exp.bullets.map(b => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    {exp.tech && exp.tech.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.tech.map(t => (
                          <span
                            key={t}
                            className="rounded border border-line bg-surface-2 px-2.5 py-1 font-mono text-[0.7rem] text-text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {exp.leadNote && (
                      <div className="mt-5 border-t border-dashed border-line pt-5">
                        <span className="mb-2 block font-mono text-[0.72rem] text-py-blue-bright">
                          Project lead
                        </span>
                        <p className="text-[0.94rem] text-text-muted">
                          {exp.leadNote}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}

          <li className="relative flex gap-5">
            <div className="pt-[3px]">
              <span className="inline-block h-3.5 w-3.5 rounded-sm border-2 border-ink bg-success animate-pulse" />
            </div>
            <div className="flex-1 pt-1 font-mono text-[0.8rem]">
              <span className="text-success">Open to opportunities</span>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}