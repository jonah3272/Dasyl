import { Helmet } from "react-helmet-async";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";

export default function Specialties() {
  return (
    <main>
      <Helmet>
        <title>Therapy specialties | Psilegconsultants | Panama City, Panama</title>
        <meta name="description" content="Anxiety therapy, trauma therapy, and couples counseling. Serving Panama City, Panama." />
        <link rel="canonical" href="https://resilientmindcounseling.info/specialties/" />
      </Helmet>
      <div className="page page--specialties">
        <SpecialtiesSection withId={false} />
      </div>
    </main>
  );
}