import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
  return (
    <section id="work" className="border-b border-line py-20">
      <div className="mx-auto max-w-wrap px-7">
        <div className="mb-12 max-w-[640px]">
          <span className="mb-3 block font-mono text-[0.78rem] text-text-faint">
            Featured work
          </span>
          <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)]">
            Three systems, three real problems
          </h2>
          <p className="mt-3.5 text-text-muted">
            Each one below is a working system built to remove a specific,
            expensive piece of manual effort. Open a project for the full
            case study.
          </p>
        </div>

        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}