import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhatsAppButton() {
  const { t } = useLanguage();
  // Replace with actual WhatsApp number (format: country code + number without + or spaces)
  // Example: "50712345678" for Panama (+507 1234-5678)
  const whatsappNumber = "507"; // TODO: Update with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-2xl hover:shadow-3xl bg-[#25D366] hover:bg-[#20BA5A] text-white transition-all duration-300 transform hover:scale-110 animate-scale-in-bounce"
      aria-label={t('whatsapp.label')}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </Button>
  );
}
