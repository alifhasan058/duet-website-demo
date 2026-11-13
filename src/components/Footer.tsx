import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F2040] text-slate-300">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Summary */}
          <div className="md:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="11" cy="14" r="8" fill="#0D9488" />
                <circle cx="18" cy="14" r="8" stroke="#FFFFFF" strokeWidth="2.25" />
              </svg>
              <span>Duet</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 max-w-sm">
              America’s largest network of nurse practitioner-owned primary care practices: 130+ clinics across 21 states caring for ~150,000 patients.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Why NP-Owned
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-white transition-colors">
                  National Network
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Clinical Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Clinic Stories
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-white transition-colors">
                  Join as a Clinic
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-teal-400 shrink-0" aria-hidden="true" />
                <a
                  href="mailto:hello@duetprimarycare.example"
                  className="hover:text-white transition-colors"
                >
                  hello@duetprimarycare.example
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-teal-400 shrink-0" aria-hidden="true" />
                <a
                  href="tel:+18005550194"
                  className="hover:text-white transition-colors tabular-nums"
                >
                  (800) 555-0194
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>National Practice Support · 21 US States</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Required Concept Demo Credits & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            Concept website demo prepared by Alif Hasan - Logo, Branding &amp; Packaging Designer -{' '}
            <a
              href="https://alifhasan.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-teal-200 underline underline-offset-2"
            >
              alifhasan.framer.website
            </a>
          </p>
          <p className="whitespace-nowrap">Concept demo only · Not the official Duet website</p>
        </div>
      </div>
    </footer>
  );
}
