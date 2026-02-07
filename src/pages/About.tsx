import { Helmet } from "react-helmet-async";
import AboutSection from "@/components/sections/AboutSection";

export default function About() {
  return (
    <main>
      <Helmet>
        <title>About Us | Psilegconsultants | Panama City, Panama</title>
        <meta name="description" content="Conozca a Psilegconsultants en Panama City. Práctica profesional en Century Tower. Objetivos claros y atención compasiva." />
        <meta name="keywords" content="Psilegconsultants sobre nosotros, terapia Panama City, psicólogo Panama, Century Tower" />
        <link rel="canonical" href="https://resilientmindcounseling.info/about/" />
      </Helmet>
      <div className="page page--about">
        <AboutSection withId={false} />
      </div>
    </main>
  );
}