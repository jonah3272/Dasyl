import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Users, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const arturoProfessionalImage = "/Arturo Suman.jpeg";

export default function AboutSection({ withId = true }: { withId?: boolean }) {
  const { t } = useLanguage();

  return (
    <section id={withId ? "about" : undefined} className={`${withId ? 'pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-24' : 'pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24'} bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/20 relative overflow-hidden`}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gentle-terracotta/5 to-transparent"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-soft-sage/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gentle-terracotta/8 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12">
          {/* Professional Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-gentle-terracotta/20 to-soft-sage/20 rounded-3xl blur-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-tr from-cozy-brown/10 to-earth-clay/10 rounded-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
                <img
                  src={arturoProfessionalImage}
                  alt="Arturo Suman, psicólogo forense y clínico, Psilegconsultants, consultorio Century Tower Ciudad de Panamá"
                  className="w-full rounded-xl shadow-lg object-cover aspect-[3/4]"
                  loading="lazy"
                />
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-gradient-to-r from-gentle-terracotta to-earth-clay text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold shadow-xl">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                  {t('about.title')}
                </div>
              </div>
            </div>
          </div>

          {/* Professional Background Card */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-gentle-terracotta/20 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gentle-terracotta/15 flex items-center justify-center">
                    <Users className="w-5 h-5 text-gentle-terracotta" />
                  </div>
                  <CardTitle className="text-xl font-bold text-cozy-brown">{t('about.background')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base sm:text-lg text-cozy-brown/90 leading-relaxed">
                  {t('about.content')}
                </p>
                <p className="text-base sm:text-lg text-cozy-brown/90 leading-relaxed">
                  {t('about.content2')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Contributions Section */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-gentle-terracotta/10 to-earth-clay/10 border-2 border-gentle-terracotta/20 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gentle-terracotta/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-gentle-terracotta" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-cozy-brown">{t('about.contributions')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-base sm:text-lg text-cozy-brown/80 leading-relaxed list-none">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2.5" style={{ backgroundColor: `hsl(var(--gentle-terracotta))` }}></span>
                    <span className="flex-1">{t('about.contribution1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2.5" style={{ backgroundColor: `hsl(var(--gentle-terracotta))` }}></span>
                    <span className="flex-1">{t('about.contribution2')}</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-base sm:text-lg text-cozy-brown/80 leading-relaxed list-none">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2.5" style={{ backgroundColor: `hsl(var(--gentle-terracotta))` }}></span>
                    <span className="flex-1">{t('about.contribution3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2.5" style={{ backgroundColor: `hsl(var(--gentle-terracotta))` }}></span>
                    <span className="flex-1">{t('about.contribution4')}</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Commitment Section */}
        <div className="mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-soft-sage/20 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-earth-clay/15 flex items-center justify-center">
                  <Target className="w-5 h-5 text-earth-clay" />
                </div>
                <CardTitle className="text-xl font-bold text-cozy-brown">{t('about.commitmentTitle')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg text-cozy-brown/80 leading-relaxed">
                {t('about.commitment')}
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
