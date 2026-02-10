import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const privacyPath = language === "es" ? "/privacidad" : "/privacy";

  return (
    <footer className="bg-cozy-brown/95 text-white border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/90 text-center sm:text-left">
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:psic.suman@gmail.com"
              className="text-sm text-white/90 hover:text-white transition-colors"
            >
              psic.suman@gmail.com
            </a>
            <a
              href="https://wa.me/50765509216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/90 hover:text-white transition-colors"
            >
              (507) 65509216
            </a>
            <Link
              to={privacyPath}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
        <p className="text-xs text-white/70 mt-3 text-center sm:text-left">
          Psilegconsultants · Century Tower, Piso 19, Oficina 1920, Ciudad de Panamá, Panamá
        </p>
      </div>
    </footer>
  );
}
