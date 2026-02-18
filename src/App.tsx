import { Header } from './components/Header';
import { HeroSection, AspiringQuote } from './components/HeroSection';
import { WorkExperience } from './components/WorkExperience';
import { OtherProjects } from './components/OtherProjects';
import { SkillsSection } from './components/SkillsSection';
import { ChatSection } from './components/ChatSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-[#FFFF00] selection:text-black">
      <Header />
      <main>
        <HeroSection />
        <AspiringQuote />
        <WorkExperience />
        <OtherProjects />
        <SkillsSection />
        <ChatSection />
      </main>
      <Footer />
    </div>);

}