import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function ContactSection({ withId = true }: { withId?: boolean }) {
  const { toast } = useToast();
  const { t } = useLanguage();

  // Form validation schema
  const formSchema = z.object({
    name: z.string().min(2, t('contact.form.validation.nameMin')).max(100, t('contact.form.validation.nameMax')),
    email: z.string().email(t('contact.form.validation.emailInvalid')),
    phone: z.string().optional(),
    message: z.string().min(10, t('contact.form.validation.messageMin')).max(1000, t('contact.form.validation.messageMax')),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', values.name);
      formData.append('email', values.email);
      if (values.phone) formData.append('phone', values.phone);
      formData.append('message', values.message);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (response.ok) {
        toast({
          title: t('contact.form.success'),
          description: t('contact.form.successMessage'),
          variant: "default",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: t('contact.form.error'),
        description: t('contact.form.errorMessage'),
        variant: "destructive",
      });
    }
  };

  return (
    <section id={withId ? "contact" : undefined} data-page-hero className={`${withId ? 'py-8 sm:py-12' : 'pt-24 pb-8 sm:pt-28 sm:pb-12'} bg-gradient-to-br from-cozy-brown/5 via-warm-cream to-gentle-terracotta/10 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-gentle-terracotta/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cozy-brown mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-base sm:text-lg text-cozy-brown/70 mb-6">
                {t('contact.subtitle')}
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-gentle-terracotta/20 shadow-xl">
              <CardContent className="p-6 space-y-4">
                <a
                  href="mailto:psic.suman@gmail.com"
                  className="flex items-center gap-3 p-2 bg-cozy-brown/5 rounded-lg hover:bg-cozy-brown/10 transition-colors duration-200 cursor-pointer group"
                >
                  <Mail className="w-4 h-4 text-cozy-brown/70 group-hover:text-cozy-brown transition-colors duration-200" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm group-hover:text-cozy-brown/90">{t('contact.email')}</p>
                    <p className="text-xs text-cozy-brown/70 group-hover:text-cozy-brown">psic.suman@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/50765509216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 bg-gentle-terracotta/5 rounded-lg hover:bg-gentle-terracotta/10 transition-colors duration-200 cursor-pointer group"
                >
                  <MessageCircle className="w-4 h-4 text-gentle-terracotta/70 group-hover:text-gentle-terracotta transition-colors duration-200" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm group-hover:text-cozy-brown/90">{t('contact.phone')}</p>
                    <p className="text-xs text-cozy-brown/70 group-hover:text-cozy-brown">WhatsApp</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-2 bg-earth-clay/5 rounded-lg">
                  <MapPin className="w-4 h-4 text-earth-clay/70" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm">{t('contact.location')}</p>
                    <p className="text-xs text-cozy-brown/70">Century Tower, Piso 19, Oficina 1920, Ciudad de Panamá</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 bg-earth-clay/5 rounded-lg">
                  <Clock className="w-4 h-4 text-earth-clay/70" />
                  <div>
                    <p className="font-medium text-cozy-brown text-sm">{t('contact.response')}</p>
                    <p className="text-xs text-cozy-brown/70">{t('contact.responseTime')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-gentle-terracotta/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-cozy-brown">{t('contact.form.title')}</CardTitle>
              <CardDescription className="text-cozy-brown/70">
                {t('contact.form.description')}
              </CardDescription>
              <div className="h-1 bg-gradient-to-r from-gentle-terracotta to-earth-clay"></div>
            </CardHeader>
            <CardContent className="p-3 sm:p-4">
              <Form {...form}>
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={form.handleSubmit(onSubmit)} 
                  className="space-y-2.5 sm:space-y-3"
                >
                  {/* Netlify form detection */}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot field for spam protection */}
                  <div style={{ display: 'none' }}>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-cozy-brown text-xs uppercase tracking-wider">
                            {t('contact.form.name')} *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t('contact.form.name')} 
                              className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/80 backdrop-blur-sm rounded-lg py-1.5 text-sm h-9"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-cozy-brown text-xs uppercase tracking-wider">
                          {t('contact.form.email')} *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your.email@example.com" 
                            className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/80 backdrop-blur-sm rounded-lg py-2 text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-cozy-brown text-xs uppercase tracking-wider">
                          {t('contact.form.phone')}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="(507) 1234-5678" 
                            className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/80 backdrop-blur-sm rounded-lg py-2 text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-cozy-brown text-xs uppercase tracking-wider">
                          {t('contact.form.message')} *
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t('contact.form.message')}
                            rows={4}
                            className="border-2 border-soft-sage/30 focus:border-gentle-terracotta focus:ring-gentle-terracotta/20 bg-white/80 backdrop-blur-sm rounded-lg resize-none text-sm py-1.5"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full"
                  >
                    {form.formState.isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {t('contact.form.sending')}
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
