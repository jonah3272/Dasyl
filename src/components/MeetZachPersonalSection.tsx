import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Trophy, Coffee, Heart, Zap, Target, Users, MessageSquare } from "lucide-react";
import marathonImage from "@/assets/zach-marathon-training.jpg";
import milwaukeeSportsImage from "@/assets/milwaukee-sports-coffee.jpg";
import medalsImage from "@/assets/medals-and-achievements.jpg";

const PersonalSection = () => {
  const personalFacts = [
    {
      icon: Trophy,
      question: "What's your favorite marathon?",
      answer: "We believe the toughest conditions can create the most meaningful victories. Breakthrough moments often happen when we push through the hard stuff.",
      connection: "Progress in therapy works the same way: small steps through difficulty lead to real change."
    },
    {
      icon: Coffee,
      question: "What matters to your practice?",
      answer: "Community spirit and how people bounce back from setbacks. We believe in showing up consistently for our clients.",
      connection: "Resilience isn't about being perfect—it's about showing up consistently."
    },
    {
      icon: Target,
      question: "What drives your approach to growth?",
      answer: "The belief that small, consistent actions create lasting change. We focus on steady progress.",
      connection: "Whether in goals or daily life, progress happens one step at a time."
    }
  ];

  const passionConnections = [
    {
      icon: Zap,
      passion: "Running",
      therapeutic: "Mental endurance training",
      description: "We help clients build stamina for life's challenges through consistent, supportive work."
    },
    {
      icon: Users,
      passion: "Team Sports",
      therapeutic: "Collaborative healing",
      description: "We're in your corner—pushing you forward while respecting your pace."
    },
    {
      icon: Heart,
      passion: "Personal Growth",
      therapeutic: "Authentic connection",
      description: "Real growth happens when we drop the masks and get honest together."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-cream to-natural-beige">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-soft-sage/10 border-soft-sage/30 text-soft-sage font-medium px-4 py-2 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Beyond the License
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-cozy-brown mb-6">
            Meet Us Beyond the Office
          </h2>
          <p className="text-xl text-earth-clay max-w-3xl mx-auto">
            The people behind the practice—and how our values shape the way we support you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Personal Stories */}
          <div className="lg:col-span-8 space-y-8">
            {/* Marathon Hero Image */}
            <Card className="overflow-hidden shadow-2xl border-natural-beige">
              <div className="relative h-64 lg:h-80">
                <img 
                  src={marathonImage} 
                  alt="Dedication to personal growth and endurance"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cozy-brown/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-heading font-bold text-warm-cream mb-2">
                    "Every mile teaches you something about yourself"
                  </h3>
                  <p className="text-warm-cream/90">
                    We bring the same perseverance and commitment to every session.
                  </p>
                </div>
              </div>
            </Card>

            {/* Q&A Cards */}
            <div className="space-y-6">
              {personalFacts.map((fact, index) => {
                const IconComponent = fact.icon;
                return (
                  <Card key={index} className="p-6 border-gentle-terracotta/20 warm-hover">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gentle-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-soft-sage" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading font-semibold text-cozy-brown text-lg mb-2">
                          {fact.question}
                        </h4>
                        <p className="text-earth-clay mb-3 leading-relaxed">
                          {fact.answer}
                        </p>
                        <div className="bg-soft-sage/10 p-3 rounded-lg border-l-4 border-forest-green">
                          <p className="text-forest-green font-medium text-sm">
                            💡 {fact.connection}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Sidebar - Visual Elements */}
          <div className="lg:col-span-4 space-y-6">
            {/* Milwaukee Sports Love */}
            <Card className="p-6 bg-gradient-to-br from-forest-green/5 to-soft-sage/10 border-forest-green/20">
              <div className="text-center">
                <img 
                  src={milwaukeeSportsImage} 
                  alt="Professional space and reflection"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-heading font-bold text-cozy-brown mb-2">
                  Panama City Based
                </h4>
                <p className="text-earth-clay text-sm mb-3">
                  Rooted in Panama City—community and commitment to our clients run deep here.
                </p>
                <Badge variant="outline" className="bg-forest-green/10 border-forest-green/30 text-forest-green">
                  Local & Professional
                </Badge>
              </div>
            </Card>

            {/* Passion-Therapy Connections */}
            <Card className="p-6">
              <h4 className="font-heading font-bold text-cozy-brown mb-4 text-center">
                How Our Values Inform Our Practice
              </h4>
              <div className="space-y-4">
                {passionConnections.map((connection, index) => {
                  const IconComponent = connection.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gentle-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <IconComponent className="w-4 h-4 text-soft-sage" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-cozy-brown text-sm">
                            {connection.passion}
                          </span>
                          <span className="text-earth-clay/60 text-xs">→</span>
                          <span className="text-forest-green text-sm font-medium">
                            {connection.therapeutic}
                          </span>
                        </div>
                        <p className="text-earth-clay text-xs">
                          {connection.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;