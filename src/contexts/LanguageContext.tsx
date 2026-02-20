import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Default to Spanish, only use English if explicitly set in localStorage
    const saved = localStorage.getItem('language') as Language;
    // Only return 'en' if it's explicitly saved as 'en', otherwise default to 'es'
    if (saved === 'en') {
      return 'en';
    }
    // Default to Spanish
    return 'es';
  });

  const translations: Record<Language, Record<string, string>> = {
    es: {
      // Navigation
      'nav.about': 'Sobre Mí',
      'nav.services': 'Servicios',
      'nav.experience': 'Experiencia',
      'nav.contact': 'Contacto',
      'nav.book': 'Consultar',
      
      // Hero Section
      'hero.title': 'Arturo Suman',
      'hero.subtitle': 'Psicólogo Forense y Clínico',
      'hero.description': 'Consultoría en Psicología Forense y Clínica. Evaluación profesional, criterio técnico y respaldo científico al servicio de la justicia y la salud mental.',
      'hero.location': 'Psilegconsultants · Century Tower, Ciudad de Panamá',
      'hero.cta': 'Consultar',
      
      // About Section
      'about.title': 'Sobre Mí',
      'about.background': 'Antecedentes Profesionales',
      'about.content': 'Soy psicólogo clínico y perito idóneo con más de 17 años de experiencia en Psicología Forense, con una trayectoria profesional que incluye la realización de más de 4,000 evaluaciones psicológicas forenses, intervención en casos de alto perfil y actuación como testigo experto en múltiples audiencias judiciales.',
      'about.content2': 'Me desempeñé como coordinador de la Unidad de Psicología Forense del Instituto de Medicina Legal y Ciencias Forenses de Panamá, he sido expresidente y soy miembro activo de la Asociación Panameña de Psicología Forense, la Asociación Latinoamericana de Psicología Jurídica y Forense y la Asociación Iberoamericana de Psicología Jurídica. Desarrollo además labores como docente universitario y consultor especializado en evaluación psicológica forense.',
      'about.contributions': 'He contribuido al fortalecimiento técnico de la Psicología Forense en Panamá mediante mi participación en proyectos de alcance nacional, entre ellos:',
      'about.commitmentTitle': 'Compromiso Profesional',
      'about.contribution1': 'Elaboración de las Guías de Entrevista para Receptores de Denuncias de Violencia contra la Mujer en las Relaciones de Pareja (Ministerio Público).',
      'about.contribution2': 'Implementación del servicio de teleperitaje psicológico.',
      'about.contribution3': 'Redacción del procedimiento oficial de Psicología Forense del Instituto de Medicina Legal y Ciencias Forenses.',
      'about.contribution4': 'Autor del capítulo Lesiones psicológicas en el libro Psicopatología Forense: libro de casos (Editorial Manual Moderno).',
      'about.commitment': 'Mi ejercicio profesional se sustenta en el rigor científico, la ética profesional y el compromiso permanente con la objetividad técnica, aportando análisis psicológicos especializados que respaldan la toma de decisiones en el ámbito judicial y clínico.',
      
      // Experience Section
      'experience.title': 'Experiencia Profesional',
      'experience.private.title': 'Práctica privada',
      'experience.private.role': 'Psicólogo Clínico y Forense – PsilegaConsultant',
      'experience.private.period': 'Julio 2025 – Actualidad',
      'experience.private.location': 'Century Tower, Piso 19, Oficina 1920.',
      'experience.health.title': 'Sistema de salud',
      'experience.health.role': 'Psicólogo Clínico – Policlínica Don Alejandro de la Guardia, Hijo',
      'experience.health.organization': 'Caja de Seguro Social',
      'experience.health.period': 'Julio 2025 – Actualidad',
      'experience.legal.title': 'Instituto de Medicina Legal y Ciencias Forenses',
      'experience.legal.role': 'Psicólogo Forense y Coordinador de la Unidad de Psicología Forense',
      'experience.legal.period': '2008 – 2025',
      'experience.legal.responsibilities': 'Funciones principales:',
      'experience.legal.resp1': 'Coordinación de peritos a nivel nacional.',
      'experience.legal.resp2': 'Realización de evaluaciones psicológicas forenses.',
      'experience.legal.resp3': 'Interconsultas técnicas.',
      'experience.legal.resp4': 'Representación institucional en mesas técnicas.',
      'experience.legal.resp5': 'Elaboración de informes expertos.',
      'experience.legal.resp6': 'Actualización de procedimientos y guías de entrevista.',
      'experience.legal.resp7': 'Implementación del servicio de teleperitaje psicológico.',
      'experience.legal.resp8': 'Desarrollo del protocolo de entrevista para investigadores en casos de violencia contra la mujer en relaciones de pareja.',
      
      // Education Section
      'education.title': 'Formación Académica',
      'education.masters1': 'Maestría en Psicología Clínica (énfasis en niños y adolescentes)',
      'education.masters1.university': 'Universidad Santa María La Antigua',
      'education.masters2': 'Maestría en Psicología Jurídica y Forense',
      'education.masters2.university': 'Universidad Metropolitana de Ciencias y Tecnología',
      'education.bachelors': 'Licenciatura en Psicología',
      'education.bachelors.university': 'Universidad Interamericana de Panamá',
      
      // Affiliations Section
      'affiliations.title': 'Afiliaciones Profesionales',
      'affiliations.1': 'Miembro activo de la Asociación Panameña de Psicología Forense',
      'affiliations.2': 'Miembro suplente del Consejo Técnico de Psicología de Panamá',
      'affiliations.3': 'Miembro de la Asociación Latinoamericana de Psicología Jurídica y Forense',
      'affiliations.4': 'Miembro de la Asociación Iberoamericana de Psicología Jurídica',
      
      // Services Section
      'services.title': 'Servicios',
      'services.subtitle': 'Servicios especializados en Psicología Forense y Clínica para procesos judiciales y evaluación psicológica profesional.',
      'services.jurisdictions': 'Jurisdicciones',
      'services.forensic.title': 'Evaluación psicológica forense',
      'services.forensic.description': 'Evaluación técnica para procesos judiciales en las siguientes jurisdicciones:',
      'services.forensic.1': 'Penal',
      'services.forensic.2': 'Penitenciaria',
      'services.forensic.3': 'Civil y Familia',
      'services.forensic.4': 'Laboral y Social',
      'services.forensic.5': 'Contencioso-administrativa',
      'services.forensic.6': 'Valoración del daño psicológico',
      'services.meta.title': 'Metaperitajes psicológicos',
      'services.meta.description': 'Evaluación técnica y metodológica de un peritaje psicológico ya realizado, cuyo objetivo es analizar su calidad científica, consistencia interna, validez de conclusiones y adecuación a normas técnicas, éticas y jurídicas, sin reevaluar directamente al evaluado.',
      'services.expert.title': 'Participación en juicios orales (testimonio experto; perito de refutación)',
      'services.expert.description': 'Comparecencia como perito experto en audiencias judiciales, sustentación técnica del informe y respuesta a interrogatorios.',
      'services.prison.title': 'Atención en centros penitenciarios',
      'services.prison.description': 'Evaluación psicológica de personas privadas de libertad en centros de detención preventiva y cumplimiento de condena.',
      
      // Contact Section
      'contact.title': 'Contacto',
      'contact.subtitle': 'Para consultas profesionales y coordinación de evaluaciones:',
      'contact.email': 'Correo',
      'contact.phone': 'Teléfono',
      'contact.social': 'Redes profesionales',
      'contact.form.title': 'Enviar Mensaje',
      'contact.form.description': 'Responderé dentro de 24 horas. Todas las comunicaciones son confidenciales.',
      'contact.form.name': 'Nombre',
      'contact.form.email': 'Correo Electrónico',
      'contact.form.phone': 'Teléfono (Opcional)',
      'contact.form.message': 'Mensaje',
      'contact.form.submit': 'Enviar Mensaje',
      'contact.form.sending': 'Enviando...',
      'contact.form.success': '¡Mensaje enviado!',
      'contact.form.successMessage': 'Gracias por contactarnos. Responderemos dentro de 24 horas.',
      'contact.form.error': 'Error al enviar',
      'contact.form.errorMessage': 'Error al enviar el mensaje. Por favor intente nuevamente o contáctenos directamente.',
      'contact.form.validation.nameMin': 'El nombre debe tener al menos 2 caracteres',
      'contact.form.validation.nameMax': 'El nombre no puede exceder 100 caracteres',
      'contact.form.validation.emailInvalid': 'Por favor ingrese un email válido',
      'contact.form.validation.messageMin': 'El mensaje debe tener al menos 10 caracteres',
      'contact.form.validation.messageMax': 'El mensaje no puede exceder 1000 caracteres',
      'contact.location': 'Ubicación',
      'contact.response': 'Tiempo de respuesta',
      'contact.responseTime': 'Dentro de 24 horas',
      'contact.ctaTitle': '¿Listo para consultar?',
      'contact.ctaDescription': 'Escríbeme por WhatsApp y te responderé en menos de 24 horas. Todas las comunicaciones son confidenciales.',
      'contact.ctaButton': 'Abrir WhatsApp',
      'contact.whatsappPrefill': 'Hola, me gustaría solicitar información sobre sus servicios de psicología forense. Gracias.',
      
      // WhatsApp
      'whatsapp.label': 'Contactar por WhatsApp',

      // Footer
      'footer.privacy': 'Aviso de Privacidad',
      
      // FAQ Section
      'faq.title': 'Preguntas Frecuentes',
      'faq.subtitle': 'Respuestas a las consultas más comunes sobre mis servicios de psicología forense',
      'faq.question1': '¿Qué servicios de psicología forense ofrece?',
      'faq.answer1': 'Ofrezco evaluación psicológica forense para procesos judiciales, metaperitajes psicológicos, participación como testigo experto en juicios orales, y evaluación psicológica en centros penitenciarios. Trabajo en jurisdicciones penal, penitenciaria, civil, laboral y administrativa.',
      'faq.question2': '¿Dónde se encuentra ubicado?',
      'faq.answer2': 'Mi consultorio está ubicado en Century Tower, Piso 19, Oficina 1920, Ciudad de Panamá, Panamá. También ofrezco servicios de teleperitaje psicológico para casos a nivel nacional.',
      'faq.question3': '¿Cuánta experiencia tiene en psicología forense?',
      'faq.answer3': 'Tengo más de 17 años de experiencia en Psicología Forense, con más de 4,000 evaluaciones psicológicas forenses realizadas. Fui coordinador de la Unidad de Psicología Forense del Instituto de Medicina Legal y Ciencias Forenses de Panamá.',
      'faq.question4': '¿Qué jurisdicciones cubre en sus evaluaciones psicológicas forenses?',
      'faq.answer4': 'Realizo evaluaciones psicológicas forenses para procesos judiciales en las siguientes jurisdicciones: Penal, Penitenciaria, Civil y Familia, Laboral y Social, Contencioso-administrativa, y Valoración del daño psicológico.',
      'faq.question5': '¿Cuánto tiempo tarda una evaluación psicológica forense?',
      'faq.answer5': 'El tiempo de una evaluación psicológica forense varía según la complejidad del caso. Generalmente, el proceso completo puede tomar entre 2 a 4 semanas desde la primera entrevista hasta la entrega del informe final. Para casos más complejos, puede extenderse según sea necesario.',
      
      // Privacy
      'privacy.title': 'Aviso de Privacidad',
      'privacy.lastUpdate': 'Última actualización',
      'privacy.intro': 'En Psilegconsultants (Arturo Suman) respetamos su privacidad. Este aviso describe cómo tratamos la información en relación con este sitio web y el contacto por correo o WhatsApp.',
      'privacy.collect': 'Información que podemos recoger',
      'privacy.collectText': 'Al contactarnos por correo electrónico (psic.suman@gmail.com) o por WhatsApp ((507) 65509216), podemos recibir su nombre, correo, número de teléfono y el contenido de su mensaje. El sitio utiliza Google Tag Manager para análisis y mejora del sitio; ello puede implicar cookies según la configuración de esas herramientas.',
      'privacy.use': 'Uso de la información',
      'privacy.useText': 'La información de contacto se utiliza únicamente para responder a sus consultas profesionales y, en su caso, para la coordinación de evaluaciones o servicios de psicología forense. No vendemos ni compartimos sus datos con terceros para fines comerciales.',
      'privacy.cookies': 'Cookies y tecnologías similares',
      'privacy.cookiesText': 'Este sitio puede utilizar cookies para el funcionamiento del sitio y para análisis (por ejemplo, a través de Google Tag Manager). Puede configurar su navegador para rechazar o limitar cookies.',
      'privacy.contact': 'Contacto',
      'privacy.contactText': 'Para preguntas sobre este aviso o sus datos: psic.suman@gmail.com. Psilegconsultants, Century Tower, Piso 19, Oficina 1920, Ciudad de Panamá, Panamá.',
      'privacy.rights': 'Sus derechos',
      'privacy.rightsText': 'Puede solicitar información sobre los datos que tengamos sobre usted y, cuando aplique, la corrección o eliminación de los mismos, conforme a la ley aplicable en Panamá.',
      
      // Footer
      'footer.contact': 'Contacto',
      'footer.privacy': 'Aviso de Privacidad',
      'footer.rights': 'Psilegconsultants. Todos los derechos reservados.',
    },
    en: {
      // Navigation
      'nav.about': 'About Me',
      'nav.services': 'Services',
      'nav.experience': 'Experience',
      'nav.contact': 'Contact',
      'nav.book': 'Consult',
      
      // Hero Section
      'hero.title': 'Arturo Suman',
      'hero.subtitle': 'Forensic and Clinical Psychologist',
      'hero.description': 'Consulting in Forensic and Clinical Psychology. Professional evaluation, technical criteria and scientific support at the service of justice and mental health.',
      'hero.location': 'Psilegconsultants · Century Tower, Panama City',
      'hero.cta': 'Consult',
      
      // About Section
      'about.title': 'About Me',
      'about.background': 'Professional Background',
      'about.content': 'I am a clinical psychologist and qualified expert witness with more than 17 years of experience in Forensic Psychology, with a professional career that includes conducting more than 4,000 forensic psychological evaluations, intervention in high-profile cases and acting as an expert witness in multiple judicial hearings.',
      'about.content2': 'I served as coordinator of the Forensic Psychology Unit of the Institute of Legal Medicine and Forensic Sciences of Panama, I have been former president and am an active member of the Panamanian Association of Forensic Psychology, the Latin American Association of Legal and Forensic Psychology and the Ibero-American Association of Legal Psychology. I also work as a university professor and specialized consultant in forensic psychological evaluation.',
      'about.contributions': 'I have contributed to the technical strengthening of Forensic Psychology in Panama through my participation in national scope projects, including:',
      'about.contribution1': 'Development of Interview Guidelines for Recipients of Reports of Violence against Women in Intimate Partner Relationships (Public Ministry).',
      'about.contribution2': 'Implementation of the psychological tele-expertise service.',
      'about.contribution3': 'Drafting of the official Forensic Psychology procedure of the Institute of Legal Medicine and Forensic Sciences.',
      'about.contribution4': 'Author of the chapter Psychological injuries in the book Forensic Psychopathology: casebook (Manual Moderno Editorial).',
      'about.commitment': 'My professional practice is based on scientific rigor, professional ethics and permanent commitment to technical objectivity, providing specialized psychological analyses that support decision-making in the judicial and clinical fields.',
      'about.commitmentTitle': 'Professional Commitment',
      
      // Experience Section
      'experience.title': 'Professional Experience',
      'experience.private.title': 'Private practice',
      'experience.private.role': 'Clinical and Forensic Psychologist – PsilegaConsultant',
      'experience.private.period': 'July 2025 – Present',
      'experience.private.location': 'Century Tower, 19th Floor, Office 1920.',
      'experience.health.title': 'Health system',
      'experience.health.role': 'Clinical Psychologist – Policlínica Don Alejandro de la Guardia, Hijo',
      'experience.health.organization': 'Social Security Fund',
      'experience.health.period': 'July 2025 – Present',
      'experience.legal.title': 'Institute of Legal Medicine and Forensic Sciences',
      'experience.legal.role': 'Forensic Psychologist and Coordinator of the Forensic Psychology Unit',
      'experience.legal.period': '2008 – 2025',
      'experience.legal.responsibilities': 'Main functions:',
      'experience.legal.resp1': 'Coordination of experts at the national level.',
      'experience.legal.resp2': 'Conducting forensic psychological evaluations.',
      'experience.legal.resp3': 'Technical interconsultations.',
      'experience.legal.resp4': 'Institutional representation in technical tables.',
      'experience.legal.resp5': 'Preparation of expert reports.',
      'experience.legal.resp6': 'Updating procedures and interview guides.',
      'experience.legal.resp7': 'Implementation of the psychological tele-expertise service.',
      'experience.legal.resp8': 'Development of the interview protocol for investigators in cases of violence against women in intimate partner relationships.',
      
      // Education Section
      'education.title': 'Academic Training',
      'education.masters1': 'Master\'s in Clinical Psychology (emphasis on children and adolescents)',
      'education.masters1.university': 'Santa María La Antigua University',
      'education.masters2': 'Master\'s in Legal and Forensic Psychology',
      'education.masters2.university': 'Metropolitan University of Science and Technology',
      'education.bachelors': 'Bachelor\'s in Psychology',
      'education.bachelors.university': 'Interamerican University of Panama',
      
      // Affiliations Section
      'affiliations.title': 'Professional Affiliations',
      'affiliations.1': 'Active member of the Panamanian Association of Forensic Psychology',
      'affiliations.2': 'Alternate member of the Technical Council of Psychology of Panama',
      'affiliations.3': 'Member of the Latin American Association of Legal and Forensic Psychology',
      'affiliations.4': 'Member of the Ibero-American Association of Legal Psychology',
      
      // Services Section
      'services.title': 'Services',
      'services.subtitle': 'Specialized services in Forensic and Clinical Psychology for judicial processes and professional psychological evaluation.',
      'services.jurisdictions': 'Jurisdictions',
      'services.forensic.title': 'Forensic psychological evaluation',
      'services.forensic.description': 'Technical evaluation for judicial processes in the following jurisdictions:',
      'services.forensic.1': 'Criminal',
      'services.forensic.2': 'Penitentiary',
      'services.forensic.3': 'Civil and Family',
      'services.forensic.4': 'Labor and Social',
      'services.forensic.5': 'Administrative litigation',
      'services.forensic.6': 'Psychological damage assessment',
      'services.meta.title': 'Psychological meta-expertise',
      'services.meta.description': 'Technical and methodological evaluation of an already completed psychological expert report, whose objective is to analyze its scientific quality, internal consistency, validity of conclusions and adequacy to technical, ethical and legal standards, without directly re-evaluating the evaluated person.',
      'services.expert.title': 'Participation in oral trials (expert testimony; rebuttal expert)',
      'services.expert.description': 'Appearance as an expert witness in judicial hearings, technical support of the report and response to interrogations.',
      'services.prison.title': 'Care in penitentiary centers',
      'services.prison.description': 'Psychological evaluation of persons deprived of liberty in preventive detention centers and sentence compliance.',
      
      // Contact Section
      'contact.title': 'Contact',
      'contact.subtitle': 'For professional consultations and coordination of evaluations:',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.social': 'Professional networks',
      'contact.form.title': 'Send Message',
      'contact.form.description': 'I will respond within 24 hours. All communications are confidential.',
      'contact.form.name': 'Name',
      'contact.form.email': 'Email Address',
      'contact.form.phone': 'Phone (Optional)',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Send Message',
      'contact.form.sending': 'Sending...',
      'contact.form.success': 'Message sent!',
      'contact.form.error': 'Error sending message. Please try again.',
      'contact.location': 'Location',
      'contact.response': 'Response time',
      'contact.responseTime': 'Within 24 hours',
      'contact.ctaTitle': 'Ready to consult?',
      'contact.ctaDescription': 'Message me on WhatsApp and I\'ll reply within 24 hours. All communications are confidential.',
      'contact.ctaButton': 'Open WhatsApp',
      'contact.whatsappPrefill': 'Hello, I would like to request information about your forensic psychology services. Thank you.',

      // Footer
      'footer.privacy': 'Privacy Notice',

      // FAQ Section
      'faq.title': 'Frequently Asked Questions',
      'faq.subtitle': 'Answers to the most common questions about my forensic psychology services',
      'faq.question1': 'What forensic psychology services do you offer?',
      'faq.answer1': 'I offer forensic psychological evaluation for judicial processes, psychological meta-expertise, participation as an expert witness in oral trials, and psychological evaluation in penitentiary centers. I work in criminal, penitentiary, civil, labor and administrative jurisdictions.',
      'faq.question2': 'Where are you located?',
      'faq.answer2': 'My office is located at Century Tower, Floor 19, Office 1920, Panama City, Panama. I also offer psychological tele-expertise services for cases nationwide.',
      'faq.question3': 'How much experience do you have in forensic psychology?',
      'faq.answer3': 'I have more than 17 years of experience in Forensic Psychology, with more than 4,000 forensic psychological evaluations performed. I was coordinator of the Forensic Psychology Unit of the Institute of Legal Medicine and Forensic Sciences of Panama.',
      'faq.question4': 'What jurisdictions do you cover in your forensic psychological evaluations?',
      'faq.answer4': 'I perform forensic psychological evaluations for judicial processes in the following jurisdictions: Criminal, Penitentiary, Civil and Family, Labor and Social, Administrative, and Psychological damage assessment.',
      'faq.question5': 'How long does a forensic psychological evaluation take?',
      'faq.answer5': 'The time for a forensic psychological evaluation varies according to the complexity of the case. Generally, the complete process can take between 2 to 4 weeks from the first interview to the delivery of the final report. For more complex cases, it may be extended as necessary.',
      
      // Privacy
      'privacy.title': 'Privacy Notice',
      'privacy.lastUpdate': 'Last updated',
      'privacy.intro': 'At Psilegconsultants (Arturo Suman) we respect your privacy. This notice describes how we handle information in connection with this website and contact by email or WhatsApp.',
      'privacy.collect': 'Information we may collect',
      'privacy.collectText': 'When you contact us by email (psic.suman@gmail.com) or WhatsApp ((507) 65509216), we may receive your name, email, phone number, and the content of your message. The site uses Google Tag Manager for analytics and site improvement; this may involve cookies as per those tools’ settings.',
      'privacy.use': 'Use of information',
      'privacy.useText': 'Contact information is used only to respond to your professional inquiries and, where applicable, to coordinate evaluations or forensic psychology services. We do not sell or share your data with third parties for commercial purposes.',
      'privacy.cookies': 'Cookies and similar technologies',
      'privacy.cookiesText': 'This site may use cookies for site functionality and analytics (e.g. via Google Tag Manager). You can set your browser to reject or limit cookies.',
      'privacy.contact': 'Contact',
      'privacy.contactText': 'For questions about this notice or your data: psic.suman@gmail.com. Psilegconsultants, Century Tower, Floor 19, Office 1920, Panama City, Panama.',
      'privacy.rights': 'Your rights',
      'privacy.rightsText': 'You may request information about the data we hold about you and, where applicable, its correction or deletion, in accordance with applicable law in Panama.',
      
      // Footer
      'footer.contact': 'Contact',
      'footer.privacy': 'Privacy Notice',
      'footer.rights': 'Psilegconsultants. All rights reserved.',
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
