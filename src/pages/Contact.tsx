import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/sections/ContactSection";

export default function Contact() {
  return (
    <main>
      <Helmet>
        <title>Contact | Book a free consultation | Psilegconsultants</title>
        <meta name="description" content="Contact Psilegconsultants Panama City. WhatsApp (507) 655-09216, email psic.suman@gmail.com. Century Tower Piso 19. Free consultation." />
        <meta name="keywords" content="contactar Psilegconsultants, WhatsApp terapia Panama, cita Panama City, consulta psicológica Panama" />
        <link rel="canonical" href="https://resilientmindcounseling.info/contact/" />
      </Helmet>
      <div className="page page--contact">
        <ContactSection withId={false} />
      </div>
    </main>
  );
}