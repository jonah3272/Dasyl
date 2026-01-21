import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, Gavel, Lock } from "lucide-react";

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
      color: 'gentle-terracotta'
    },
    {
      icon: Search,
      title: t('services.meta.title'),
      description: t('services.meta.description'),
      items: [],
      color: 'earth-clay'
    },
    {
      icon: Gavel,
      title: t('services.expert.title'),
      description: t('services.expert.description'),
      items: [],
      color: 'cozy-brown'
    },
    {
      icon: Lock,
      title: t('services.prison.title'),
      description: t('services.prison.description'),
      items: [],
      color: 'gentle-terracotta'
    },
  ];

  return (
    <section id={withId ? "services" : undefined} className={`${withId ? 'py-8 sm:py-12 lg:py-16' : 'pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16'} bg-gradient-to-br from-warm-cream via-natural-beige to-soft-sage/20 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-gentle-terracotta/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-brown mb-4">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg text-cozy-brown/70 max-w-3xl mx-auto">
            {t('services.forensic.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" style={{ borderColor: `hsl(var(--${service.color}) / 0.2)` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `hsl(var(--${service.color}) / 0.15)` }}>
                      <Icon className="w-6 h-6" style={{ color: `hsl(var(--${service.color}))` }} />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-cozy-brown leading-tight">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-base text-cozy-brown/80 mb-4 leading-relaxed">{service.description}</p>
                  {service.items.length > 0 && (
                    <div className="bg-cozy-brown/5 rounded-lg p-4 border border-cozy-brown/10">
                      <ul className="space-y-2.5 list-none">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: `hsl(var(--${service.color}))` }}></span>
                            <span className="text-sm text-cozy-brown/80 leading-relaxed flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
