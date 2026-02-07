import { Helmet } from "react-helmet-async";
import PricingSection from "@/components/sections/PricingSection";

export default function Pricing() {
  return (
    <main>
      <Helmet>
        <title>Therapy pricing | Sliding scale and superbills | Psilegconsultants</title>
        <meta name="description" content="Session rates, sliding scale, and out of network superbills. Transparent pricing for services in Panama City, Panama." />
        <link rel="canonical" href="https://resilientmindcounseling.info/pricing/" />
      </Helmet>
      <div className="page page--pricing">
        <PricingSection withId={false} />
      </div>
    </main>
  );
}