import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const onHome = pathname === "/";

  const navItems = [
    { name: t("nav.about"), href: "/sobre-mi", englishHref: "/about" },
    { name: t("nav.services"), href: "/servicios", englishHref: "/services" },
    { name: t("nav.experience"), href: "/experiencia", englishHref: "/experience" }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (onHome) {
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
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 py-3 sm:py-4 bg-cozy-brown backdrop-blur-md border-b border-cozy-brown/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src="/Arturo-Suman_0001_Isotipo-blanco.png" 
              alt="Arturo Suman – Psilegconsultants, psicólogo forense Panamá"
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-white truncate">
              <span className="hidden sm:inline">Arturo Suman</span>
              <span className="sm:hidden">A. Suman</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleNavClick}
                className={`font-medium px-3 py-2 rounded-md transition-all duration-500 nav-link text-sm lg:text-base transform hover:scale-105 hover:-translate-y-0.5 ${
                  pathname === item.href || pathname === item.englishHref
                    ? 'text-white bg-white/20 shadow-lg' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {onHome ? (
              <Button 
                onClick={handleContactClick}
              >
                {t("nav.book")}
              </Button>
            ) : (
              <Link to="/contacto">
                <Button 
                  onClick={handleContactClick}
                >
                  {t("nav.book")}
                </Button>
              </Link>
            )}
                        <button
                          onClick={toggleLanguage}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/20"
                          aria-label="Toggle language"
                          title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                        >
                          <Languages className="w-4 h-4 text-white" />
                          <span className="text-sm font-medium text-white">{language === 'es' ? 'EN' : 'ES'}</span>
                        </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/20 bg-cozy-brown/95 backdrop-blur-md rounded-lg mx-2 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`font-medium px-4 py-3 text-left rounded-md transition-all duration-500 hover:bg-white/10 text-base transform hover:translate-x-2 ${
                    pathname === item.href || pathname === item.englishHref
                      ? 'text-white bg-white/20 shadow-md'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2 space-y-2">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-primary/30 hover:bg-primary/10 transition-all duration-300 bg-white"
                >
                  <Languages className="w-4 h-4 text-primary" />
                  <span className="font-medium text-primary">{language === 'es' ? 'English' : 'Español'}</span>
                </button>
                {onHome ? (
                  <Button 
                    className="w-full"
                    onClick={handleContactClick}
                  >
                    {t("nav.book")}
                  </Button>
                ) : (
                  <Link to="/contacto" className="block">
                    <Button 
                      className="w-full"
                      onClick={handleContactClick}
                    >
                      {t("nav.book")}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating CTA Button - Mobile Optimized */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        {onHome ? (
          <Button 
            className="w-full"
            onClick={handleContactClick}
          >
            {t("nav.book")}
          </Button>
        ) : (
          <Link to="/contacto" className="block">
            <Button 
              className="w-full"
              onClick={handleContactClick}
            >
              {t("nav.book")}
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navigation;