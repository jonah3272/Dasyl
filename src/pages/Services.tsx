import { Helmet } from "react-helmet-async";
import ServicesSection from "@/components/sections/ServicesSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <main>
      <Helmet>
        <title>{t('services.title')} - Arturo Suman | Psicólogo Forense Panamá</title>
        <meta name="description" content="Servicios de psicología forense en Panamá – Psilegconsultants. Evaluación psicológica forense, metaperitaje y testimonio experto. Arturo Suman, Century Tower, Ciudad de Panamá. Contacto: psic.suman@gmail.com, (507) 65509216." />
        <meta name="keywords" content="evaluación psicológica forense Panamá, peritaje psicológico Ciudad de Panamá, metaperitaje psicológico Panamá, testimonio experto Panamá, Psilegconsultants, psicólogo forense servicios Panamá, evaluación penitenciaria Panamá" />
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
