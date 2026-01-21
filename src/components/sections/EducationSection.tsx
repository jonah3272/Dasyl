import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function EducationSection({ withId = true }: { withId?: boolean }) {
  const { t } = useLanguage();

  return (
    <section id={withId ? "education" : undefined} className={`${withId ? 'py-8 sm:py-12 lg:py-16' : 'py-8 sm:py-12 lg:py-16'} bg-gradient-to-br from-soft-sage/10 via-warm-cream to-natural-beige relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cozy-brown/10 to-gentle-terracotta/10 px-3 sm:px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-gentle-terracotta to-earth-clay rounded-full"></div>
          <span className="text-xs sm:text-sm font-semibold text-cozy-brown uppercase tracking-wider">{t('education.title')}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-brown mb-8 sm:mb-12">
          {t('education.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-gentle-terracotta/20 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-6 h-6 text-gentle-terracotta" />
                <CardTitle className="text-lg font-bold text-cozy-brown">{t('education.masters1')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-cozy-brown/80 font-medium">{t('education.masters1.university')}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-2 border-earth-clay/20 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-6 h-6 text-earth-clay" />
                <CardTitle className="text-lg font-bold text-cozy-brown">{t('education.masters2')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-cozy-brown/80 font-medium">{t('education.masters2.university')}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-2 border-cozy-brown/20 shadow-xl md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-6 h-6 text-cozy-brown" />
                <CardTitle className="text-lg font-bold text-cozy-brown">{t('education.bachelors')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-cozy-brown/80 font-medium">{t('education.bachelors.university')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
