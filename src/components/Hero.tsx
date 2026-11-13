import { ArrowRight, MapPin } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onJoinClick: () => void;
  onFindClinic: () => void;
}

export function Hero({ onJoinClick, onFindClinic }: HeroProps) {
  return (
    <section id="top" className="bg-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Core Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-semibold text-[#0D9488] tracking-tight mb-4">
              America’s largest network of nurse-owned primary care
            </p>

            <h1
              className="text-[#0F2040] font-bold tracking-[-0.025em] leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4.1vw, 3.5rem)' }}
            >
              Primary care, owned by nurses. Powered by Duet.
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-[1.65] text-slate-600 max-w-xl">
              Independent neighborhood practices owned and led by Nurse Practitioners—backed by shared clinical operations and thoughtful AI that helps find patients lost to care before small concerns turn urgent.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onJoinClick}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D9488] px-6 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-[#0B7F74] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-[0_6px_20px_-4px_rgba(13,148,136,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]"
              >
                <span>Join as a clinic</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onFindClinic}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-[#0F2040] hover:border-slate-300 hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2040]"
              >
                <MapPin className="h-4 w-4 text-[#0D9488]" aria-hidden="true" />
                <span>Find a clinic</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 tabular-nums">
              <span className="font-semibold text-[#0F2040]">130+ NP-owned clinics</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-[#0F2040]">21 states</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-[#0F2040]">~150,000 patients</span>
            </div>
          </div>

          {/* Right Column: Warm Editorial Healthcare Photography */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] rounded-[16px] overflow-hidden shadow-[0_18px_45px_-15px_rgba(15,32,64,0.16)] bg-slate-100">
              <SafeImage
                src="/src/assets/images/hero_np_clinic_1794575647215.jpg"
                alt="A nurse practitioner listening attentively to a patient inside a bright Duet partner primary care clinic"
                className="h-full w-full object-cover"
                fallbackLabel="Nurse-Owned Neighborhood Primary Care"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
