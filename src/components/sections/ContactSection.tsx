import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_NUMBER = "50765509216";
const EMAIL = "psic.suman@gmail.com";

export default function ContactSection({ withId = true }: { withId?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("whatsapp.prefill"))}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (response.ok) {
        toast({
          title: t("toast.successTitle"),
          description: t("toast.successDesc"),
          variant: "success",
        });
        form.reset();
        setFormOpen(false);
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setSubmitError(t("toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id={withId ? "contact" : undefined}
      data-page-hero
      className="py-8 sm:py-12 bg-gradient-to-br from-cozy-brown/5 via-warm-cream to-gentle-terracotta/10 relative overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gentle-terracotta/8 to-earth-clay/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-soft-sage/8 to-cozy-brown/8 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <header className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-cozy-brown mb-2">
            {t("contact.heading")}
            <span className="block text-gentle-terracotta">{t("contact.subheading")}</span>
          </h2>
          <p className="text-cozy-brown/80 font-medium">{t("contact.subtitle")}</p>
          <p className="text-sm text-cozy-brown/70 mt-1">{t("contact.intro")}</p>
        </header>

        {/* Primary: WhatsApp + Email CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
            aria-label={t("contact.whatsappAria")}
          >
            <MessageCircle className="w-6 h-6 shrink-0" strokeWidth={2} />
            <span>{t("contact.ctaWhatsapp")}</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-cozy-brown hover:bg-cozy-brown/90 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
            aria-label={t("contact.ctaEmail")}
          >
            <Mail className="w-6 h-6 shrink-0" />
            <span>{t("contact.ctaEmail")}</span>
          </a>
        </div>

        {/* Contact details card - SEO & clarity */}
        <Card className="bg-white/70 backdrop-blur-sm border border-cozy-brown/15 shadow-lg mb-6">
          <CardContent className="p-5 sm:p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gentle-terracotta shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-cozy-brown text-sm uppercase tracking-wider">{t("contact.emailLabel")}</p>
                <a href={`mailto:${EMAIL}`} className="text-cozy-brown/90 hover:text-gentle-terracotta break-all">
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-cozy-brown text-sm uppercase tracking-wider">{t("contact.whatsappLabel")}</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-cozy-brown/90 hover:text-[#25D366]">
                  (507) 655-09216
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gentle-terracotta shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-cozy-brown text-sm uppercase tracking-wider">{t("contact.office")}</p>
                <p className="text-cozy-brown/80 text-sm">Century Tower, Piso 19, Oficina 1920, Ciudad de Panamá, Panamá</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-earth-clay shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-cozy-brown text-sm uppercase tracking-wider">{t("contact.response")}</p>
                <p className="text-cozy-brown/80 text-sm">{t("contact.responseTime")}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Optional form - collapsible */}
        <div className="border border-soft-sage/30 rounded-xl bg-white/60 overflow-hidden">
          <button
            type="button"
            onClick={() => setFormOpen(!formOpen)}
            className="w-full flex items-center justify-between gap-2 py-3 px-4 text-left font-medium text-cozy-brown hover:bg-cozy-brown/5 transition-colors"
            aria-expanded={formOpen}
          >
            <span>{formOpen ? t("contact.formTitle") : t("contact.orForm")}</span>
            {formOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {formOpen && (
            <div className="px-4 pb-4 border-t border-soft-sage/20 pt-4">
              <p className="text-sm text-cozy-brown/70 mb-3">{t("contact.formDesc")}</p>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: "none" }}>
                  <label>No completar: <input name="bot-field" /></label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="firstName" className="text-xs font-semibold text-cozy-brown uppercase">{t("contact.firstName")}</Label>
                    <Input id="firstName" name="firstName" placeholder={t("contact.firstNamePlaceholder")} required className="h-9" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="lastName" className="text-xs font-semibold text-cozy-brown uppercase">{t("contact.lastName")}</Label>
                    <Input id="lastName" name="lastName" placeholder={t("contact.lastNamePlaceholder")} required className="h-9" />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-xs font-semibold text-cozy-brown uppercase">{t("contact.email")}</Label>
                  <Input id="email" name="email" type="email" placeholder={t("contact.emailPlaceholder")} required className="h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-xs font-semibold text-cozy-brown uppercase">{t("contact.phone")}</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(507) 655-09216" className="h-9" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message" className="text-xs font-semibold text-cozy-brown uppercase">{t("contact.message")}</Label>
                  <Textarea id="message" name="message" placeholder={t("contact.messagePlaceholder")} rows={2} required className="resize-none" />
                </div>
                {submitError && (
                  <p className="text-sm text-red-600">{submitError}</p>
                )}
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gentle-terracotta hover:bg-earth-clay">
                  {isSubmitting ? t("contact.sending") : t("contact.submit")}
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
