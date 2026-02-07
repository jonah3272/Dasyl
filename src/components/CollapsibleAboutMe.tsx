import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Coffee, Heart, Timer } from "lucide-react";

interface CollapsibleAboutMeProps {
  className?: string;
}

const CollapsibleAboutMe = ({ className = "" }: CollapsibleAboutMeProps) => {
  const [showCredentials, setShowCredentials] = useState(false);
  const [showBookingSteps, setShowBookingSteps] = useState(false);

  const credentials = [
    {
      title: "Licensed Professional",
      subtitle: "Panama City, Panama"
    },
    {
      title: "Specialized Training in Trauma-Informed Care", 
      subtitle: "CBT, DBT, Mindfulness-Based Interventions"
    },
    {
      title: "Sports Psychology Certification",
      subtitle: "Performance mindset & resilience training"
    }
  ];

  const bookingSteps = [
    {
      step: "1",
      title: "Free 15-Min Consultation",
      description: "See if we're a good fit before committing"
    },
    {
      step: "2", 
      title: "Personalized Setup",
      description: "Quick intake and insurance verification"
    },
    {
      step: "3",
      title: "Weekly Sessions Begin", 
      description: "Secure, virtual sessions focused on your goals"
    }
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Professional Credentials FAQ */}
      <Card className="border border-gray-200">
        <div className="p-6">
          <Button
            variant="ghost"
            onClick={() => setShowCredentials(!showCredentials)}
            className="w-full flex items-center justify-between text-left p-0 h-auto hover:bg-gray-50"
          >
            <div>
              <h3 className="text-base font-medium text-gray-700">Professional Credentials & Training</h3>
              <p className="text-sm text-gray-500 mt-1">View licensing and specialized certifications</p>
            </div>
            {showCredentials ? (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            )}
          </Button>
          
          {showCredentials && (
            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className="border-soft-sage text-soft-sage">
                  <Coffee className="w-3 h-3 mr-1" />
                  Sports Psychology
                </Badge>
                <Badge variant="outline" className="border-soft-sage text-soft-sage">
                  <Heart className="w-3 h-3 mr-1" />
                  Life Coach
                </Badge>
              </div>

              <div className="grid gap-4">
                {credentials.map((credential, index) => (
                  <div key={index} className="border-l-4 border-l-gentle-terracotta pl-4 py-3">
                    <p className="font-medium text-gray-900 mb-1">
                      {credential.title}
                    </p>
                    <p className="text-sm text-gray-700">{credential.subtitle}</p>
                  </div>
                ))}
              </div>

              <div className="text-center py-4 border-t border-gray-200 mt-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gentle-terracotta/10 rounded-full mx-auto mb-3">
                  <Timer className="w-6 h-6 text-soft-sage" />
                </div>
                <p className="text-2xl font-bold text-gray-900">7+</p>
                <p className="text-sm text-gray-700">Years in Practice</p>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Booking Process FAQ */}
      <Card className="border border-gray-200">
        <div className="p-6">
          <Button
            variant="ghost"
            onClick={() => setShowBookingSteps(!showBookingSteps)}
            className="w-full flex items-center justify-between text-left p-0 h-auto hover:bg-gray-50"
          >
            <div>
              <h3 className="text-base font-medium text-gray-700">How to Get Started</h3>
              <p className="text-sm text-gray-500 mt-1">Simple 3-step process to begin therapy</p>
            </div>
            {showBookingSteps ? (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            )}
          </Button>
          
          {showBookingSteps && (
            <div className="mt-6 space-y-4">
              {bookingSteps.map((step, index) => (
                <div key={index} className="flex gap-4 p-4 border border-gray-100 rounded-lg">
                  <div className="w-8 h-8 bg-gentle-terracotta text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="text-center pt-4 border-t border-gray-200 mt-6">
                <p className="text-sm text-gray-600">
                  ⚡ Limited spots available this month
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CollapsibleAboutMe;