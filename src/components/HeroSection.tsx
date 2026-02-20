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
      {/* Background Image - Centered */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundImage: `url('/Arturo-SMesa-de-trabajo-2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: '60% center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      >
        {/* Lighter gradient overlay to brighten the image */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/15"></div>
      </div>
      
      {/* Overlay for text readability - darker on mobile for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 sm:from-black/50 sm:via-black/30 sm:to-black/10" aria-hidden="true"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Headline - Responsive sizing */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">
              <span className="text-white block mb-1 drop-shadow-lg">{t('hero.title')}</span>
              <span className="text-warm-cream block font-semibold drop-shadow-lg text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                {t('hero.subtitle')}
              </span>
            </h1>
            
            {/* Description Card - Responsive padding */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border-2 border-white/20 shadow-2xl mb-4 sm:mb-5 md:mb-6">
              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed drop-shadow-md">
                {t('hero.description')}
              </p>
              <p className="text-sm text-white/90 mt-3 font-medium drop-shadow-md" aria-hidden="true">
                {t('hero.location')}
              </p>
            </div>
            
            {/* Trust Badge and CTA - Stack on mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Badge 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg shadow-lg hover:bg-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 justify-center sm:justify-start"
                aria-label={t('experience.title')}
              >
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-warm-cream flex-shrink-0" aria-hidden="true" />
                <span className="text-center sm:text-left">{t('experience.title')}</span>
              </Badge>
              
              <Button
                size="lg"
                className="bg-earth-clay hover:bg-earth-clay/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 w-full sm:w-auto"
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
