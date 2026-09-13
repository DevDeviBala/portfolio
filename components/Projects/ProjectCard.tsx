'use client';

import { useState } from 'react';
import type { Project } from '@/data/projects';
import FlowDiagram from './FlowDiagram';
import CaseStudyTabs from './CaseStudyTabs';
import ComplianceSelector from '../ComplianceSelector';
// import IllustrativeDashboard from '../IllustrativeDashboard';

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="mb-5 overflow-hidden rounded-md border border-line bg-surface">
      <button
        aria-expanded={open}
        aria-controls={`body-${project.id}`}
        onClick={() => setOpen(v => !v)}
        className="grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-start gap-5 bg-transparent px-6 py-6 text-left"
      >
        <span className="pt-1 font-mono text-[0.8rem] text-text-faint">
          {project.num}
        </span>

        <span className="min-w-0">
          <span className="mb-2 block font-mono text-[0.72rem] text-py-blue-bright">
            {project.category}
          </span>

          <span
            className="mb-2 block font-serif text-[1.4rem] leading-tight"
            dangerouslySetInnerHTML={{ __html: project.title }}
          />

          <span className="block max-w-[62ch] text-[0.94rem] text-text-muted">
            {project.description}
          </span>
        </span>

        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded border font-mono text-[0.85rem] transition-all duration-200 ${
            open
              ? 'rotate-90 border-py-blue text-py-blue-bright'
              : 'border-line text-text-faint'
          }`}
          aria-hidden
        >
          ▸
        </span>
      </button>

      <div
        id={`body-${project.id}`}
        className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? 'max-h-[8000px]' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-8">
          {project.impact.length > 0 && (
            <div className="mb-6 rounded border border-line bg-surface-2 p-5">
              <div className="mb-3 font-mono text-[0.72rem] text-text-faint">
                Impact
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.impact.map(it => (
                  <div
                    key={it.label}
                    className="border-l-2 border-py-blue pl-3"
                  >
                    <b className="block font-serif text-[1.15rem] text-py-yellow">
                      {it.value}
                    </b>
                    <span className="text-[0.8rem] text-text-muted">
                      {it.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <FlowDiagram nodes={project.diagram.nodes} idPrefix={project.id} />
          <p className="mb-6 mt-2.5 font-mono text-[0.72rem] text-text-faint">
            {project.diagram.caption}
          </p>

          <CaseStudyTabs tabs={project.tabs} />

          <div className="mt-5 rounded-r border-l-2 border-py-blue bg-surface-2 px-4 py-3 text-[0.92rem] text-text-muted">
            <span className="font-semibold text-py-yellow">My role:</span>{' '}
            {project.roleNote}
          </div>

          {project.extras && (
            <>
              <ComplianceSelector />
              {/* <IllustrativeDashboard /> */}
            </>
          )}
        </div>
      </div>
    </article>
  );
}