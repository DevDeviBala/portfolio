import { config } from '@/lib/config';

const badges = [
  'Python', 'Django', 'FastAPI', 'REST', 'GraphQL',
  'MySQL', 'MongoDB', 'Redis', 'Celery', 'React',
];

export default function Hero() {
  return (
    <section className="border-b border-line py-24">
      <div className="mx-auto grid max-w-wrap items-center gap-14 px-7 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="mb-5 block font-mono text-[0.8rem] text-py-blue-bright">
            {config.title} · 3+ years
          </span>

          <h1 className="max-w-[16ch] font-serif text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.12] text-text">
            I build backend systems that solve real business problems.
          </h1>

          <p className="mt-6 max-w-[46ch] text-[1.08rem] text-text-muted">
            Backend-focused engineer building scalable APIs, automation systems,
            integrations, and data-driven platforms — for CAD workflows,
            digital fulfillment, and maritime compliance.
          </p>

          <div
            className="mt-7 flex flex-wrap gap-2"
            aria-label="Core technologies"
          >
            {badges.map(b => (
              <span
                key={b}
                className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-[0.72rem] text-text-muted"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-7">
            {[
              { b: '3+', s: 'Years experience' },
              { b: '4', s: 'Production systems shipped' },
              { b: '1', s: 'Engineer → project lead' },
            ].map(stat => (
              <div
                key={stat.s}
                className="border-l-2 border-py-blue-dim pl-3"
              >
                <b className="block font-serif text-[1.5rem] text-text">
                  {stat.b}
                </b>
                <span className="font-mono text-[0.76rem] text-text-faint">
                  {stat.s}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded border border-transparent bg-py-blue px-6 py-3 font-medium text-[0.92rem] text-white transition-colors hover:bg-py-blue-bright"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded border border-line px-6 py-3 font-medium text-[0.92rem] text-text transition-colors hover:border-py-blue hover:text-py-blue-bright"
            >
              Contact me
            </a>
          </div>
        </div>

        <HeroDiagram />
      </div>
    </section>
  );
}

function HeroDiagram() {
  const steps = [
    { label: 'External Systems', accent: 'muted' as const },
    { label: 'APIs / Webhooks / Data', accent: 'muted' as const },
    { label: 'Python Backend', accent: 'py-blue' as const },
    { label: 'Databases / Queues', accent: 'muted' as const },
    { label: 'Business Logic', accent: 'muted' as const },
    { label: 'Dashboards / Automation', accent: 'py-yellow' as const },
  ];

  return (
    <div className="term-window">
      <div className="term-chrome">
        <div className="dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="title">data flow</span>
      </div>

      <div className="p-5">
        <p className="mb-4 font-mono text-[0.76rem] text-text-faint">
          How a request moves through a system I build
        </p>

        <ol className="space-y-1.5">
          {steps.map((s, i) => {
            const isBlue = s.accent === 'py-blue';
            const isYellow = s.accent === 'py-yellow';
            const borderCls = isBlue
              ? 'border-py-blue/60'
              : isYellow
              ? 'border-py-yellow/60'
              : 'border-line';
            const textCls = isBlue
              ? 'text-py-blue-bright'
              : isYellow
              ? 'text-py-yellow'
              : 'text-text-muted';

            return (
              <li key={s.label}>
                <div
                  className={`flex items-center gap-2 rounded border ${borderCls} bg-surface-2 px-3 py-2 font-mono text-[0.78rem] ${textCls}`}
                >
                  <span className="text-text-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="ml-5 text-[0.7rem] text-text-faint"
                  >
                    ↓
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-4 flex items-center gap-2 font-mono text-[0.72rem]">
          <span className="text-success">✓</span>
          <span className="text-text-faint">pipeline ready</span>
          <span className="cursor" aria-hidden />
        </div>
      </div>
    </div>
  );
}