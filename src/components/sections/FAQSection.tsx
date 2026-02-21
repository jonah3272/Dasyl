import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ArrowRight } from "lucide-react";

export default function FAQSection({ withId = true }: { withId?: boolean }) {
  const { t, language } = useLanguage();

  const faqs = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1'),
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2'),
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3'),
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4'),
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5'),
    },
  ];

  return (
    <section id={withId ? "faq" : undefined} className={`${withId ? 'py-8 sm:py-12 lg:py-16' : 'py-8 sm:py-12 lg:py-16'} bg-gradient-to-br from-natural-beige via-warm-cream to-soft-sage/20 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-gentle-terracotta/5 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-gentle-terracotta" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-brown">
              {t('faq.title')}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-cozy-brown/70 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-2 border-gentle-terracotta/20 shadow-xl">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-cozy-brown/10">
                  <AccordionTrigger className="text-left text-cozy-brown hover:text-gentle-terracotta font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-cozy-brown/80 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {withId && (
          <div className="text-center mt-8">
            <Link
              to={language === "es" ? "/contacto" : "/contact"}
              className="inline-flex items-center gap-2 text-gentle-terracotta hover:text-earth-clay font-semibold transition-colors"
            >
              {t("contact.ctaTitle")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
