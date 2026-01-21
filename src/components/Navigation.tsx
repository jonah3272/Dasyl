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
    { name: t("nav.about"), href: "/about", anchor: "about" },
    { name: t("nav.services"), href: "/services", anchor: null },
    { name: t("nav.experience"), href: "/experience", anchor: null }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string | null) => {
    setIsMenuOpen(false);
    
    // If we're on home page and there's an anchor, scroll to it instead of navigating
    if (onHome && anchor) {
      e.preventDefault();
      const section = document.getElementById(anchor);
      if (section) {
        const headerOffset = 80;
        const elementPosition = section.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
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
      <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 py-3 sm:py-4 bg-white/95 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src="/Arturo-Suman_0000_Isotipo-Negro.png" 
              alt="Arturo Suman Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-primary truncate">
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
                onClick={(e) => handleNavClick(e, item.anchor)}
                className={`font-medium px-3 py-2 rounded-md transition-all duration-500 nav-link text-sm lg:text-base transform hover:scale-105 hover:-translate-y-0.5 ${
                  pathname === item.href
                    ? 'text-primary bg-primary/10 shadow-lg' 
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {onHome ? (
              <Button 
                className="bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold px-6 py-2 rounded-lg transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                onClick={handleContactClick}
              >
                {t("nav.book")}
              </Button>
            ) : (
              <Link to="/contact">
                <Button 
                  className="bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold px-6 py-2 rounded-lg transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                  onClick={handleContactClick}
                >
                  {t("nav.book")}
                </Button>
              </Link>
            )}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 border border-primary/20"
              aria-label="Toggle language"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Languages className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 bg-white/95 backdrop-blur-md rounded-lg mx-2 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.anchor)}
                  className={`font-medium px-4 py-3 text-left rounded-md transition-all duration-500 hover:bg-primary/5 text-base transform hover:translate-x-2 ${
                    pathname === item.href
                      ? 'text-primary bg-primary/10 shadow-md'
                      : 'text-foreground hover:text-primary'
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
                    className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-3 rounded-lg transition-all duration-500 transform hover:scale-105"
                    onClick={handleContactClick}
                  >
                    {t("nav.book")}
                  </Button>
                ) : (
                  <Link to="/contact" className="block">
                    <Button 
                      className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-3 rounded-lg transition-all duration-500 transform hover:scale-105"
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
            className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-4 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            onClick={handleContactClick}
          >
            {t("nav.book")}
          </Button>
        ) : (
          <Link to="/contact" className="block">
            <Button 
              className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-4 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
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