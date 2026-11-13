import { useMemo, useState } from 'react';
import { MapPin, Search, UserCheck, ArrowUpRight } from 'lucide-react';
import {
  NETWORK_STATES,
  US_TILE_MAP,
  type RegionName,
  type NetworkState,
} from '../data/duetData';

const REGIONS: RegionName[] = ['All', 'Northeast', 'Midwest', 'South', 'West'];

interface NetworkSectionProps {
  onApplyWithState: (stateName: string) => void;
}

export function NetworkSection({ onApplyWithState }: NetworkSectionProps) {
  const [selectedRegion, setSelectedRegion] = useState<RegionName>('All');
  const [selectedCode, setSelectedCode] = useState<string>('OH');
  const [query, setQuery] = useState('');

  const stateByCode = useMemo(() => {
    const map = new Map<string, NetworkState>();
    for (const s of NETWORK_STATES) {
      map.set(s.code, s);
    }
    return map;
  }, []);

  const filteredStates = useMemo(() => {
    const q = query.trim().toLowerCase();
    return NETWORK_STATES.filter((st) => {
      const regionMatch = selectedRegion === 'All' || st.region === selectedRegion;
      if (!regionMatch) return false;
      if (!q) return true;
      return (
        st.name.toLowerCase().includes(q) ||
        st.code.toLowerCase().includes(q) ||
        st.clinics.some(
          (c) =>
            c.city.toLowerCase().includes(q) ||
            c.name.toLowerCase().includes(q) ||
            c.leadNp.toLowerCase().includes(q)
        )
      );
    });
  }, [selectedRegion, query]);

  const activeState = useMemo(() => {
    const match = stateByCode.get(selectedCode);
    if (match && filteredStates.some((s) => s.code === match.code)) {
      return match;
    }
    return filteredStates[0] ?? NETWORK_STATES[0];
  }, [selectedCode, filteredStates, stateByCode]);

  const handleRegionChange = (region: RegionName) => {
    setSelectedRegion(region);
    const firstInRegion = NETWORK_STATES.find(
      (s) => region === 'All' || s.region === region
    );
    if (firstInRegion) {
      setSelectedCode(firstInRegion.code);
    }
  };

  return (
    <section id="network" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0D9488] tracking-tight">
              Our national footprint
            </p>
            <h2 className="mt-2.5 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F2040] text-balance">
              130+ nurse-owned clinics across 21 states.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore where Duet partner practices care for families today, or filter by state to locate a neighborhood clinic.
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          <div className="duet-card bg-[#F8FAFC] p-6 sm:p-8 border border-slate-200/70">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F2040] tabular-nums">
              130+
            </div>
            <div className="mt-1.5 text-base font-semibold text-[#0D9488]">
              Clinics nationwide
            </div>
            <p className="mt-1 text-sm text-slate-600">
              Independent primary care practices led by nurse practitioners
            </p>
          </div>

          <div className="duet-card bg-[#F8FAFC] p-6 sm:p-8 border border-slate-200/70">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F2040] tabular-nums">
              21
            </div>
            <div className="mt-1.5 text-base font-semibold text-[#0D9488]">
              US states
            </div>
            <p className="mt-1 text-sm text-slate-600">
              Spanning rural towns, mid-sized cities, and metro neighborhoods
            </p>
          </div>

          <div className="duet-card bg-[#F8FAFC] p-6 sm:p-8 border border-slate-200/70">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F2040] tabular-nums">
              ~150,000
            </div>
            <div className="mt-1.5 text-base font-semibold text-[#0D9488]">
              Patients served
            </div>
            <p className="mt-1 text-sm text-slate-600">
              Active preventive, primary, and chronic care relationships
            </p>
          </div>
        </div>

        {/* Interactive Map + State Directory */}
        <div className="mt-10 duet-card bg-white border border-slate-200/80 p-5 sm:p-8">
          {/* Controls Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div
              role="tablist"
              aria-label="Filter states by US region"
              className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-fit"
            >
              {REGIONS.map((region) => {
                const isActive = selectedRegion === region;
                return (
                  <button
                    key={region}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleRegionChange(region)}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#0F2040] shadow-xs'
                        : 'text-slate-600 hover:text-[#0F2040]'
                    }`}
                  >
                    {region === 'All' ? 'All 21 states' : region}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-72">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search state, city, or clinic..."
                aria-label="Search state, city, or clinic"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 py-2 text-sm text-[#0F2040] placeholder:text-slate-400 focus:border-[#0D9488] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
              />
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive 50-State Cartogram + Selectable State Chips */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-[#0F2040]">
                  Interactive network map
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-[4px] bg-[#0D9488]" aria-hidden="true" />
                    Duet state (21)
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-[4px] bg-[#0F2040]" aria-hidden="true" />
                    Selected
                  </span>
                </div>
              </div>

              {/* US Geographic Tile Grid */}
              <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/70 p-3 sm:p-5 overflow-x-auto">
                <div
                  className="grid gap-1 sm:gap-1.5 min-w-[440px]"
                  style={{
                    gridTemplateColumns: 'repeat(11, minmax(0, 1fr))',
                    gridTemplateRows: 'repeat(8, minmax(0, 1fr))',
                  }}
                >
                  {US_TILE_MAP.map((tile) => {
                    const networkState = stateByCode.get(tile.code);
                    const isNetwork = Boolean(networkState);
                    const isVisibleInFilter =
                      networkState &&
                      filteredStates.some((s) => s.code === networkState.code);
                    const isSelected = activeState?.code === tile.code;

                    return (
                      <button
                        key={tile.code}
                        type="button"
                        disabled={!isNetwork}
                        onClick={() => {
                          if (networkState) {
                            setSelectedCode(networkState.code);
                          }
                        }}
                        title={
                          networkState
                            ? `${networkState.name} — ${networkState.clinicCount} clinics`
                            : `${tile.code} — Expanding soon`
                        }
                        style={{
                          gridColumnStart: tile.col,
                          gridRowStart: tile.row,
                        }}
                        className={`aspect-square rounded-lg text-[11px] sm:text-xs font-semibold flex items-center justify-center transition-all select-none ${
                          isSelected
                            ? 'bg-[#0F2040] text-white ring-2 ring-[#0D9488] ring-offset-1 cursor-pointer scale-105'
                            : isNetwork && isVisibleInFilter
                            ? 'bg-[#0D9488] text-white hover:bg-[#0B7F74] cursor-pointer shadow-xs'
                            : isNetwork
                            ? 'bg-teal-100 text-teal-800 hover:bg-teal-200 cursor-pointer'
                            : 'bg-slate-200/70 text-slate-400 cursor-default'
                        }`}
                      >
                        {tile.code}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick State List for direct tap */}
              <div className="mt-5">
                <p className="text-xs font-medium text-slate-500 mb-2.5">
                  Active Duet states ({filteredStates.length} shown):
                </p>
                {filteredStates.length === 0 ? (
                  <p className="text-sm text-slate-500 py-2">
                    No matching states or clinics found for "{query}".{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setQuery('');
                        setSelectedRegion('All');
                      }}
                      className="text-[#0D9488] font-medium underline cursor-pointer"
                    >
                      Reset filters
                    </button>
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {filteredStates.map((st) => {
                      const active = activeState?.code === st.code;
                      return (
                        <button
                          key={st.code}
                          type="button"
                          onClick={() => setSelectedCode(st.code)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            active
                              ? 'bg-[#0F2040] text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                          }`}
                        >
                          {st.name} · {st.clinicCount}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Selected State Clinics Panel */}
            <div className="lg:col-span-5">
              {activeState && (
                <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200/80 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-[#0D9488]">
                        {activeState.region} Network
                      </p>
                      <h3 className="mt-1 text-2xl font-bold text-[#0F2040] tracking-tight">
                        {activeState.name}
                      </h3>
                    </div>
                    <div className="text-right tabular-nums">
                      <div className="text-lg font-bold text-[#0F2040]">
                        {activeState.clinicCount} clinics
                      </div>
                      <div className="text-xs text-slate-500">
                        ~{activeState.patientsApprox} patients
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-5 border-t border-slate-200/80 space-y-3.5">
                    <p className="text-xs font-medium text-slate-500">
                      Featured NP-owned practices in {activeState.name}
                    </p>
                    {activeState.clinics.map((clinic) => (
                      <div
                        key={clinic.name}
                        className="rounded-xl bg-white p-4 border border-slate-200/70"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-sm text-[#0F2040]">
                            {clinic.name}
                          </h4>
                          <span className="inline-flex items-center gap-1 text-xs text-slate-500 whitespace-nowrap shrink-0">
                            <MapPin className="h-3.5 w-3.5 text-[#0D9488]" aria-hidden="true" />
                            {clinic.city}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-600">
                          <UserCheck className="h-3.5 w-3.5 text-[#0D9488] shrink-0" aria-hidden="true" />
                          <span>Owner: {clinic.leadNp}</span>
                        </div>
                        <p className="mt-1.5 text-xs text-slate-500">
                          {clinic.focus}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <p className="text-xs text-slate-600">
                      Own or launching a clinic in {activeState.name}?
                    </p>
                    <button
                      type="button"
                      onClick={() => onApplyWithState(activeState.name)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D9488] hover:text-[#0B7F74] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Join Duet in {activeState.code}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
