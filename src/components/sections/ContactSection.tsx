import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_NUMBER = "50765509216";
const EMAIL = "psic.suman@gmail.com";

export default function ContactSection({ withId = true }: { withId?: boolean }) {
  const { t } = useLanguage();
  const whatsappPrefill = encodeURIComponent(t("contact.whatsappPrefill"));
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappPrefill}`;

  return (
    <section id={withId ? "contact" : undefined} data-page-hero className={`${withId ? 'py-8 sm:py-12' : 'pt-24 pb-8 sm:pt-28 sm:pb-12'} bg-gradient-to-br from-cozy-brown/5 via-warm-cream to-gentle-terracotta/10 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-gentle-terracotta/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Contact Information */}
          <div className="flex flex-col min-w-0">
            <div className="space-y-6 flex-1">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-brown mb-4">
                {t("contact.title")}
              </h2>
              <p className="text-base sm:text-lg text-cozy-brown/70 mb-6">
                {t("contact.subtitle")}
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-gentle-terracotta/20 shadow-xl">
              <CardContent className="p-6 space-y-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 p-2 bg-cozy-brown/5 rounded-lg hover:bg-cozy-brown/10 transition-colors duration-200 cursor-pointer group"
                >
                  <Mail className="w-4 h-4 text-cozy-brown/70 group-hover:text-cozy-brown transition-colors duration-200" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm group-hover:text-cozy-brown/90">{t("contact.email")}</p>
                    <p className="text-xs text-cozy-brown/70 group-hover:text-cozy-brown">{EMAIL}</p>
                  </div>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 bg-gentle-terracotta/5 rounded-lg hover:bg-gentle-terracotta/10 transition-colors duration-200 cursor-pointer group"
                >
                  <MessageCircle className="w-4 h-4 text-gentle-terracotta/70 group-hover:text-gentle-terracotta transition-colors duration-200" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm group-hover:text-cozy-brown/90">{t("contact.phone")}</p>
                    <p className="text-xs text-cozy-brown/70 group-hover:text-cozy-brown">(507) 6550-9216 · WhatsApp</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-2 bg-earth-clay/5 rounded-lg">
                  <MapPin className="w-4 h-4 text-earth-clay/70" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm">{t("contact.location")}</p>
                    <p className="text-xs text-cozy-brown/70">Century Tower, Piso 19, Oficina 1920, Ciudad de Panamá</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-earth-clay/5 rounded-lg">
                  <Clock className="w-4 h-4 text-earth-clay/70" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm">{t("contact.response")}</p>
                    <p className="text-xs text-cozy-brown/70">{t("contact.responseTime")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>

          {/* WhatsApp CTA - site palette, soft accent */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-gentle-terracotta/20 shadow-xl overflow-hidden flex flex-col min-h-0">
            <div className="h-1.5 bg-gradient-to-r from-soft-sage/40 to-gentle-terracotta/30 shrink-0" aria-hidden="true" />
            <CardContent className="p-6 sm:p-8 flex flex-col justify-center flex-1 min-h-[260px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-soft-sage/20 text-gentle-terracotta">
                  <MessageCircle className="w-8 h-8" strokeWidth={2} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-cozy-brown">
                  {t("contact.ctaTitle")}
                </h3>
              </div>
              <p className="text-cozy-brown/80 text-base sm:text-lg mb-6 leading-relaxed">
                {t("contact.ctaDescription")}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-gentle-terracotta hover:bg-earth-clay text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                aria-label={t("contact.ctaButton")}
              >
                <MessageCircle className="w-6 h-6 shrink-0" />
                <span>{t("contact.ctaButton")}</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
              <p className="text-xs text-cozy-brown/60 mt-4">
                (507) 6550-9216
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
