import { HeartHandshake, Building2, Radar } from 'lucide-react';
import { SafeImage } from './SafeImage';

const PILLARS = [
  {
    title: 'Care that listens',
    description:
      'Nurse practitioners bring holistic, relationship-first medicine to every exam room—giving patients unhurried time, clear answers, and a clinician who knows their history.',
    icon: HeartHandshake,
  },
  {
    title: 'Clinics owned by the nurses who run them',
    description:
      'Every Duet practice is majority-owned by its lead Nurse Practitioner. Clinicians keep control of patient care and clinic culture while Duet supports credentialing, payer contracts, and operations.',
    icon: Building2,
  },
  {
    title: 'AI that finds patients lost to care',
    description:
      'Quiet, clinician-guided AI scans longitudinal charts for missed screenings, lapsed prescriptions, and overdue chronic follow-ups—helping local teams bring neighbors back before emergencies occur.',
    icon: Radar,
  },
];

export function WhyNpOwned() {
  return (
    <section id="about" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-y border-slate-200/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0D9488] tracking-tight">
            Why NP-owned care
          </p>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F2040] text-balance">
            Healthcare works better when the clinicians in the room own the practice.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Community primary care shouldn’t feel rushed or corporate. Duet pairs local nurse ownership with modern clinical intelligence.
          </p>
        </div>

        {/* 3 Core Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="duet-card duet-card-hover bg-white p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#0D9488]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#0F2040] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Architectural Practice Showcase */}
        <div className="mt-12 duet-card bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 min-h-[240px] sm:min-h-[320px] bg-slate-100">
            <SafeImage
              src="/src/assets/images/clinic_team_care_1794575648462.jpg"
              alt="Sunlit modern reception and care lounge at a Duet nurse-owned primary care practice"
              className="h-full w-full object-cover"
              fallbackLabel="Modern Nurse-Owned Clinic Space"
            />
          </div>
          <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-center">
            <p className="text-xs font-semibold text-[#0D9488] tracking-wide">
              Built for community continuity
            </p>
            <h3 className="mt-2.5 text-2xl font-bold tracking-tight text-[#0F2040] leading-snug text-balance">
              Rooted in neighborhoods, connected across 21 states.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              When nurses lead their own clinics, practices stay anchored to local families—offering same-week access, culturally fluent care, and long-term preventive relationships without assembly-line quotas.
            </p>
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-4 text-sm text-slate-600">
              <span className="font-semibold text-[#0F2040]">100% clinician-led care</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Shared national clinical support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
