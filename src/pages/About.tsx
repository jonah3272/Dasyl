import { Helmet } from "react-helmet-async";
import AboutSection from "@/components/sections/AboutSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <main>
      <Helmet>
        <title>{t('about.title')} - Arturo Suman</title>
        <meta name="description" content={t('about.content')} />
        <link rel="canonical" href="https://arturosuman.com/about/" />
      </Helmet>
      <div className="page page--about">
        <AboutSection withId={false} />
      </div>
    </main>
  );
}
