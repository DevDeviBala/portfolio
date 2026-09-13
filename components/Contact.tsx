import { config } from "@/lib/config";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line py-20">
      <div className="mx-auto max-w-wrap px-7">
        <div className="max-w-[720px]">
          <span className="mb-3 block font-mono text-[0.78rem] text-text-faint">
            Contact
          </span>
          <h2 className="mb-4 font-serif text-[clamp(1.7rem,3.4vw,2.4rem)]">
            Have a backend problem worth solving?
          </h2>

          <div className="term-window mb-6">
            <div className="term-chrome">
              <div className="dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="title">Get in touch</span>
            </div>
            <div className="p-6">
              <p className="max-w-[52ch] text-[0.98rem] leading-[1.75] text-text-muted">
                I&apos;m interested in backend engineering, platform
                engineering, automation, data-driven systems, and challenging
                product problems.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/5 px-3 py-1 font-mono text-[0.72rem] text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                Open to opportunities
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${config.email}`}
              className="inline-flex items-center gap-2 rounded border border-transparent bg-py-blue px-6 py-3 font-medium text-[0.92rem] text-white transition-colors hover:bg-py-blue-bright"
            >
              Email me
            </a>
            <a
              href={config.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded border border-line px-6 py-3 font-medium text-[0.92rem] text-text transition-colors hover:border-py-blue hover:text-py-blue-bright"
            >
              Resume
            </a>
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-line px-6 py-3 font-medium text-[0.92rem] text-text transition-colors hover:border-py-blue hover:text-py-blue-bright"
            >
              LinkedIn
            </a>
            <a
              href={config.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-line px-6 py-3 font-medium text-[0.92rem] text-text transition-colors hover:border-py-blue hover:text-py-blue-bright"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
