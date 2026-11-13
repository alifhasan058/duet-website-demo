import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyNpOwned } from './components/WhyNpOwned';
import { NetworkSection } from './components/NetworkSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { JoinSection } from './components/JoinSection';
import { Footer } from './components/Footer';

export default function App() {
  const [preselectedState, setPreselectedState] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyWithState = (stateName: string) => {
    setPreselectedState(stateName);
    scrollToSection('join');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700">
      <Navbar
        onFindClinic={() => scrollToSection('network')}
        onJoinClick={() => scrollToSection('join')}
      />
      <main className="flex-1">
        <Hero
          onJoinClick={() => scrollToSection('join')}
          onFindClinic={() => scrollToSection('network')}
        />
        <WhyNpOwned />
        <NetworkSection onApplyWithState={handleApplyWithState} />
        <ServicesSection />
        <TestimonialsSection />
        <JoinSection preselectedState={preselectedState} />
      </main>
      <Footer />
    </div>
  );
}
