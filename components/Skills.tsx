import { skillGroups } from '@/data/skills';

export default function Skills() {
  return (
    <section className="border-b border-line py-20">
      <div className="mx-auto max-w-wrap px-7">
        <div className="mb-12 max-w-[640px]">
          <span className="mb-3 block font-mono text-[0.78rem] text-text-faint">
            Technical Stack
          </span>
          <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)]">
            Tools, grouped by what they&apos;re for
          </h2>
        </div>

        <div className="term-window">
          <div className="term-chrome">
            <div className="dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <span className="title">Technical Stack</span>
          </div>

          <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(group => (
              <div key={group.title} className="bg-surface p-6">
                <h4 className="mb-4 font-mono text-[0.75rem] text-py-blue-bright">
                  {group.title}
                </h4>
                <ul className="grid gap-2">
                  {group.items.map(item => (
                    <li
                      key={item}
                      className="border-b border-line pb-2 text-[0.9rem] text-text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}