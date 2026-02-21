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
      className="fixed z-50 flex items-center justify-center rounded-full w-14 h-14 min-w-[56px] min-h-[56px] shadow-lg bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all duration-200 hover:scale-105 active:scale-95 right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="w-7 h-7 shrink-0" strokeWidth={2} />
    </a>
  );
}
