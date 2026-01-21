import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/sections/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <main>
      <Helmet>
        <title>{t('contact.title')} - Arturo Suman</title>
        <meta name="description" content={t('contact.subtitle')} />
        <link rel="canonical" href="https://arturosuman.com/contact/" />
      </Helmet>
      <div className="page page--contact">
        <ContactSection withId={false} />
      </div>
    </main>
  );
}
