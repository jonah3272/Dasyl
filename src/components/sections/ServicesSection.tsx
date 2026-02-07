import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, Gavel, Lock, CheckCircle2 } from "lucide-react";

export default function ServicesSection({ withId = true }: { withId?: boolean }) {
  const { t } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t('services.forensic.title'),
      description: t('services.forensic.description'),
      items: [
        t('services.forensic.1'),
        t('services.forensic.2'),
        t('services.forensic.3'),
        t('services.forensic.4'),
        t('services.forensic.5'),
        t('services.forensic.6'),
      ],
      color: 'gentle-terracotta',
      featured: true
    },
    {
      icon: Search,
      title: t('services.meta.title'),
      description: t('services.meta.description'),
      items: [],
      color: 'earth-clay',
      featured: false
    },
    {
      icon: Gavel,
      title: t('services.expert.title'),
      description: t('services.expert.description'),
      items: [],
      color: 'cozy-brown',
      featured: false
    },
    {
      icon: Lock,
      title: t('services.prison.title'),
      description: t('services.prison.description'),
      items: [],
      color: 'gentle-terracotta',
      featured: false
    },
  ];

  const featuredService = services.find(s => s.featured);
  const otherServices = services.filter(s => !s.featured);

  return (
    <section id={withId ? "services" : undefined} className={`${withId ? 'py-12 sm:py-16 lg:py-20' : 'pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20'} bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/20 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-gentle-terracotta/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-brown mb-4">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg text-cozy-brown/70 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Featured Service - Full Width */}
        {featuredService && (
          <Card className="bg-white/90 backdrop-blur-sm border-2 shadow-xl hover:shadow-2xl transition-all duration-300 mb-8 lg:mb-12" style={{ borderColor: `hsl(var(--${featuredService.color}) / 0.3)` }}>
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: `hsl(var(--${featuredService.color}) / 0.15)` }}>
                  {(() => {
                    const Icon = featuredService.icon;
                    return <Icon className="w-7 h-7" style={{ color: `hsl(var(--${featuredService.color}))` }} />;
                  })()}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-cozy-brown mb-3">
                    {featuredService.title}
                  </CardTitle>
                  <p className="text-base text-cozy-brown/80 leading-relaxed">
                    {featuredService.description}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-cozy-brown/5 to-gentle-terracotta/5 rounded-xl p-5 sm:p-6 border border-cozy-brown/10">
                <h3 className="text-sm font-semibold text-cozy-brown/70 uppercase tracking-wide mb-4">
                  {t('services.jurisdictions')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {featuredService.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3 group">
                      <CheckCircle2 
                        className="w-5 h-5 flex-shrink-0 mt-0.5" 
                        style={{ color: `hsl(var(--${featuredService.color}))` }}
                      />
                      <span className="text-sm sm:text-base text-cozy-brown/80 leading-relaxed flex-1 group-hover:text-cozy-brown transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Other Services - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {otherServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col" style={{ borderColor: `hsl(var(--${service.color}) / 0.2)` }}>
                <CardHeader className="pb-3">
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `hsl(var(--${service.color}) / 0.15)` }}>
                      <Icon className="w-6 h-6" style={{ color: `hsl(var(--${service.color}))` }} />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-cozy-brown leading-tight">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex-grow">
                  <p className="text-base text-cozy-brown/80 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
