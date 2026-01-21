import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import AffiliationsSection from "@/components/sections/AffiliationsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import SmoothAnchorOffset from "@/components/SmoothAnchorOffset";

const Home = () => {
  return (
    <main id="main-content">
      <SmoothAnchorOffset />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <EducationSection />
      <AffiliationsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
};

export default Home;
