import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/sections/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <main>
      <Helmet>
        <title>{t('contact.title')} - Arturo Suman | Psicólogo Forense Panamá</title>
        <meta name="description" content={`${t('contact.subtitle')} Consultorio en Century Tower, Piso 19, Oficina 1920, Ciudad de Panamá. Email: psic.suman@gmail.com`} />
        <meta name="keywords" content="contactar psicólogo forense Panamá, consulta psicología forense Ciudad de Panamá, Arturo Suman contacto, perito psicológico Panamá contacto, evaluación psicológica forense Panamá" />
        <link rel="canonical" href="https://arturosuman.com/contacto/" />
        <meta property="og:title" content={`${t('contact.title')} - Arturo Suman | Psicólogo Forense Panamá`} />
        <meta property="og:description" content={`Contacte a Arturo Suman para consultas profesionales en psicología forense. Consultorio en Ciudad de Panamá, Panamá.`} />
        <meta property="og:url" content="https://arturosuman.com/contacto/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={`${t('contact.title')} - Arturo Suman`} />
        <meta name="twitter:description" content={`Contacte para consultas en psicología forense en Ciudad de Panamá, Panamá.`} />
        <meta name="geo.region" content="PA-8" />
        <meta name="geo.placename" content="Ciudad de Panamá, Panamá" />
      </Helmet>
      <div className="page page--contact">
        <ContactSection withId={false} />
      </div>
    </main>
  );
}
