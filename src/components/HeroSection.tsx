import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home"
      className="min-h-screen relative overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image - Decorative only */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/Arturo-SMesa-de-trabajo-2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      >
        {/* Lighter gradient overlay to brighten the image */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/15"></div>
      </div>
      
      {/* Overlay for text readability - lighter to show more of background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" aria-hidden="true"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-24 lg:py-32">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Headline - White/Light text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 leading-tight">
              <span className="text-white block mb-1 drop-shadow-lg">{t('hero.title')}</span>
              <span className="text-warm-cream block font-semibold drop-shadow-lg">
                {t('hero.subtitle')}
              </span>
            </h1>
            
            {/* Description Card - Semi-transparent with white text */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 sm:p-6 border-2 border-white/20 shadow-2xl mb-5 sm:mb-6">
              <p className="text-base sm:text-lg text-white leading-relaxed drop-shadow-md">
                {t('hero.description')}
              </p>
            </div>
            
            {/* Trust Badge and CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <Badge 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-lg shadow-lg hover:bg-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                aria-label={t('experience.title')}
              >
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-warm-cream" aria-hidden="true" />
                {t('experience.title')}
              </Badge>
              
              <Button
                size="lg"
                className="bg-earth-clay hover:bg-earth-clay/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const headerOffset = 80;
                    const elementPosition = contactSection.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`${t('hero.cta')} - ${t('contact.title')}`}
              >
                {t('hero.cta')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
