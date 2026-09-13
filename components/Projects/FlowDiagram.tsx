'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  nodes: string[];
  idPrefix: string;
};

export default function FlowDiagram({ nodes, idPrefix }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setAnimate(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const boxH = 40;
  const gap = 10;
  const w = 620;
  const totalH = nodes.length * boxH + (nodes.length - 1) * gap + 20;

  let y = 10;

  return (
    <div className="term-window">
      <div className="term-chrome">
        <div className="dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="title">System flow</span>
      </div>

      <div className="diagram-scroll overflow-x-auto p-5">
        <svg
          ref={ref}
          viewBox={`0 0 ${w} ${totalH}`}
          role="img"
          aria-label={`Flow diagram: ${nodes.join(' to ')}`}
          className="mx-auto block max-w-full"
        >
          <defs>
            <marker
              id={`${idPrefix}-arrow`}
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 z" fill="#5A6773" />
            </marker>
          </defs>

          {nodes.map((node, i) => {
            const isFirst = i === 0;
            const isLast = i === nodes.length - 1;

            const stroke = isLast ? '#FFD43B' : isFirst ? '#232E39' : '#232E39';
            const textFill = isLast ? '#FFD43B' : '#E6EDF3';
            const currentY = y;
            y += boxH;

            return (
              <g key={`${node}-${i}`}>
                <rect
                  x={10}
                  y={currentY}
                  width={w - 20}
                  height={boxH}
                  rx={3}
                  fill="#161E26"
                  stroke={stroke}
                />
                <text
                  x={26}
                  y={currentY + boxH / 2 + 4}
                  fontFamily="JetBrains Mono, monospace"
                  fontSize={11}
                  fill="#5A6773"
                >
                  {String(i + 1).padStart(2, '0')}
                </text>
                <text
                  x={w / 2}
                  y={currentY + boxH / 2 + 4}
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize={12}
                  fill={textFill}
                >
                  {node}
                </text>
                {!isLast && (
                  <line
                    x1={w / 2}
                    y1={currentY + boxH}
                    x2={w / 2}
                    y2={currentY + boxH + gap}
                    stroke="#5A6773"
                    strokeWidth={1.5}
                    strokeDasharray="6 5"
                    markerEnd={`url(#${idPrefix}-arrow)`}
                    style={{
                      strokeDashoffset: animate || reduceMotion ? 0 : 220,
                      transition: reduceMotion
                        ? 'none'
                        : `stroke-dashoffset 1.6s ease ${i * 0.09}s`,
                    }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        <div className="mt-4 flex items-center gap-2 font-mono text-[0.72rem]">
          <span className="text-success">✓</span>
          <span className="text-text-faint">
            {nodes.length} steps executed successfully
          </span>
        </div>
      </div>
    </div>
  );
}