'use client';

import { useState } from 'react';
import { config } from '@/lib/config';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#engineering', label: 'Engineering' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-wrap items-center justify-between px-7">
        <a
          href="#top"
          className="font-serif text-[1.05rem] text-text no-underline"
          aria-label="Home"
        >
          Devi Bala
        </a>

        <button
          className="rounded border border-line px-2.5 py-1 text-sm text-text md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? '×' : '☰'}
        </button>

        <ul
          className={`fixed left-0 right-0 top-16 flex flex-col items-start gap-0 border-b border-line bg-surface px-5 pb-4 pt-1.5 transition-all duration-200 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-none md:bg-transparent md:p-0 ${
            open
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100'
          }`}
        >
          {links.map(link => (
            <li key={link.href} className="w-full md:w-auto">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex w-full items-center gap-1.5 border-b border-line py-3 text-[0.94rem] text-text-muted transition-colors hover:text-text md:inline-flex md:border-none md:py-0"
              >
                <span className="text-text-faint transition-colors group-hover:text-py-blue-bright">
                  ›
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <span className="hidden items-center gap-2 rounded-full border border-success/30 bg-success/5 px-3 py-[5px] font-mono text-[0.72rem] text-success md:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          Open to opportunities
        </span>
      </div>
    </header>
  );
}