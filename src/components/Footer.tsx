import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PHONE_DISPLAY = "(507) 6550-9216";
const PHONE_LINK = "50765509216"; // for wa.me (no + or spaces)
const EMAIL = "psic.suman@gmail.com";

export default function Footer() {
  const { t, language } = useLanguage();
  const privacyPath = language === "es" ? "/privacidad" : "/privacy";

  return (
    <footer className="bg-cozy-brown text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          <div className="text-center sm:text-left">
            <p className="font-medium">© 2026 Arturo Suman</p>
            <p className="text-white/80 mt-1 text-xs">
              Century Tower, Piso 19, Oficina 1920, Ciudad de Panamá, Panamá
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors min-h-[44px] justify-center py-2 px-3 rounded-lg active:bg-white/10"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden />
              <span className="break-all">{EMAIL}</span>
            </a>
            <a
              href={`https://wa.me/${PHONE_LINK}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors min-h-[44px] justify-center py-2 px-3 rounded-lg active:bg-white/10"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <Link
              to={privacyPath}
              className="text-white/90 hover:text-white transition-colors min-h-[44px] flex items-center justify-center py-2 px-3 rounded-lg active:bg-white/10"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
