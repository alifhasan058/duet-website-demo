import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onFindClinic: () => void;
  onJoinClick: () => void;
}

const NAV_LINKS = [
  { label: 'Why NP-Owned', href: '#about' },
  { label: 'Network', href: '#network' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Join', href: '#join' },
];

export function Navbar({ onFindClinic, onJoinClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200/80">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#0F2040] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D9488] rounded"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <circle cx="11" cy="14" r="8" fill="#0D9488" fillOpacity="0.9" />
            <circle cx="18" cy="14" r="8" stroke="#0F2040" strokeWidth="2.25" />
          </svg>
          <span>Duet</span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-[#0F2040] transition-colors whitespace-nowrap shrink-0 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D9488] rounded"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onFindClinic}
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#0D9488] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0B7F74] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]"
          >
            Find a clinic
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#0F2040] hover:bg-slate-100 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2">
          <nav aria-label="Mobile" className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0F2040] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onFindClinic();
              }}
              className="w-full rounded-xl bg-[#0D9488] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0B7F74] transition-colors cursor-pointer"
            >
              Find a clinic
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onJoinClick();
              }}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-[#0F2040] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Join as a clinic
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
