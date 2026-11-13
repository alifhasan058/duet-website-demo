import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/duetData';
import { SafeImage } from './SafeImage';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0D9488] tracking-tight">
            Clinic owner perspectives
          </p>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F2040] text-balance">
            Built with the nurse practitioners leading local care.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Hear how independent NP founders across the Duet network protect clinical autonomy while reaching more neighbors.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.id}
              className="duet-card duet-card-hover bg-[#F8FAFC] border border-slate-200/70 p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <Quote className="h-6 w-6 text-[#0D9488]/60" aria-hidden="true" />
                  <span className="text-xs font-medium text-[#0D9488] tabular-nums">
                    {item.outcome}
                  </span>
                </div>

                <blockquote className="mt-5 text-[15px] leading-relaxed text-slate-700">
                  “{item.quote}”
                </blockquote>
              </div>

              <figcaption className="mt-7 pt-5 border-t border-slate-200/80 flex items-center gap-3.5">
                <div className="h-12 w-12 rounded-full overflow-hidden shrink-0 bg-slate-200">
                  <SafeImage
                    src={item.image}
                    alt={`Portrait of ${item.name}, ${item.role} at ${item.clinic}`}
                    className="h-full w-full object-cover"
                    fallbackLabel={item.name}
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-[#0F2040] truncate">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 truncate">
                    {item.clinic} · {item.location}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
