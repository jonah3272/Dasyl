import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import AffiliationsSection from "@/components/sections/AffiliationsSection";
import ContactSection from "@/components/sections/ContactSection";
import SmoothAnchorOffset from "@/components/SmoothAnchorOffset";

const Home = () => {
  return (
    <main>
      <SmoothAnchorOffset />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <EducationSection />
      <AffiliationsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
