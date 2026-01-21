import { Helmet } from "react-helmet-async";
import ServicesSection from "@/components/sections/ServicesSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <main>
      <Helmet>
        <title>{t('services.title')} - Arturo Suman</title>
        <meta name="description" content={t('services.forensic.description')} />
        <link rel="canonical" href="https://arturosuman.com/services/" />
      </Helmet>
      <div className="page page--services">
        <ServicesSection withId={false} />
      </div>
    </main>
  );
}
