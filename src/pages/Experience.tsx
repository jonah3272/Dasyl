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
        <title>{t('experience.title')} - Arturo Suman | Psicólogo Forense Panamá</title>
        <meta name="description" content={`${t('experience.title')} de Arturo Suman. Coordinador de la Unidad de Psicología Forense del Instituto de Medicina Legal de Panamá. Más de 17 años de experiencia en psicología forense en Ciudad de Panamá.`} />
        <meta name="keywords" content="Arturo Suman experiencia, psicólogo forense experiencia Panamá, Instituto Medicina Legal Panamá, psicología forense Panamá experiencia, perito psicológico Panamá, formación psicología forense Panamá" />
        <link rel="canonical" href="https://www.arturosuman.com/experiencia/" />
        <meta property="og:title" content={`${t('experience.title')} - Arturo Suman | Psicólogo Forense Panamá`} />
        <meta property="og:description" content={`Más de 17 años de experiencia en psicología forense en Panamá. Coordinador de la Unidad de Psicología Forense del Instituto de Medicina Legal.`} />
        <meta property="og:url" content="https://www.arturosuman.com/experiencia/" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:title" content={`${t('experience.title')} - Arturo Suman`} />
        <meta name="twitter:description" content={`Experiencia profesional en psicología forense en Ciudad de Panamá, Panamá.`} />
        <meta name="geo.region" content="PA-8" />
        <meta name="geo.placename" content="Ciudad de Panamá, Panamá" />
      </Helmet>
      <div className="page page--experience">
        <ExperienceSection withId={false} />
        <EducationSection withId={false} />
        <AffiliationsSection withId={false} />
      </div>
    </main>
  );
}
