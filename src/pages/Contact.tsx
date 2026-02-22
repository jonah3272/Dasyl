import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/sections/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <main>
      <Helmet>
        <title>{t('contact.title')} | Arturo Suman | Psilegconsultants Panamá</title>
        <meta name="description" content="Contacto Arturo Suman – Psilegconsultants. psic.suman@gmail.com | (507) 6550-9216. Century Tower, Piso 19, Oficina 1920, Ciudad de Panamá, Panamá. Consultas en psicología forense." />
        <meta name="keywords" content="contactar psicólogo forense Panamá, Arturo Suman contacto, Psilegconsultants, psic.suman@gmail.com, 6550-9216, Century Tower psicólogo forense, consulta psicología forense Ciudad de Panamá, perito psicológico Panamá contacto" />
        <link rel="canonical" href="https://www.arturosuman.com/contacto/" />
        <meta property="og:title" content={`${t('contact.title')} | Arturo Suman – Psilegconsultants Panamá`} />
        <meta property="og:description" content="psic.suman@gmail.com | (507) 6550-9216. Psilegconsultants, Century Tower Piso 19 Oficina 1920, Ciudad de Panamá." />
        <meta property="og:url" content="https://www.arturosuman.com/contacto/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={`${t('contact.title')} | Arturo Suman – Psilegconsultants`} />
        <meta name="twitter:description" content="psic.suman@gmail.com | (507) 6550-9216. Century Tower, Ciudad de Panamá, Panamá." />
        <meta name="geo.region" content="PA-8" />
        <meta name="geo.placename" content="Ciudad de Panamá, Panamá" />
      </Helmet>
      <div className="page page--contact">
        <ContactSection withId={false} />
      </div>
    </main>
  );
}
