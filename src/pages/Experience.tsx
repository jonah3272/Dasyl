import { Helmet } from "react-helmet-async";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import AffiliationsSection from "@/components/sections/AffiliationsSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  
  return (
    <main>
      <Helmet>
        <title>{t('experience.title')} - Arturo Suman</title>
        <meta name="description" content={t('experience.title')} />
        <link rel="canonical" href="https://arturosuman.com/experience/" />
      </Helmet>
      <div className="page page--experience">
        <ExperienceSection withId={false} />
        <EducationSection withId={false} />
        <AffiliationsSection withId={false} />
      </div>
    </main>
  );
}
