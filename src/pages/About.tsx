import { Helmet } from "react-helmet-async";
import AboutSection from "@/components/sections/AboutSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <main>
      <Helmet>
        <title>{t('about.title')} - Arturo Suman | Psicólogo Forense Panamá</title>
        <meta name="description" content={`${t('about.content')} Psicólogo forense en Ciudad de Panamá con más de 17 años de experiencia y más de 4,000 evaluaciones psicológicas forenses realizadas.`} />
        <meta name="keywords" content="Arturo Suman, psicólogo forense Panamá, psicólogo clínico Ciudad de Panamá, perito psicológico Panamá, evaluación psicológica forense Panamá, psicología forense Panamá" />
        <link rel="canonical" href="https://arturosuman.com/sobre-mi/" />
        <meta property="og:title" content={`${t('about.title')} - Arturo Suman | Psicólogo Forense Panamá`} />
        <meta property="og:description" content={`${t('about.content')} Más de 17 años de experiencia en Psicología Forense en Panamá.`} />
        <meta property="og:url" content="https://arturosuman.com/sobre-mi/" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:title" content={`${t('about.title')} - Arturo Suman`} />
        <meta name="twitter:description" content={`Psicólogo forense y clínico en Panamá con más de 17 años de experiencia.`} />
        <meta name="geo.region" content="PA-8" />
        <meta name="geo.placename" content="Ciudad de Panamá, Panamá" />
      </Helmet>
      <div className="page page--about">
        <AboutSection withId={false} />
      </div>
    </main>
  );
}
