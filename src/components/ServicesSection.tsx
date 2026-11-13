import { Stethoscope, ShieldCheck, Activity, RefreshCw } from 'lucide-react';

const SERVICES = [
  {
    number: '01.',
    title: 'Primary care',
    description:
      'Accessible everyday medicine for individuals and families—same-week sick visits, annual physicals, acute concerns, and seamless specialist coordination.',
    highlight: 'Same-week appointments & continuity with your dedicated NP',
    icon: Stethoscope,
  },
  {
    number: '02.',
    title: 'Preventive care',
    description:
      'Early detection built into every relationship: routine lab panels, cancer screenings, adult & pediatric immunizations, and cardiometabolic risk reviews.',
    highlight: 'Proactive wellness roadmaps personalized by age and history',
    icon: ShieldCheck,
  },
  {
    number: '03.',
    title: 'Chronic care',
    description:
      'Steady, structured support for diabetes, hypertension, asthma, thyroid health, and heart conditions—combining clinical rigor with practical daily habits.',
    highlight: 'Ongoing medication tuning and clear between-visit check-ins',
    icon: Activity,
  },
  {
    number: '04.',
    title: 'Patient re-engagement',
    description:
      'AI-assisted outreach identifies patients who drifted away from care due to missed appointments, overdue A1C checks, or lapsed refills—helping clinics reconnect warmly.',
    highlight: 'Finds patients lost to care before preventable complications arise',
    icon: RefreshCw,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-y border-slate-200/60">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0D9488] tracking-tight">
            Clinical services
          </p>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F2040] text-balance">
            Comprehensive neighborhood care, built for long-term health.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every clinic in the Duet network delivers full-spectrum primary care supported by intelligent re-engagement tools.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="duet-card duet-card-hover bg-white p-7 sm:p-9 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#0D9488]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold text-slate-400 tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight text-[#0F2040]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 text-xs sm:text-sm font-medium text-[#0D9488]">
                  {service.highlight}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
