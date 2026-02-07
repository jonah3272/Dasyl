import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

interface CTASectionProps {
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

const CTASection = ({ variant = "primary", className = "" }: CTASectionProps) => {
const ctaConfig = {
    primary: {
      title: "📅 Book Your Free Consultation",
      subtitle: "15 minutes to see if we're a good fit. Zero pressure, total clarity.",
      buttonText: "Secure Your Free 15-Min Call",
      buttonIcon: Calendar,
      bgGradient: "from-gentle-terracotta to-earth-clay",
      textColor: "text-warm-cream"
    },
    secondary: {
      title: "See If We're a Good Fit",
      subtitle: "Real breakthrough requires the right therapist. Let's find out if that's me.",
      buttonText: "Check Availability Now",
      buttonIcon: MessageCircle,
      bgGradient: "from-forest-green to-soft-sage",
      textColor: "text-warm-cream"
    },
    tertiary: {
      title: "Secure Your Spot—Limited New Clients",
      subtitle: "Quality over quantity. I only take on clients I can truly help succeed.",
      buttonText: "Reserve Your Breakthrough Session",
      buttonIcon: ArrowRight,
      bgGradient: "from-cozy-brown to-gentle-terracotta",
      textColor: "text-warm-cream"
    }
  };

  const config = ctaConfig[variant];
  const ButtonIcon = config.buttonIcon;

  const handleClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const headerOffset = 80;
      const elementPosition = contactElement.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        <div 
          className={`bg-gradient-to-r ${config.bgGradient} rounded-3xl p-8 lg:p-12 text-center shadow-2xl transform hover:scale-105 transition-all duration-300`}
        >
          <h3 className={`text-3xl lg:text-4xl font-heading font-bold ${config.textColor} mb-4`}>
            {config.title}
          </h3>
          <p className={`text-lg ${config.textColor}/90 mb-8 max-w-2xl mx-auto`}>
            {config.subtitle}
          </p>
          <Button 
            onClick={handleClick}
            size="lg"
            variant="secondary"
            className="font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 min-w-[280px]"
          >
            <ButtonIcon className="w-6 h-6 mr-3" />
            {config.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
            {config.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;