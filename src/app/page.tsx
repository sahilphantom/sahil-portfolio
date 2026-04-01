
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AiPersonalizationSection, ContactSection, AboutSection, ProjectsSection,
SkillsSection, MarqueeSection, HeroSection } from "@/components/sections";
import TechStackSection from "@/components/sections/TechstackSection";


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <SkillsSection />
      <TechStackSection />
      <AiPersonalizationSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
