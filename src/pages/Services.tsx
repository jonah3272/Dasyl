import { Helmet } from "react-helmet-async";
import ServicesSection from "@/components/sections/ServicesSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <main>
      <Helmet>
        <title>{t('services.title')} - Arturo Suman | Psicólogo Forense Panamá</title>
        <meta name="description" content={`${t('services.forensic.description')} Servicios de evaluación psicológica forense, metaperitaje psicológico y testimonio experto en Ciudad de Panamá, Panamá.`} />
        <meta name="keywords" content="evaluación psicológica forense Panamá, peritaje psicológico Ciudad de Panamá, metaperitaje psicológico Panamá, testimonio experto Panamá, psicólogo forense servicios Panamá, evaluación penitenciaria Panamá" />
        <link rel="canonical" href="https://arturosuman.com/servicios/" />
        <meta property="og:title" content={`${t('services.title')} - Arturo Suman | Psicólogo Forense Panamá`} />
        <meta property="og:description" content={`Servicios de psicología forense en Panamá: evaluación psicológica forense, metaperitaje y testimonio experto.`} />
        <meta property="og:url" content="https://arturosuman.com/servicios/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={`${t('services.title')} - Arturo Suman`} />
        <meta name="twitter:description" content={`Servicios de psicología forense en Ciudad de Panamá, Panamá.`} />
        <meta name="geo.region" content="PA-8" />
        <meta name="geo.placename" content="Ciudad de Panamá, Panamá" />
      </Helmet>
      <div className="page page--services">
        <ServicesSection withId={false} />
      </div>
    </main>
  );
}
