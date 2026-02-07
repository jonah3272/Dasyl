import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_NUMBER = "50765509216";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const onHome = pathname === "/";

  const whatsappText = t("whatsapp.prefill");
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;

  const navItems = [
    { nameKey: "nav.about", href: onHome ? "/#about" : "/about" },
    { nameKey: "nav.specialties", href: "/specialties" },
    { nameKey: "nav.approach", href: "/approach" },
    { nameKey: "nav.pricing", href: "/pricing" },
    { nameKey: "nav.contact", href: "/contact" },
  ];

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
      <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 py-3 sm:py-4 bg-white/95 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/"
            onClick={handleLogoClick}
            className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-primary truncate hover:text-primary/80 transition-colors duration-300"
          >
            <span className="hidden sm:inline">Psilegconsultants</span>
            <span className="sm:hidden">Psilegconsultants</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={t("nav.menuAria")}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.nameKey}
                to={item.href}
                onClick={handleNavClick}
                className={`font-medium px-3 py-2 rounded-md transition-all duration-500 nav-link text-sm lg:text-base transform hover:scale-105 hover:-translate-y-0.5 ${
                  (pathname === item.href || (item.nameKey === "nav.about" && pathname === "/about")) 
                    ? 'text-primary bg-primary/10 shadow-lg' 
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {t(item.nameKey)}
              </Link>
            ))}
            {/* Language switcher: Spanish primary, English option */}
            <div className="flex items-center gap-1 border border-primary/20 rounded-lg p-0.5">
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 text-sm font-medium rounded-md transition-colors ${language === "es" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"}`}
                aria-label="Español"
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 text-sm font-medium rounded-md transition-colors ${language === "en" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10"}`}
                aria-label="English"
              >
                EN
              </button>
            </div>
            {onHome ? (
              <Button 
                className="bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold px-6 py-2 rounded-lg transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                onClick={handleContactClick}
              >
                📅 {t("nav.cta")}
              </Button>
            ) : (
              <Link to="/contact">
                <Button 
                  className="bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold px-6 py-2 rounded-lg transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                  onClick={handleContactClick}
                >
                  📅 {t("nav.cta")}
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 bg-white/95 backdrop-blur-md rounded-lg mx-2 animate-in slide-in-from-top duration-300">
            <div className="flex items-center gap-2 px-4 pb-2 border-b border-border/50">
              <span className="text-xs font-medium text-cozy-brown/80">Idioma / Language:</span>
              <button type="button" onClick={() => { setLanguage("es"); setIsMenuOpen(false); }} className={`px-2 py-1 text-sm font-medium rounded ${language === "es" ? "bg-primary text-primary-foreground" : "bg-primary/10"}`}>ES</button>
              <button type="button" onClick={() => { setLanguage("en"); setIsMenuOpen(false); }} className={`px-2 py-1 text-sm font-medium rounded ${language === "en" ? "bg-primary text-primary-foreground" : "bg-primary/10"}`}>EN</button>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.nameKey}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`font-medium px-4 py-3 text-left rounded-md transition-all duration-500 hover:bg-primary/5 text-base transform hover:translate-x-2 ${
                    (pathname === item.href || (item.nameKey === "nav.about" && pathname === "/about"))
                      ? 'text-primary bg-primary/10 shadow-md'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {t(item.nameKey)}
                </Link>
              ))}
              <div className="px-4 pt-2">
                {onHome ? (
                  <Button 
                    className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-3 rounded-lg transition-all duration-500 transform hover:scale-105"
                    onClick={handleContactClick}
                  >
                    📅 {t("nav.cta")}
                  </Button>
                ) : (
                  <Link to="/contact" className="block">
                    <Button 
                      className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-3 rounded-lg transition-all duration-500 transform hover:scale-105"
                      onClick={handleContactClick}
                    >
                      📅 {t("nav.cta")}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp FAB - always visible for instant contact (above mobile CTA bar) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label={t("contact.whatsappAria")}
      >
        <MessageCircle className="w-7 h-7" strokeWidth={2} />
      </a>

      {/* Floating CTA Button - Mobile Optimized */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        {onHome ? (
          <Button 
            className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-4 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            onClick={handleContactClick}
          >
            <span className="hidden sm:inline">📅 {t("nav.cta")}</span>
            <span className="sm:hidden">📅 {t("nav.ctaShort")}</span>
          </Button>
        ) : (
          <Link to="/contact" className="block">
            <Button 
              className="w-full bg-gradient-to-r from-gentle-terracotta to-earth-clay hover:from-earth-clay hover:to-gentle-terracotta text-white font-bold py-4 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              onClick={handleContactClick}
            >
              <span className="hidden sm:inline">📅 {t("nav.cta")}</span>
              <span className="sm:hidden">📅 {t("nav.ctaShort")}</span>
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navigation;