import { principles } from '@/data/principles';

export default function Principles() {
  return (
    <section id="engineering" className="border-b border-line py-20">
      <div className="mx-auto max-w-wrap px-7">
        <div className="mb-12 max-w-[640px]">
          <span className="mb-3 block font-mono text-[0.78rem] text-text-faint">
            Engineering
          </span>
          <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)]">
            Four principles I keep coming back to
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(p => (
            <div key={p.idx} className="bg-surface p-6">
              <span className="mb-3 block font-mono text-[0.72rem] text-py-blue-bright">
                {p.idx}
              </span>
              <h3 className="mb-2.5 font-sans text-[1.02rem] font-semibold">
                {p.title}
              </h3>
              <p className="text-[0.88rem] text-text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}