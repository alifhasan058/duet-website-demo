import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ALL_US_STATES } from '../data/duetData';

interface JoinSectionProps {
  preselectedState?: string;
}

export function JoinSection({ preselectedState }: JoinSectionProps) {
  const [clinicName, setClinicName] = useState('');
  const [state, setState] = useState(preselectedState || '');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState<{
    clinicName: string;
    state: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedState) {
      setState(preselectedState);
    }
  }, [preselectedState]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const trimmedClinic = clinicName.trim();
    const trimmedEmail = email.trim();

    if (!trimmedClinic) {
      setError('Please enter your clinic or practice name.');
      return;
    }
    if (!state) {
      setError('Please select the state where your clinic operates.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setError('Please enter a valid work email address.');
      return;
    }

    setSubmitted({
      clinicName: trimmedClinic,
      state,
      email: trimmedEmail,
    });
  };

  return (
    <section
      id="join"
      className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-t border-slate-200/60"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Partnership Overview */}
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold text-[#0D9488] tracking-tight">
              Partner with Duet
            </p>
            <h2 className="mt-2.5 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F2040] text-balance">
              Keep owning your clinic. Let Duet carry the operational weight.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you run an established nurse-led practice or are preparing to open your doors, our network helps you stay independent, credentialed, and connected to patients who need primary care.
            </p>

            <ol className="mt-8 space-y-4">
              <li className="flex items-start gap-3.5">
                <span className="mt-0.5 text-xs font-bold text-[#0D9488] tabular-nums w-6 shrink-0">
                  01.
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#0F2040]">
                    Introductory clinician conversation
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Connect with our NP partner team to review your state practice rules and local patient demand.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="mt-0.5 text-xs font-bold text-[#0D9488] tabular-nums w-6 shrink-0">
                  02.
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#0F2040]">
                    Payer & re-engagement onboarding
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Streamline insurance contracting while activating Duet’s patient re-engagement tools for your panel.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="mt-0.5 text-xs font-bold text-[#0D9488] tabular-nums w-6 shrink-0">
                  03.
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#0F2040]">
                    Peer support across 130+ clinics
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Join a collaborative community of nurse practitioner owners across 21 states—with 100% ownership in your hands.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Right Column: Clean Join Form Card */}
          <div className="lg:col-span-6">
            <div className="duet-card bg-white p-7 sm:p-10 border border-slate-200/70">
              {submitted ? (
                <div className="py-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#0D9488]">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-[#0F2040] tracking-tight">
                    Application received
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    Thank you for introducing <span className="font-semibold text-[#0F2040]">{submitted.clinicName}</span> in{' '}
                    <span className="font-semibold text-[#0F2040]">{submitted.state}</span>. Our clinic partnerships team will follow up at{' '}
                    <span className="font-semibold text-[#0F2040]">{submitted.email}</span>.
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    Concept demo notice: No data was transmitted to an external server.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(null);
                      setClinicName('');
                      setEmail('');
                    }}
                    className="mt-6 inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-[#0F2040] hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Submit another clinic
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F2040] tracking-tight">
                      Join the Duet network
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Share your clinic details to start an NP partnership inquiry.
                    </p>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 text-sm text-rose-800"
                    >
                      {error}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="clinic-name"
                      className="block text-sm font-medium text-[#0F2040] mb-1.5"
                    >
                      Clinic name
                    </label>
                    <input
                      id="clinic-name"
                      name="clinicName"
                      type="text"
                      required
                      value={clinicName}
                      onChange={(e) => setClinicName(e.target.value)}
                      placeholder="e.g., Harborview Family Primary Care"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0F2040] placeholder:text-slate-400 focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="clinic-state"
                      className="block text-sm font-medium text-[#0F2040] mb-1.5"
                    >
                      State
                    </label>
                    <select
                      id="clinic-state"
                      name="state"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0F2040] focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                    >
                      <option value="">Select state</option>
                      {ALL_US_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="clinic-email"
                      className="block text-sm font-medium text-[#0F2040] mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="clinic-email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="owner@yourclinic.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0F2040] placeholder:text-slate-400 focus:border-[#0D9488] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D9488] px-6 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-[#0B7F74] transition-colors cursor-pointer shadow-[0_6px_20px_-4px_rgba(13,148,136,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488]"
                  >
                    <span>Apply to join</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
