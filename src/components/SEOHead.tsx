import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  type?: string;
}

const SEOHead = ({ 
  title = "Arturo Suman | Psicólogo Forense y Clínico en Ciudad de Panamá, Panamá | Evaluación Psicológica Forense",
  description = "Arturo Suman, psicólogo forense y clínico en Ciudad de Panamá, Panamá. Más de 17 años de experiencia, más de 4,000 evaluaciones psicológicas forenses. Consultoría especializada en Psicología Forense y Clínica. Consultorio en Century Tower.",
  keywords = "psicólogo forense Panamá, psicólogo forense Ciudad de Panamá, psicólogo clínico Panamá, evaluación psicológica forense Panamá, peritaje psicológico Panamá, psicología forense Ciudad de Panamá, Arturo Suman, metaperitaje psicológico Panamá, testimonio experto Panamá, perito psicológico Ciudad de Panamá",
  canonicalUrl = "https://arturosuman.com",
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
          "name": "Arturo Suman",
          "description": "Psicólogo forense y clínico en Ciudad de Panamá, Panamá, con más de 17 años de experiencia en Psicología Forense. Más de 4,000 evaluaciones psicológicas forenses realizadas.",
          "url": canonicalUrl,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ciudad de Panamá",
            "addressRegion": "Panamá",
            "addressCountry": "PA",
            "streetAddress": "Century Tower, Piso 19, Oficina 1920"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Ciudad de Panamá"
            },
            {
              "@type": "Country", 
              "name": "Panamá"
            }
          ],
          "serviceType": [
            "Evaluación Psicológica Forense",
            "Metaperitaje Psicológico",
            "Testimonio Experto",
            "Psicología Forense",
            "Psicología Clínica"
          ],
          "hasCredential": "Psicólogo Clínico y Perito Idóneo",
          "medicalSpecialty": "Psicología Forense y Clínica",
          "availableService": [
            {
              "@type": "MedicalTherapy",
              "name": "Evaluación Psicológica Forense"
            },
            {
              "@type": "MedicalTherapy", 
              "name": "Metaperitaje Psicológico"
            },
            {
              "@type": "MedicalTherapy",
              "name": "Testimonio Experto" 
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
