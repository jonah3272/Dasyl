import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function AffiliationsSection({ withId = true }: { withId?: boolean }) {
  const { t } = useLanguage();

  return (
    <section id={withId ? "affiliations" : undefined} className={`${withId ? 'py-8 sm:py-12 lg:py-16' : 'py-8 sm:py-12 lg:py-16'} bg-gradient-to-br from-natural-beige via-warm-cream to-soft-sage/10 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cozy-brown/10 to-gentle-terracotta/10 px-3 sm:px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-gentle-terracotta to-earth-clay rounded-full"></div>
          <span className="text-xs sm:text-sm font-semibold text-cozy-brown uppercase tracking-wider">{t('affiliations.title')}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-brown mb-8 sm:mb-12">
          {t('affiliations.title')}
        </h2>

        <Card className="bg-white/80 backdrop-blur-sm border-2 border-gentle-terracotta/20 shadow-xl">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-gentle-terracotta" />
              <h3 className="text-xl font-bold text-cozy-brown">{t('affiliations.title')}</h3>
            </div>
            <ul className="space-y-3 list-none">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gentle-terracotta"></span>
                <span className="text-base sm:text-lg text-cozy-brown/80 flex-1">{t('affiliations.1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gentle-terracotta"></span>
                <span className="text-base sm:text-lg text-cozy-brown/80 flex-1">{t('affiliations.2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gentle-terracotta"></span>
                <span className="text-base sm:text-lg text-cozy-brown/80 flex-1">{t('affiliations.3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gentle-terracotta"></span>
                <span className="text-base sm:text-lg text-cozy-brown/80 flex-1">{t('affiliations.4')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
