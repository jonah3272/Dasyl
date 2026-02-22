import { Helmet } from "react-helmet-async";

interface OGImageProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function OGImage({ 
  title = "Arturo Suman | Psicólogo Forense y Clínico en Ciudad de Panamá, Panamá",
  description = "Psicólogo forense y clínico en Ciudad de Panamá con más de 17 años de experiencia. Más de 4,000 evaluaciones psicológicas forenses.",
  image = "/og-image.jpg"
}: OGImageProps) {
  return (
    <Helmet>
      <meta property="og:image" content={`https://www.arturosuman.com${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta name="twitter:image" content={`https://www.arturosuman.com${image}`} />
    </Helmet>
  );
}
