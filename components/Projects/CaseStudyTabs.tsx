'use client';

import { useState } from 'react';
import type { ProjectTab } from '@/data/projects';

export default function CaseStudyTabs({ tabs }: { tabs: ProjectTab[] }) {
  const [active, setActive] = useState(tabs[0]?.key);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Case study sections"
        className="mb-5 flex flex-wrap gap-1 border-b border-line"
      >
        {tabs.map(tab => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.key)}
              className={`relative -mb-px border border-b-0 px-3 py-2 text-[0.82rem] transition-colors ${
                isActive
                  ? 'rounded-t border-line bg-surface font-medium text-py-yellow'
                  : 'rounded-t border-transparent text-text-faint hover:text-text-muted'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map(tab => {
        if (tab.key !== active) return null;
        return (
          <div
            key={tab.key}
            role="tabpanel"
            className="animate-fadein"
          >
            {tab.html && (
              <div
                className="prose-portfolio"
                dangerouslySetInnerHTML={{ __html: tab.html }}
              />
            )}

            {tab.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {tab.tags.map(t => (
                  <span
                    key={t}
                    className="rounded border border-line bg-surface-2 px-2.5 py-1 font-mono text-[0.72rem] text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {tab.concepts && (
              <div className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                {tab.concepts.map(c => (
                  <div
                    key={c.title}
                    className="rounded border border-line bg-surface-2 p-4"
                  >
                    <b className="mb-1.5 block text-[0.9rem] text-py-yellow">
                      {c.title}
                    </b>
                    <span className="text-[0.85rem] text-text-muted">
                      {c.body}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}