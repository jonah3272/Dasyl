import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  type?: string;
}

const SEOHead = ({ 
  title = "Psilegconsultants | Professional Services in Panama City, Panama",
  description = "Professional services in Panama City, Panama. Expert support for anxiety, depression, trauma, and relationships.",
  keywords = "Panama City therapy, Panama counseling, anxiety help Panama, depression therapy Panama, professional services Panama City",
  canonicalUrl = "https://resilientmindcounseling.info",
  type = "website"
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Additional accessibility and SEO meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="theme-color" content="#3B82F6" />
      
      {/* Structured data for local business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Psilegconsultants",
          "description": "Professional services in Panama City, Panama",
          "url": canonicalUrl,
          "areaServed": [
            {
              "@type": "City",
              "name": "Panama City"
            },
            {
              "@type": "Country", 
              "name": "Panama"
            }
          ],
          "serviceType": [
            "Virtual Therapy",
            "Online Counseling", 
            "Anxiety Treatment",
            "Depression Therapy",
            "Trauma Therapy",
            "Relationship Counseling"
          ],
          "hasCredential": "Licensed Professional",
          "medicalSpecialty": "Mental Health",
          "availableService": [
            {
              "@type": "MedicalTherapy",
              "name": "Cognitive Behavioral Therapy"
            },
            {
              "@type": "MedicalTherapy", 
              "name": "Dialectical Behavior Therapy"
            },
            {
              "@type": "MedicalTherapy",
              "name": "Mindfulness-Based Therapy" 
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;