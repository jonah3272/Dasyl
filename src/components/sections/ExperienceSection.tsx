import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export default function ExperienceSection({ withId = true }: { withId?: boolean }) {
  const { t } = useLanguage();

  return (
    <section id={withId ? "experience" : undefined} className={`${withId ? 'py-8 sm:py-12 lg:py-16' : 'pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16'} bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/20 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-gentle-terracotta/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cozy-brown/10 to-gentle-terracotta/10 px-3 sm:px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-gentle-terracotta to-earth-clay rounded-full"></div>
          <span className="text-xs sm:text-sm font-semibold text-cozy-brown uppercase tracking-wider">{t('experience.title')}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-brown mb-8 sm:mb-12">
          {t('experience.title')}
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {/* Private Practice */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-gentle-terracotta/20 shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-gentle-terracotta" />
                    <CardTitle className="text-xl sm:text-2xl font-bold text-cozy-brown">{t('experience.private.title')}</CardTitle>
                  </div>
                  <p className="text-lg font-semibold text-gentle-terracotta">{t('experience.private.role')}</p>
                </div>
                <div className="flex items-center gap-2 text-cozy-brown/70">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm sm:text-base font-medium">{t('experience.private.period')}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2 text-cozy-brown/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{t('experience.private.location')}</span>
              </div>
            </CardHeader>
          </Card>

          {/* Health System */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-earth-clay/20 shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-earth-clay" />
                    <CardTitle className="text-xl sm:text-2xl font-bold text-cozy-brown">{t('experience.health.title')}</CardTitle>
                  </div>
                  <p className="text-lg font-semibold text-earth-clay">{t('experience.health.role')}</p>
                  <p className="text-base text-cozy-brown/80 mt-1">{t('experience.health.organization')}</p>
                </div>
                <div className="flex items-center gap-2 text-cozy-brown/70">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm sm:text-base font-medium">{t('experience.health.period')}</span>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Legal Medicine Institute */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-cozy-brown/20 shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-cozy-brown" />
                    <CardTitle className="text-xl sm:text-2xl font-bold text-cozy-brown">{t('experience.legal.title')}</CardTitle>
                  </div>
                  <p className="text-lg font-semibold text-cozy-brown">{t('experience.legal.role')}</p>
                </div>
                <div className="flex items-center gap-2 text-cozy-brown/70">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm sm:text-base font-medium">{t('experience.legal.period')}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="font-semibold text-cozy-brown mb-3">{t('experience.legal.responsibilities')}</p>
              <ul className="space-y-2.5 text-cozy-brown/80 list-none">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gentle-terracotta"></span>
                  <span className="flex-1">{t('experience.legal.resp1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gentle-terracotta"></span>
                  <span className="flex-1">{t('experience.legal.resp2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gentle-terracotta"></span>
                  <span className="flex-1">{t('experience.legal.resp3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gentle-terracotta"></span>
                  <span className="flex-1">{t('experience.legal.resp4')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gentle-terracotta"></span>
                  <span className="flex-1">{t('experience.legal.resp5')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gentle-terracotta"></span>
                  <span className="flex-1">{t('experience.legal.resp6')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gentle-terracotta"></span>
                  <span className="flex-1">{t('experience.legal.resp7')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-gentle-terracotta"></span>
                  <span className="flex-1">{t('experience.legal.resp8')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
