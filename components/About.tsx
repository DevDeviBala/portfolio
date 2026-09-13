const focusAreas = [
  'Backend Engineering',
  'API Development',
  'Business Logic',
  'System Integration',
  'Automation',
  'Database Design',
  'Data Processing',
  'Dashboards',
  'Asynchronous Workflows',
];

export default function About() {
  return (
    <section id="about" className="border-b border-line py-20">
      <div className="mx-auto grid max-w-wrap gap-14 px-7 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="mb-3 block font-mono text-[0.78rem] text-text-faint">
            About
          </span>
          <h2 className="mb-6 font-serif text-[clamp(1.7rem,3.4vw,2.4rem)]">
            Backend first, full stack when the product needs it.
          </h2>

          <div className="term-window">
            <div className="term-chrome">
              <div className="dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="title">About</span>
            </div>
            <div className="space-y-4 p-6 text-[0.98rem] leading-[1.75] text-text-muted">
              <p>
                I&apos;m a Python Full Stack Engineer with 3+ years of
                professional experience building web applications and
                backend systems.
              </p>
              <p>
                My work has involved Django and REST APIs, GraphQL services,
                database-driven applications, asynchronous processing,
                third-party integrations, automation workflows, dashboards,
                and domain-specific business systems.
              </p>
              <p>
                I&apos;ve worked on systems ranging from engineering
                automation and digital commerce workflows to maritime
                emissions and regulatory compliance platforms.
              </p>
              <p>
                I&apos;ve built software both within development teams and
                independently on client-facing work — handling requirements,
                technical investigation, and delivery end to end.
              </p>
              <p>
                My strongest area is backend development, but I&apos;m
                comfortable working across the stack when a product requires
                it.
              </p>
            </div>
          </div>
        </div>

        <div>
          <span className="mb-4 block font-mono text-[0.78rem] text-text-faint">
            Focus areas
          </span>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {focusAreas.map(area => (
              <li
                key={area}
                className="border-l-2 border-line py-1.5 pl-3 font-mono text-[0.82rem] text-text-muted"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}