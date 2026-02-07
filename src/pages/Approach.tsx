// src/pages/Approach.tsx
import { Helmet } from "react-helmet-async";
import ApproachSection from "@/components/sections/ApproachSection";

export default function Approach() {
  return (
    <main>
      <Helmet>
        <title>Therapy approach | CBT, EMDR informed, mindfulness | Psilegconsultants</title>
        <meta
          name="description"
          content="How we work. Collaborative goals, evidence-based methods. Serving Panama City, Panama."
        />
        <link rel="canonical" href="https://resilientmindcounseling.info/approach/" />
      </Helmet>

      <div className="page page--approach">
        <ApproachSection withId={false} />
      </div>
    </main>
  );
}