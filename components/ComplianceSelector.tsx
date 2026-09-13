'use client';

import { useState } from 'react';

const modules = [
  { key: 'EU ETS', body: "EU Emissions Trading System — compliance calculations for vessel emissions falling under the EU's carbon trading scheme." },
  { key: 'FuelEU', body: 'FuelEU Maritime — tracks the greenhouse-gas intensity of fuel used on board against required limits.' },
  { key: 'EU MRV', body: 'EU Monitoring, Reporting and Verification — CO₂ emissions reporting for voyages calling at EU ports.' },
  { key: 'UK MRV', body: "The UK's equivalent monitoring, reporting, and verification scheme for vessel emissions." },
  { key: 'IMO / DCS', body: 'IMO Data Collection System — global fuel-consumption reporting requirements set by the International Maritime Organization.' },
  { key: 'CII', body: "Carbon Intensity Indicator — rates a vessel's operational carbon efficiency on an annual basis." },
  { key: 'UK ETS', body: "UK Emissions Trading Scheme — the UK's domestic carbon-trading compliance calculations for shipping." },
];

export default function ComplianceSelector() {
  const [active, setActive] = useState(modules[0]);

  return (
    <div className="mt-8">
      <h4 className="mb-3.5 text-[0.9rem] font-semibold text-text">
        Compliance modules
      </h4>

      <div className="mb-4 flex flex-wrap gap-2">
        {modules.map(m => {
          const isActive = m.key === active.key;
          return (
            <button
              key={m.key}
              onClick={() => setActive(m)}
              className={`rounded border px-3 py-1.5 font-mono text-[0.74rem] transition-colors ${
                isActive
                  ? 'border-py-blue bg-py-blue-dim text-py-yellow'
                  : 'border-line text-text-muted hover:border-py-blue-dim'
              }`}
            >
              {m.key}
            </button>
          );
        })}
      </div>

      <div className="rounded border border-line bg-surface-2 p-5">
        <h4 className="mb-2 text-[0.9rem] font-semibold text-py-yellow">
          {active.key}
        </h4>
        <p className="text-text-muted">{active.body}</p>
      </div>
    </div>
  );
}