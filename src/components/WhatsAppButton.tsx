import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const whatsappNumber = "50765509216";
  const prefill = encodeURIComponent(t("contact.whatsappPrefill"));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefill}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp.label")}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full pl-4 pr-5 py-3 shadow-xl bg-[#25D366]/90 hover:bg-[#25D366] text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in-bounce border border-white/20"
    >
      <MessageCircle className="w-6 h-6 shrink-0" strokeWidth={2.5} />
      <span className="whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
