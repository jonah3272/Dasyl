import { Button } from "@/components/ui/button";
import profileBackground from "@/assets/profile-background.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div 
              className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${profileBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <img 
                src="/lovable-uploads/cdf59d60-5cd7-45de-9554-8f08c496eb35.png"
                alt="Professional headshot"
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full h-full object-cover object-top"
              />
            </div>
          </div>
          
          {/* About Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-8">You Deserve a Therapist Who Understands and Supports You</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
              I am a Licensed Clinical Social Worker who knows seeking therapy takes courage. You want more than credentials. You want a compassionate, judgment-free space where your unique experiences are understood. Whether facing anxiety, depression, life transitions, or relationship challenges, I combine clinical expertise with genuine care to guide your healing journey. Outside sessions, I am a Bucks fan and runner. Together we will build an authentic connection that supports your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-action-primary hover:bg-action-primary-hover text-action-primary-foreground px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const headerOffset = 80;
                    const elementPosition = contactSection.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                🤝 See If We're a Good Fit
              </Button>
              <Button 
                variant="outline" 
                className="border-action-primary text-action-primary hover:bg-action-primary/10 px-8 py-3 rounded-lg transition-all duration-300"
                onClick={() => {
                  const approachSection = document.getElementById('virtual-therapy');
                  if (approachSection) {
                    const headerOffset = 80;
                    const elementPosition = approachSection.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                📖 Read About My Approach
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
                  const approachSection = document.getElementById('virtual-therapy');
                  if (approachSection) {
                    const headerOffset = 80;
                    const elementPosition = approachSection.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                📖 Read About My Approach
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;